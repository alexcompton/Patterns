using System;

namespace Builder
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Builder builder;
            
            // Create director and builders
            Director director = new Director();

            // first builder
            builder = new ConcreteBuilder1();
            director.Construct(builder);
            Product p1 = builder.GetResult();
            p1.Show();

            // second builder
            builder = new ConcreteBuilder2();
            director.Construct(builder);
            Product p2 = builder.GetResult();
            p2.Show();

            // Wait for user
            Console.ReadKey();
        }
    }
}
