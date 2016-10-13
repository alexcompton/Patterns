using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Memento
{
    class Memento
    {
        private string _state;

        // Constructor
        public Memento(string state)
        {
            this._state = state;
        }

        // Gets or sets state
        public string State
        {
            get { return _state; }
        }
    }
}
