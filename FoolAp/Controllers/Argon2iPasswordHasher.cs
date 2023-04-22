using System.Security.Cryptography;
using Microsoft.AspNetCore.Identity;
using Konscious.Security.Cryptography;
using System;
using System.Security.Cryptography;
using System.Text;
using FoolAp.Models;
using Microsoft.AspNetCore.Identity;
namespace FoolAp.Controllers;

public class Argon2PasswordHasher : IPasswordHasher<User>
{
    private readonly Argon2iPasswordHasherOptions _options;

    public Argon2PasswordHasher(Argon2iPasswordHasherOptions options)
    {
        _options = options;
    }

    public string HashPassword(User user, string password)
    {
     int saltSize = 16;

        byte[] salt = new byte[saltSize];
        using (var rng = new RNGCryptoServiceProvider())
        {
            rng.GetBytes(salt);
        }

        var argon2 = new Argon2i(Encoding.UTF8.GetBytes(password))
        {
            Salt = salt,
            DegreeOfParallelism = _options.DegreeOfParallelism,
            MemorySize = _options.MemorySize,
            Iterations = _options.Iterations,
            // HashLength = _options.HashLength,
        };

        var hash = argon2.GetBytes(_options.HashLength);

        return $"{Convert.ToBase64String(salt)}:${Convert.ToBase64String(hash)}";
    }



    public PasswordVerificationResult VerifyHashedPassword(User user, string hashedPassword, string providedPassword)
    {
        var parts = hashedPassword.Split(':');
        if (parts.Length != 2)
        {
            return PasswordVerificationResult.Failed;
        }

        var salt = Convert.FromBase64String(parts[0]);
        var hash = Convert.FromBase64String(parts[1]);

        var argon2 = new Argon2i(Encoding.UTF8.GetBytes(providedPassword))
        {
            Salt = salt,
            DegreeOfParallelism = _options.DegreeOfParallelism,
            MemorySize = _options.MemorySize,
            Iterations = _options.Iterations,
            // HashLength = _options.HashLength
        };

        if (argon2.Equals(hash))
        {
            return PasswordVerificationResult.Success;
        }
        else
        {
            return PasswordVerificationResult.Failed;
        }
    }
}
