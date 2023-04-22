using System.ComponentModel.DataAnnotations;

namespace FoolAp.Models;

public class Contact
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Language { get; set; }

    [Required]
    public string Address { get; set; }

    [Required]
    public string Phone { get; set; }

    [Required]
    public string Email { get; set; }

    public string AdditionalInfo { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
