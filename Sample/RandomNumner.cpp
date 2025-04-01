#include <iostream>
#include <random>
using namespace std;

int main()
{
    random_device rd;
    mt19937 gen(rd());

    uniform_int_distribution<>dist(0,10);
    for (int i = 0; i < 5; i++)
    {
    cout << "Random number" << dist(gen) << endl;
    }
    // = dist(gen);
    
     return 0;
}