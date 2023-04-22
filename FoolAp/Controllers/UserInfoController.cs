using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
namespace FoolAp.Controllers;


[ApiController]
[Route("api/[controller]")]
public class UserInfoController : ControllerBase
{
    private readonly ApplicationDbContext _dbContext;

    public UserInfoController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        // Get the currently authenticated user's ID
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            
        // Make sure the currently authenticated user is the one requesting the information
        if (id.ToString() != userId)
        {
            return Forbid();
        }

        // Retrieve user information from the database
        var user = await _dbContext.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        // Return user information
        return Ok(user);
    }
}
