using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flyweight
{
    class UnsharedConcreteFlyweight : Flyweight
    {
        public override void Operation(int extrinsicstate)
        {
            Console.WriteLine("UnsharedConcreteFlyweight: " + extrinsicstate);
        }
    }
}
