using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Property_Injection
{
    public class Client
    {
        private IService _service;

        public IService Service
        {
            set
            {
                this._service = value;
            }
        }

        public void Start()
        {
            Console.WriteLine("Service Started");
            this._service.Serve();
            //To Do: Some Stuff
        }
    }
}
