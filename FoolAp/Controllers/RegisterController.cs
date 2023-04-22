using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoolAp.Controllers;


[ApiController]
[Route("[controller]")]
public class RegisterController : ControllerBase
{
    private readonly ApplicationDbContext _dbContext;

    public RegisterController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
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
            Password = model.Password // you can store the plain text password in the database
        };
        await _dbContext.Users.AddAsync(user);
        await _dbContext.SaveChangesAsync();

        return Ok();
    }
}