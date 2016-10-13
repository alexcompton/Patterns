using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flyweight
{
    class ConcreteFlyweight : Flyweight
    {
        public override void Operation(int extrinsicstate)
        {
            Console.WriteLine("ConcreteFlyweight: " + extrinsicstate);
        }
    }
}
