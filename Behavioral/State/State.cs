using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace State
{
    abstract class State
    {
        public abstract void Handle(Context context);
    }
}
