using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoolAp.Models;

public class DeviceFlowCodes
{
    [Key]
    public int PrimaryKey { get; set; }

    public string DeviceCode { get; set; }

    // Other properties...

    public DateTime CreationTime { get; set; }

    public DateTime? Expiration { get; set; }

    public string Data { get; set; }
}

