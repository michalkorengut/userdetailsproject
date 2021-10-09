using OpenXmlPowerTools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace userDetails
{
    public class Class
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public Class() { }
        public Class(string name, int age)
        {
            this.Name = name;
            this.Age = age;
        }
        Class c = new Class();
    }
}