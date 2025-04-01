#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main(){
    for(int i = 0; i < 5; i++){
        int x = time(0);
        srand(x); 
        int m = rand() % 4;
        cout << m << '\t';
    }
  
return 0;

}