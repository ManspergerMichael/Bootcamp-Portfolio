using System.Collections.Generic;
namespace ViewModel.Models
{
    public class userList{
        public List<string> names; 

        public userList(){
            names = new List<string>();
        }

        public void add(string name){
            names.Add(name);
        }
    }

    
}