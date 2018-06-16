using System.ComponentModel.DataAnnotations;
using System;
namespace BankAccounts.Models{
    public class User{
        [Key]
        public int id{get;set;}
        [Required]
        [MinLength(3)]
        public string FirstName{get;set;}
        [Required]
        [MinLength(3)]
        public string LastName{get;set;}
        [Required]
        [EmailAddress]
        public string Email{get;set;}
        [Required]
        [MinLength(8)]
        public string Password{get;set;}
    }

    
}