using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace State
{
    class ConcreteStateA : State
    {
        public override void Handle(Context context)
        {
            context.State = new ConcreteStateB();
        }
    }
}
