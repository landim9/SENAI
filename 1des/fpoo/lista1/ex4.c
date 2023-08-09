#include <stdio.h>

int main(){
	char time [10];
	int vitoria, empate, x, y, z;
	
	printf("Digite o nome do time:");
	scanf("%s",&time);
	printf("Digite as vitorias do time:");
	scanf("%d",&vitoria);
	printf("Digite os empates do time:");
	scanf("%d",&empate);
	
	x = vitoria * 3;
	y = empate * 1;
	z= x + y;

	printf("Nome do time: %s \n",time);
	printf("Pontos no campeonato %d \n",x);	
	
	return 0;

}
