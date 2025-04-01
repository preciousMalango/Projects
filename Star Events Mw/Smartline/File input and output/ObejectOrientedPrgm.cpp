#include <iostream>
#include <string>
using namespace std;

class Employee{
    public:
    string Name;
    string Company;
    int Age;

    void introduceYourself( )
    {
        cout << "My name is"<< Name<<","<< "i work at"<< Company <<"company and I am" << Age << "old.";
    };
};
int main()
{
    Employee employee1;
    employee1.Name =" Precious";
    employee1.Company = "EatChangu";
    employee1.Age = 21;
    introduceYourself( );

}