using System.Security.Claims;
using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoolAp.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class LoginController : ControllerBase
{
    private readonly ApplicationDbContext _dbContext;

    public LoginController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
    public async Task<IActionResult> Login(User model)
    {
        // Find the user by UserName
        var user = await _dbContext.Users.SingleOrDefaultAsync(u => u.UserName == model.UserName);
        if (user == null)
        {
            return BadRequest("Invalid UserName or password");
        }

        string password = model.Password;
        string storedPassword = user.Password;

        // Verify the password
        if (password != storedPassword)
        {
            return BadRequest("Invalid UserName or password");
        }

        // Set session variables
// Set session variables
        HttpContext.Session.SetString("UserName", user.UserName);

// Get session variables
        var userName = HttpContext.Session.GetString("UserName");

        return Ok();
    }
    
    
   

}