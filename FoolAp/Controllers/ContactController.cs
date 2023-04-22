using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoolAp.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly ApplicationDbContext _dbContext;

    public ContactController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet("{language}")]
    public async Task<ActionResult<Contact>> GetContact(string language)
    {
        // Set default language to English
        if (string.IsNullOrWhiteSpace(language))
            language = "en";

        // Get contact information based on language
        var contact = await _dbContext.Contacts.FirstOrDefaultAsync(c => c.Language == language);

        if (contact == null)
        {
            return NotFound("No contact information found for the specified language");
        }

        return Ok(contact);
    }
}
