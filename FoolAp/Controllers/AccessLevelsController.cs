using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoolAp.Data;
using FoolAp.Models;

namespace FoolAp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccessLevelsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AccessLevelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/accesslevels
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<IEnumerable<AccessLevel>>> GetAccessLevels()
        {
            return await _context.AccessLevels.ToListAsync();
        }

        // GET: api/accesslevels/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<AccessLevel>> GetAccessLevel(int id)
        {
            var accessLevel = await _context.AccessLevels.FindAsync(id);

            if (accessLevel == null)
            {
                return NotFound();
            }

            return accessLevel;
        }

        // POST: api/accesslevels
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<AccessLevel>> PostAccessLevel(AccessLevel accessLevel)
        {
            _context.AccessLevels.Add(accessLevel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccessLevel", new { id = accessLevel.Id }, accessLevel);
        }

        // PUT: api/accesslevels/5
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> PutAccessLevel(int id, AccessLevel accessLevel)
        {
            if (id != accessLevel.Id)
            {
                return BadRequest();
            }

            _context.Entry(accessLevel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccessLevelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/accesslevels/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteAccessLevel(int id)
        {
            var accessLevel = await _context.AccessLevels.FindAsync(id);
            if (accessLevel == null)
            {
                return NotFound();
            }

            _context.AccessLevels.Remove(accessLevel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccessLevelExists(int id)
        {
            return _context.AccessLevels.Any(e => e.Id == id);
        }
    }
}
