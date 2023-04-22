namespace FoolAp.Models;

public class ContactForm
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Subject { get; set; }
    public string Message { get; set; }
    public bool IsRead { get; set; }
    public DateTime DateSent { get; set; }
}
