using Microsoft.AspNetCore.Mvc;
using FoolAp.Data;
using FoolAp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoolAp.Controllers;


[ApiController]
[Route("api/[controller]")]
public class SettingsGeneralController : ControllerBase
{
    private readonly ApplicationDbContext _dbContext;

    public SettingsGeneralController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet("{language}")]
    public async Task<ActionResult<SettingsGeneral>> GetSettingsGeneral(string language)
    {
        // Set default language to English
        if (string.IsNullOrWhiteSpace(language))
            language = "en";

        // Get SettingsGeneral information based on language
        var setting = await _dbContext.SettingsGeneral.FirstOrDefaultAsync(c => c.Language == language);

        if (setting == null)
        {
            return NotFound("No setting information found for the specified language");
        }

        return Ok(setting);
    }
    
    
    [HttpPut("{language}")]
    public async Task<ActionResult<SettingsGeneral>> UpdateSettingsGeneral(string language, SettingsGeneral updatedSettingsGeneral)
    {
        // Set default language to English
        if (string.IsNullOrWhiteSpace(language))
            language = "en";

        // Get setting information based on language
        var setting = await _dbContext.SettingsGeneral.FirstOrDefaultAsync(c => c.Language == language);

        if (setting == null)
        {
            return NotFound("No setting information found for the specified language");
        }

        // Update the setting information
        setting.Logo = updatedSettingsGeneral.Logo;
        setting.FavIcon = updatedSettingsGeneral.FavIcon;
        setting.ShortDescription = updatedSettingsGeneral.ShortDescription;
        setting.LongDescription = updatedSettingsGeneral.LongDescription;
        setting.Url = updatedSettingsGeneral.Url;

        try
        {
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!SettingsGeneralExists(language))
            {
                return NotFound("No SettingsGeneral information found for the specified language");
            }
            else
            {
                throw;
            }
        }

        return Ok(setting);
    }

    private bool SettingsGeneralExists(string language)
    {
        return _dbContext.SettingsGeneral.Any(c => c.Language == language);
    }



}