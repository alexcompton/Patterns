using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Method_Injection
{
    public class Service : IService
    {
        public void Serve()
        {
            Console.WriteLine("Service Called");
            //To Do: Some Stuff
        }
    }
}
