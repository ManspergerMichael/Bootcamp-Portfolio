using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controlers{
    public class PortfolioController : Controller{
        [HttpGet]
        [Route("")]
        public string Index(){
            return "This is my index!";
        }

        [HttpGet]
        [Route("/projects")]
        public string Projects(){
            return "Projects! Get your Projects here!";
        }

        [HttpGet]
        [Route("/contact")]
        public string Contact(){
            return "This is my Contact page!";
        }
    }
}