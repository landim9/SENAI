#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale(LC_ALL,"Portuguese");
	char time[5][20];
	int pontos[5];
	int i;
	
	for(i = 0; 1 < 5; i++){
	printf("Digite o nome do %d° time:", i + 1);
	gets(time[1]);
}
	for(i = 0;i < 5; i++){
		printf("Digite pontos do %s: ",times[1]);
		scanf("%d",&pontos[1]);
	}

	scanf("%s pontos: %d\n",&time[0],pontos[0]);
	scanf("%s pontos: %d\n",&time[1],pontos[0]);
	scanf("%s pontos: %d\n",&time[2],pontos[0]);
	scanf("%s pontos: %d\n",&time[3],pontos[0]);
	scanf("%s pontos: %d\n",&time[4],pontos[0]);
	
	
	return 0;
}
