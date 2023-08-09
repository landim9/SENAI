#include <stdio.h>

int main(){
	char cidade[20];
	float eleitores, votos, x;
	
	printf("Digite o nome da cidade:");
	scanf("%s",&cidade);
	printf("Digite o numero de eleitores:");
	scanf("%f",&eleitores);
	printf("Digite o numero de votos:");
	scanf("%f",&votos);
	
	x = votos / eleitores * 100;
	
	printf("A porcentagem de votos é: %.2f",x);
	
	return 0;
}
