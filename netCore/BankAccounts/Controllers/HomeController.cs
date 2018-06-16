using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BankAccounts.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;


namespace BankAccounts.Controllers
{
    public class HomeController : Controller
    {
        private UserContext _context;
        public HomeController(UserContext context){
            _context = context;
        }
        [HttpGet("")]
        public IActionResult Home(){
            //List<User> AllUsers = _context.User.ToList();
            //ViewBag.Users = AllUsers;
            return View("Login");
        }
        [HttpPost("Register")]
        public IActionResult Register(User user, string ConfirmPassword){
            User userEmail = _context.User.SingleOrDefault(login => login.Email == user.Email);
            if(user.Password == ConfirmPassword){
                if(userEmail == null){
                    if(ModelState.IsValid){
                        //hash password create user
                        PasswordHasher<User> Hasher = new PasswordHasher<User>();
                        user.Password = Hasher.HashPassword(user, user.Password);
                        _context.Add(user);
                        _context.SaveChanges();
                        //create account for user
                        //retreve newly created user
                        User newUser = _context.User.SingleOrDefault(login => login.Email == user.Email);
                        Account newAccount = new Account();
                        newAccount.Balance = 100.00;
                        newAccount.User_id = newUser.id;
                        newAccount.User = newUser;
                        _context.Account.Add(newAccount);
                        _context.SaveChanges();
                        
                        //set user id to session
                        HttpContext.Session.SetInt32("UserID", newUser.id);
                        return RedirectToAction("Success");
                    }
                    //if modelstate is invalid return to login with error messages
                    else{
                        return View("Login");
                    }
                }
                else{
                    ViewBag.RegistrationError = "Email is in use.";
                    return View("Login");
                }
            }
            else{
                ViewBag.CPError = "Passwords do no match.";
                return View("Login");
            }

        }

        [HttpPost("Login")]
        public IActionResult Login(string email, string Password){
            var user = _context.User.SingleOrDefault(u => u.Email == email);
            if(user != null && Password != null){
                var Hasher = new PasswordHasher<User>();
                if(0 != Hasher.VerifyHashedPassword(user, user.Password, Password)){
                    HttpContext.Session.SetInt32("UserID",user.id);
                    return RedirectToAction("Success");
                }
                else{
                    ViewBag.loginError = "Email not registered";
                    return View("Login");
                }
            }
            else{
                ViewBag.loginError = "Invalid Password";
                return View("Login");
            }
            
        }
        [HttpGet("account")]
        public IActionResult Success(){
            int? Uid = HttpContext.Session.GetInt32("UserId");
            Account account = _context.Account.Include(u => u.User).SingleOrDefault(u => u.User_id == Uid);
            
            ViewBag.account = account;
            return View("Dashboard", account);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
