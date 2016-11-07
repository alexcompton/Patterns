using System;

namespace Constructor_Injection
{
    class Program
    {
        static void Main(string[] args)
        {
            Client client = new Client(new Service());
            client.Start();

            Console.ReadKey();
        }
    }
}
