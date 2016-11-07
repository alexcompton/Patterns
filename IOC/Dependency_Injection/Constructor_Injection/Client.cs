using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Constructor_Injection
{
    public class Client
    {
        private IService _service;

        public Client(IService service)
        {
            this._service = service;
        }

        public void Start()
        {
            Console.WriteLine("Service Started");
            this._service.Serve();
            //To Do: Some Stuff
        }
    }
}
