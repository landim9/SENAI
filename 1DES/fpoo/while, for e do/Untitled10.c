#include<stdio.h>
int main(){
	int i = 0;
	while(i != 14){
		printf("Digite um n�mero inteiro: ");
		scanf("%d",&i);
		printf("Dobro: %d \n", i * 2);
	}
	return 0;
}
