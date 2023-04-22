using System.Security.Claims;
using BCrypt.Net;
using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoolAp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly ApplicationDbContext _dbContext;

    public UsersController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(User model)
    {
        // Check if the UserName already exists
        if (await _dbContext.Users.AnyAsync(u => u.UserName == model.UserName))
        {
            return BadRequest("UserName already exists");
        }

        // Create a new user
        var user = new User
        {
            UserName = model.UserName,
            Email = model.Email,
            Password = BCrypt.Net.BCrypt.HashPassword(model.Password, BCrypt.Net.BCrypt.GenerateSalt(), true, HashType.SHA512)
        };
        await _dbContext.Users.AddAsync(user);
        await _dbContext.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("login")]

    public async Task<IActionResult> Login(User model)
    {
        // Find the user by UserName
        var user = await _dbContext.Users.SingleOrDefaultAsync(u => u.UserName == model.UserName);
        if (user == null)
        {
            return BadRequest("Invalid UserName or password");
        }

        // Verify the password
        if (!BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
        {

// Hash password
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(model.Password, BCrypt.Net.BCrypt.GenerateSalt(12));

// Verify password
            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(model.Password, hashedPassword);
            
        }

        // Set session variables
        HttpContext.Session.SetInt32("UserId", user.Id);
        HttpContext.Session.SetString("UserName", user.UserName);

        var authProperties = new AuthenticationProperties
        {
            IsPersistent = model.RememberMe,
            ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(15)
        };

        await HttpContext.SignInAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new ClaimsPrincipal(),
            authProperties);

        return Ok();
    }

    [HttpPost("logout")]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        return Ok();
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
    {
        var users = await _dbContext.Users.ToListAsync();

        if (users == null || users.Count == 0)
        {
            return NotFound("No users found");
        }

        return Ok(users);
    }

    
}