using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Constructor_Injection
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
