using System;

namespace Property_Injection
{
    class Program
    {
        static void Main(string[] args)
        {
            Client client = new Client();
            client.Service = new Service();
            client.Start();

            Console.ReadKey();
        }
    }
}
