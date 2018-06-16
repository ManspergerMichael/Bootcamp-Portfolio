using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankAccounts.Models{
    public class Account{
        [Key]
        public int AccountId{get;set;}
        public double Balance{get;set;}

        [ForeignKey("User")]
        public int User_id{get;set;}
        public User User{get;set;}
       

    }
}