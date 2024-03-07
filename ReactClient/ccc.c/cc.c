#include <stddef.h>

void MoveElements(int array[], size_t size, size_t count)
{
    
    
    int i, j, temp;
    
    for (i=1; i<=count; i++)
       { temp=array[0];
      for (j=0; j<size-2; j++)
           array[j]=array[j+1];
        array[j+1]=temp;  
           }
    }
       


