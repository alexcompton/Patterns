using System;

namespace Method_Injection
{
    class Program
    {
        static void Main(string[] args)
        {
            Client client = new Client();
            client.Start(new Service());

            Console.ReadKey();
        }
    }
}
