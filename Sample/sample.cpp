#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main ()
{ 
    int x = time(0);
    srand(x);
    //generate random numbers
    cout<< 1 + rand() % 6 << endl;
   
    
    // to puase the program
    cin.ignore();
    cin.get();
    
    return 0;
}