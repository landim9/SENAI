#include <stdio.h>
int main()

{
int numero, cont=0;

    printf("Digite um numero: ");
    scanf("%d",&numero);

    for (cont=0; cont<=10 ; cont++){
        printf("%d x %d = %d \n",numero,cont,numero*cont);
    }
    return 0;
}
