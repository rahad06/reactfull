using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using FoolAp.Models;

namespace FoolAp.Data;

public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
{
    public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
        : base(options, operationalStoreOptions)
    {
    }
    public DbSet<Product> Products { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<SettingsGeneral> SettingsGeneral { get; set; }
    public DbSet<Contact> Contacts { get; set; }
    
    public DbSet<About> Abouts { get; set; }
    public DbSet<BlogPost> BlogPosts { get; set; }
    public DbSet<Porfolio> Projects { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<ContactForm> ContactForms { get; set; }
    public DbSet<AccessLevel> AccessLevels { get; set; }

    public DbSet<DeviceFlowCodes> DeviceFlowCodes { get; set; }
    

    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<DeviceFlowCodes>(entity =>
        {

            entity.Property(e => e.DeviceCode).HasMaxLength(200).IsRequired();
     
            
            entity.Property(e => e.CreationTime).IsRequired();
            entity.Property(e => e.Expiration).IsRequired();
            entity.Property(e => e.Data).HasMaxLength(50000);


            entity.HasIndex(e => e.DeviceCode).IsUnique();
        });
        
        

   
        
    }
    
}