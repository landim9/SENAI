#include <stdio.h>

int main(){
	char times[5][20];
	int pontos[5];
	int vitoria[5], empate[5], x, y, z, i, pontosDoCampeao, pontosDoRebaixado,rebaixado, campeao;
	
	pontosDoCampeao = 0;
	pontosDoRebaixado = 1000;
	
	for(i = 0; i < 5; i++){
	printf("Digite o nome do %d time:", i + 1);
	scanf("%s",&times[5]);
	if(pontosDoCampeao < pontos[i]){
			pontosDoCampeao = pontos[i];
			campeao = i;
		}
		if(pontosDoRebaixado > pontos[i]){
			rebaixado = i;
			pontosDoRebaixado = pontos[i];
		}
	}
	printf("===========================================\n");
	for(i = 0; i < 5; i++){	
	
	printf("Digite as vitorias do %d time:", i + 1);
	scanf("%d",&vitoria[5]);
	}
	printf("===========================================\n");
	for(i = 0; i < 5; i++){
	
	printf("Digite os empates do %d time:", i + 1);
	scanf("%d",&empate[5]);
	}
	printf("===========================================\n");
	x = vitoria[5] * 3;
	y = empate[5] * 1;
	pontos[5] = x + y;

	for(i = 0; i < 5; i++){
		printf("%s \n", times[5]);
	}
	printf("no time campeão é %s\n", times[campeao]);
	printf("O time rebaixado é %s\n", times[rebaixado]);
	printf("Pontos no campeonato: %d \n",z);	
	
	return 0;

}
