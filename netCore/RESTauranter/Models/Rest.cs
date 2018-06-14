using System.ComponentModel.DataAnnotations;
using System;
namespace RESTauranter.Models{
    public class reviews{
        [Key]
        public int id{get;set;}
        [Required]
        [MinLength(3)]
        public string name{get;set;}
        [Required]
        [MinLength(5)]
        public string resturant{get;set;}
        [Required]
        [MaxLength(255)]
        public string review{get;set;}
        //[DataType(DataType.Date)]
        //[DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime date{get;set;}
        [Range(1,5)]
        public int stars{get;set;}
    }
}