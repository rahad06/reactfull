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
    
    
    [HttpPut("{language}")]
    public async Task<ActionResult<Contact>> UpdateContact(string language, Contact updatedContact)
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

        // Update the contact information
        contact.Address = updatedContact.Address;
        contact.Email = updatedContact.Email;
        contact.Phone = updatedContact.Phone;

        try
        {
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ContactExists(language))
            {
                return NotFound("No contact information found for the specified language");
            }
            else
            {
                throw;
            }
        }

        return Ok(contact);
    }

    private bool ContactExists(string language)
    {
        return _dbContext.Contacts.Any(c => c.Language == language);
    }

}
