using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace New_folder.Data;

public class Avinash_PortalContext : IdentityDbContext
{
    public Avinash_PortalContext(DbContextOptions<Avinash_PortalContext> options)
        : base(options)
    {
    }
}
