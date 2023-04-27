using System.ComponentModel.DataAnnotations;

namespace FoolAp.Models;

public class AccessLevel
{
    public int Id { get; set; }

    [Required] 
    public string Name { get; set; }
}