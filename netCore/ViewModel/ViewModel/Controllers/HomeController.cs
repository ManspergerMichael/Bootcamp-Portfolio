using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ViewModel.Models;

namespace ViewModel.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Message(){
            Message mess = new Message();
            mess.setMessage("hi");
            return View("Message",mess);
        }

        [HttpGet]
        [Route("/User")]
        public IActionResult Users(){
            User bob = new User("Bob", "Boberton");
            //User bill = new User("Bill","Billington");
            return View("User", bob);
        }

        [HttpGet]
        [Route("/List")]
        public void List(){
            /* List users = new List();
            User bob = new User("Bob", "Boberton");
            User bill = new User("Bill","Billington");
            users.Add(bob);
            users.Add(bill);
            return View("List",users); */
        }

        [HttpGet]
        [Route("/Number")]
        public IActionResult Number(){
            Numbers nums = new Numbers();
            return View("Numbers", nums);
        }

        
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
