using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace BankAccounts.Models{
    public class Account{
        [Key]
        public int AccountId{get;set;}
        public double Balance{get;set;}

        [ForeignKey("User")]
        public int User_id{get;set;}
        public User User{get;set;}

        public List<Transaction> Transactions{get;set;}

        public Account(){
            Transactions = new List<Transaction>();
        }
       

    }
}