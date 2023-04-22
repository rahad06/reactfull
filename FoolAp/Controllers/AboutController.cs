using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoolAp.Controllers;

    [ApiController]
    [Route("api/[controller]")]
    public class AboutController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public AboutController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<About>>> GetAbout(string language)
        {
            var abouts = await _dbContext.Abouts
                .Where(a => a.Language == language)
                .ToListAsync();
        
            return Ok(abouts);
        }

        [HttpPost]
        public async Task<ActionResult> UpdateAbout([FromBody] About updatedAbout)
        {
            var existingAbout = await _dbContext.Abouts
                .SingleOrDefaultAsync(a => a.Id == updatedAbout.Id && a.Language == updatedAbout.Language);

            if (existingAbout == null)
            {
                return NotFound();
            }

            existingAbout.Title = updatedAbout.Title;
            existingAbout.ImageUrl = updatedAbout.ImageUrl;
            existingAbout.ShortDescription = updatedAbout.ShortDescription;
            existingAbout.LongDescription = updatedAbout.LongDescription;

            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }

