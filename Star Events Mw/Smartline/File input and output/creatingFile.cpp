#include <fstream>
#include <iostream>
using namespace std;

int main()
{
 ofstream MyFile("exampleFile.txt");

 MyFile.close();

 return 0;
}