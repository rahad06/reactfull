using System.ComponentModel.DataAnnotations;

namespace FoolAp.Models;

public class SettingsGeneral
{
    [Key]
    public int Id { get; set; }
    public string Language { get; set; }
    public string Logo { get; set; }
    public string FavIcon { get; set; }
    public string ShortDescription { get; set; }
    public string LongDescription { get; set; }
    public string Url { get; set; }
}