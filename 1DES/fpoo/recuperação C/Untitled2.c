#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	char nome[20][20];
	int n, i;
	float n1[20], n2[20], indice, media[20];
	
	printf("Quantas notas serão calculadas: ");
	scanf("%d", &n);
	
	for(i = 1; i <= n; i++){
		printf("\nNome do aluno %d: ", i);
		scanf("%s", &nome[i]);
		nome[i] + i;
		
		printf("Digite a primeira nota do aluno %s: ", nome[i]);
		scanf("%f", &n1[i]);
		n1[i] + i;
		
		printf("Digite a segunda nota do aluno %s: ", nome[i]);
		scanf("%f", &n2[i]);
		n2[i] + i;
	}
	

	for(i = 1; i <= n; i++){
		media[i] = (n1[i]+n2[i]) / 2;
		media[i] + i;
		if(media[i] >= 5){
			printf("\n%s \nMedia:%.0f\n", nome[i], media[i]);
			printf("Aprovado\n");
			printf("=======================\n");
		}else{
			printf("\n%s \nMedia:%.0f\n", nome[i], media[i]);
			printf("Reprovado\n");
			printf("=======================\n");
		}
		
	}
	
	return 0;
}
