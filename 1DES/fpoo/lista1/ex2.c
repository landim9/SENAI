#include <stdio.h>
int main(){
	int x;
	int y;
	printf("Velocidade em(km/h):");
	scanf("%d",&x);
	printf("Distancia em(km):");
	scanf("%d",&y);
	x = y/x;
	printf("O tempo de chegada em horas e: %d",x);
}
