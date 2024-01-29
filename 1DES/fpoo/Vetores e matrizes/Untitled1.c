#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale(LC_ALL,"Portuguese");
	char nome[35];
	float media;
	float nota[5];
	int i;
	printf("Digite o nome do aluno:");
	scanf("%s",&nome);
	for(i = 0; 1 < 5; i++);
	do{
	printf("Digite as %d notas do aluno(De 0 a 10):", i + 1);
	scanf("%f",&nota[i]);
}while(nota[i] < 0 || nota[i] >10);
		
	for(i = 0; i < 5; i++){
		media += nota[i];
	printf("Nota %d: %.1f\n,",i + 1, nota[1]);
	}
	media /= 5;
	printf("%s sua média é %.1f \n",nome,media);
	return 0;
}

