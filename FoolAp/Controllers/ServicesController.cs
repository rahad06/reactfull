using Microsoft.AspNetCore.Mvc;
using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace FoolAp.Controllers;




 [ApiController]
    [Route("api/[controller]")]
    public class ServiceController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ServiceController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        [HttpPost]
        public async Task<ActionResult<Service>> CreateService([FromQuery] string language, Service newService)
        {
            newService.Language = language;

            _dbContext.Services.Add(newService);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetServiceById), new { id = newService.Id, language = newService.Language }, newService);
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Service>>> GetAllBServices([FromQuery] string language = "en")
        {
            var service = await _dbContext.Services
                .Where(bp => bp.Language == language)
                .ToListAsync();


            if (!service.Any())
            {
                return NotFound($"No service found for the specified language ({language})");
            }

            return Ok(service);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Service>> GetServiceById(int id, [FromQuery] string language = "en")
        {
            var service = await _dbContext.Services
                .Where(b => b.Language == language && b.Id == id)
                .FirstOrDefaultAsync();

            if (service == null)
            {
                return NotFound($"No service found for the specified ID ({id}) and language ({language})");
            }

            return Ok(service);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Service>> UpdateService(int id, [FromQuery] string language, Service updatedService)
        {
            var service = await _dbContext.Services
                .Where(b => b.Language == language && b.Id == id)
                .FirstOrDefaultAsync();

            if (service == null)
            {
                return NotFound($"No service found for the specified ID and language ({language})");
            }

            service.Title = updatedService.Title;
            service.Content = updatedService.Content;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceExists(id))
                {
                    return NotFound($"No blog post found for the specified ID ({id}) and language ({language})");
                }
                else
                {
                    throw;
                }
            }

            return Ok(service);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Service>> DeleteService(int id, [FromQuery] string language = "en")
        {
            var service = await _dbContext.Services
                .Where(b => b.Language == language && b.Id == id)
                .FirstOrDefaultAsync();

            if (service == null)
            {
                return NotFound($"No blog post found for the specified ID  and language ({language})");
            }

            _dbContext.Services.Remove(service);
            await _dbContext.SaveChangesAsync();

            return Ok(service);
        }

        private bool ServiceExists(int id)
        {
            return _dbContext.Services.Any(b => b.Id == id);
        }
    }