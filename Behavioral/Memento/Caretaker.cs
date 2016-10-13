using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Memento
{
    class Caretaker
    {
        private Memento _memento;

        // Gets or sets memento
        public Memento Memento
        {
            set { _memento = value; }
            get { return _memento; }
        }
    }
}
