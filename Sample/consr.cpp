#include <iostream>
using namespace std;

const double PI = 3.14 // constant variable

enum Direction {NORTH, EAST, SOUTH,  WEST }; //enumurated constants

constexpr int square(int x){ // constant expression
    return x*x;
}

int main(){
    cout << "The value of PI is:" << PI<< endl;
    
    Direction dir = NORTH;
    if( dir == NORTH){
        cout << "Heading North!"<< endl;
    
    }
    cout << "The square 5 is:"<< square(5) << endl;
    // PI = 3.14;// This lone would co
    return 0;
}
