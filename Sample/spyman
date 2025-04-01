#include <iostream>  
using namespace std;  

const double PI = 3.14159; // Constant variable  

enum Direction { NORTH, EAST, SOUTH, WEST }; // Enumerated constants  

constexpr int square(int x) { // Constant expression  
    return x * x;  
}  

int main() {  
    cout << "The value of PI is: " << PI << endl;  
    
    Direction dir = NORTH;   
    if (dir == NORTH) {  
        cout << "Heading North!" << endl;  
    }  

    cout << "The square of 5 is: " << square(5) << endl;  

    // PI = 3.14; // This line would cause a compile-time error  

    return 0;  
}