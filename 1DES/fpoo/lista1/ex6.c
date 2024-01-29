#include <stdio.h>
int main(){
	int x = 900;
	int y;
	printf("Velocidade do avião em(km/h): %d \n", x);
	printf("Distancia que o avião vai percorrer em(km):");
	scanf("%d",&y);
	x = y/900;
	printf("O tempo de chegada em horas e: %d",x);
	return 0;
} 
