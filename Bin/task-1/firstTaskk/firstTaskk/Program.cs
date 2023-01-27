using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace firstTaskk
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Введите первую дату в формате: dd.mm.yyyy: ");
            string firstStringDate = Console.ReadLine();
            Console.WriteLine();

            Console.Write("Введите вторую дату в формате: dd.mm.yyyy: ");
            string secondStringDate = Console.ReadLine();
            Console.WriteLine();

            int d1 = Convert.ToInt32(firstStringDate.Substring(0, 2)),
                m1 = Convert.ToInt32(firstStringDate.Substring(3, 2)),
                y1 = Convert.ToInt32(firstStringDate.Substring(6, 4)),

                d2 = Convert.ToInt32(secondStringDate.Substring(0, 2)),
                m2 = Convert.ToInt32(secondStringDate.Substring(3, 2)),
                y2 = Convert.ToInt32(secondStringDate.Substring(6, 4));

            DateTime firstDate = new DateTime(y1, m1, d1),
                     secondDate = new DateTime(y2, m2, d2);

            Console.WriteLine("------------------\n");

            Console.WriteLine($"Разница между датами в днях состовляет: {(secondDate - firstDate).TotalDays}");

            Console.ReadKey();
        }
    }
}
