#include <iostream>  
#include <random>  

using namespace std;  

int main() {  
    // Create a random number generator  
    random_device rd; // Obtain a random number from hardware  
    mt19937 gen(rd()); // Seed the generator  

    // Define the range for uniform integer distribution  
    uniform_int_distribution<> distr(1, 100); // Range [1, 100]  

    // Generate and print random numbers  
    cout << "Random numbers: " << endl;  
    for (int n = 0; n < 10; ++n) {  
        cout << distr(gen) << ' '; // Generate and print random numbers  
    }  
    
    cout << endl;  
    return 0;  
}