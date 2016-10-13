using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mediator
{
    abstract class Colleague
    {
        protected Mediator mediator;

        // Constructor
        public Colleague(Mediator mediator)
        {
            this.mediator = mediator;
        }
    }
}
