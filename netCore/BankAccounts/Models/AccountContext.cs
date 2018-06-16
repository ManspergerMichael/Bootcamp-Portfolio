using Microsoft.EntityFrameworkCore;
namespace BankAccounts.Models{
    public class AccountContext : DbContext{
        public AccountContext(DbContextOptions<AccountContext> options):base(options){}
        public DbSet<Account> Account{get;set;}
    }
}