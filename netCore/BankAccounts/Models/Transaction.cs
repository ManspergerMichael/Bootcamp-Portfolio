using System.ComponentModel.DataAnnotations;
using System;
namespace BankAccounts.Models{
    public class Transaction{
        [Key]
        public int idTransaction{get;set;}
        public double BalanceChange{get;set;}
        public DateTime Date{get;set;}
        public int AccountID{get;set;}
        public Account Account{get;set;}
    }
}