using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoolAp.Controllers;

 [ApiController]
    [Route("api/[controller]")]
    public class PorfolioController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public PorfolioController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        [HttpPost]
        public async Task<ActionResult<Porfolio>> CreateProject([FromQuery] string language, Porfolio newProject)
        {
            newProject.Language = language;

            _dbContext.Projects.Add(newProject);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProjectById), new { id = newProject.Id, language = newProject.Language }, newProject);
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Porfolio>>> GetAllBProjects([FromQuery] string language = "en")
        {
            var project = await _dbContext.Projects
                .Where(bp => bp.Language == language)
                .ToListAsync();


            if (!project.Any())
            {
                return NotFound($"No project found for the specified language ({language})");
            }

            return Ok(project);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Porfolio>> GetProjectById(int id, [FromQuery] string language = "en")
        {
            var project = await _dbContext.Projects
                .Where(b => b.Language == language && b.Id == id)
                .FirstOrDefaultAsync();

            if (project == null)
            {
                return NotFound($"No project found for the specified ID ({id}) and language ({language})");
            }

            return Ok(project);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Porfolio>> UpdateProject(int id, [FromQuery] string language, Porfolio updatedProject)
        {
            var project = await _dbContext.Projects
                .Where(b => b.Language == language && b.Id == id)
                .FirstOrDefaultAsync();

            if (project == null)
            {
                return NotFound($"No project found for the specified ID and language ({language})");
            }

            project.Title = updatedProject.Title;
            project.Content = updatedProject.Content;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
                {
                    return NotFound($"No blog post found for the specified ID ({id}) and language ({language})");
                }
                else
                {
                    throw;
                }
            }

            return Ok(project);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Porfolio>> DeleteProject(int id, [FromQuery] string language = "en")
        {
            var project = await _dbContext.Projects
                .Where(b => b.Language == language && b.Id == id)
                .FirstOrDefaultAsync();

            if (project == null)
            {
                return NotFound($"No blog post found for the specified ID  and language ({language})");
            }

            _dbContext.Projects.Remove(project);
            await _dbContext.SaveChangesAsync();

            return Ok(project);
        }

        private bool ProjectExists(int id)
        {
            return _dbContext.Projects.Any(b => b.Id == id);
        }
    }