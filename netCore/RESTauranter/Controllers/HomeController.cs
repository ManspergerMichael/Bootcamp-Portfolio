using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RESTauranter.Models;
using Microsoft.EntityFrameworkCore;

namespace RESTauranter.Controllers
{
    public class HomeController : Controller
    {

        private RestContext _context;

        public HomeController(RestContext context){
            _context = context;
        }
        
        [HttpGet]
        [Route("")]
        public IActionResult Home(){
            
            return View("Home");
        }
        [HttpPost]
        [Route("Create")]
        public IActionResult Create(string name, string resturant, string review, int stars, DateTime date){
            reviews thing = new reviews();
            thing.name = name;
            thing.resturant = resturant;
            thing.review = review;
            thing.stars = stars;
            thing.date = date;
            _context.Add(thing);
            _context.SaveChanges();
            return RedirectToAction("Reviews");
        }

        [HttpGet]
        [Route("Reviews")]
        public IActionResult Reviews(){
            List<reviews> returned = _context.reviews.OrderByDescending(rev =>rev.date).ToList();
            ViewBag.reviews = returned;
            return View("Reviews");
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
