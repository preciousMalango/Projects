#include <iostream>
#include <random>
using namespace std;

int main()
{
    random_device rd;
    mt19937 mt{rd()};
    uniform_real_distribution dist{0,11};
    for (auto i = 0; i < 5; i++)
    {
        cout << dist(mt) << endl;
    }
    
}