using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoolAp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactFormController : ControllerBase
{
    private readonly ApplicationDbContext _dbContext;

    public ContactFormController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
    public async Task<ActionResult<ContactForm>> CreateContactForm(ContactForm contactForm)
    {
        // Set date sent to current date and mark the message as unread
        contactForm.DateSent = DateTime.Now;
        contactForm.IsRead = false;

        // Add the contact form to the database
        _dbContext.ContactForms.Add(contactForm);
        await _dbContext.SaveChangesAsync();

        return Ok(contactForm);
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ContactForm>>> GetAllContactForms()
    {
        // Get all contact forms from the database
        var contactForms = await _dbContext.ContactForms.ToListAsync();

        return Ok(contactForms);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ContactForm>> GetContactFormById(int id)
    {
        // Get contact form based on ID
        var contactForm = await _dbContext.ContactForms.FindAsync(id);

        if (contactForm == null)
        {
            return NotFound($"No contact form found for the specified ID ({id})");
        }

        return Ok(contactForm);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<ContactForm>> UpdateContactForm(int id, ContactForm updatedContactForm)
    {
        // Get contact form based on ID
        var contactForm = await _dbContext.ContactForms.FindAsync(id);

        if (contactForm == null)
        {
            return NotFound($"No contact form found for the specified ID ({id})");
        }

        // Update the contact form
        contactForm.Name = updatedContactForm.Name;
        contactForm.Email = updatedContactForm.Email;
        contactForm.Subject = updatedContactForm.Subject;
        contactForm.Message = updatedContactForm.Message;
        contactForm.IsRead = updatedContactForm.IsRead;

        try
        {
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ContactFormExists(id))
            {
                return NotFound($"No contact form found for the specified ID");
            }
            else
            {
                throw;
            }
        }

        return Ok(contactForm);
    }

    private bool ContactFormExists(int id)
    {
        return _dbContext.ContactForms.Any(c => c.Id == id);
    }
}
