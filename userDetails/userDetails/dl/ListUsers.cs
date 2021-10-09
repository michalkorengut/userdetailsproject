using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using userDetails.models;

namespace userDetails.dl
{
    public class ListUsers
    {
        //List<Users> listuser = new List<Users>();
        //
        public List<Users> UserList { get; set; }
        
        public ListUsers()
        {
            UserList.Add(new Users {EmailUser="sara@gmail.com",NameEnterUser="sara-cohen" });
            UserList.Add(new Users {EmailUser="a",NameEnterUser="v" });
            UserList.Add(new Users {EmailUser="a",NameEnterUser="v" });
            UserList.Add(new Users {EmailUser="a",NameEnterUser="v" });
        }

    }
}
