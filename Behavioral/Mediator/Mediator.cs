using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mediator
{
    abstract class Mediator
    {
        public abstract void Send(string message, Colleague colleague);
    }
}
