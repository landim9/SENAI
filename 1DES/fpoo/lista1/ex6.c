#include <stdio.h>
int main(){
	int x = 900;
	int y;
	printf("Velocidade do avi�o em(km/h): %d \n", x);
	printf("Distancia que o avi�o vai percorrer em(km):");
	scanf("%d",&y);
	x = y/900;
	printf("O tempo de chegada em horas e: %d",x);
	return 0;
} 
