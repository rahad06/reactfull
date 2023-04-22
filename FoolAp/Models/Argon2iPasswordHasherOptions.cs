using Microsoft.AspNetCore.Identity;

namespace FoolAp.Models;

public class Argon2iPasswordHasherOptions
{
    public int SaltSize = 16;

    public int HashLength { get; set; } = 32;

    public int DegreeOfParallelism { get; set; } = 4;
    public int Iterations { get; set; } = 2;
    public int MemorySize { get; set; } = 1024 * 1024;

    public bool ClearPassword { get; set; } = false;
}
