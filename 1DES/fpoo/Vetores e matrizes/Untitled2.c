#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	int notas, i;
	float sis, dia, nota2, nota1;
	float n1,n2,n3,n4,n5;
	char continuar[3] = "sim", aluno[30];
	
	while(strcmp(continuar,"sim") == 0){
		printf("Digite o nome do aluno:");
		scanf("%s",&aluno);
		printf("Digite quantas notas serão digitadas:");
		scanf("%d",&notas);
		for(i = 0; i < notas; i++){
			printf("Notas:");
			scanf("%f %f %f %f %f", &n1,&n2,&n3,&n4,&n5);
		
			
		}
		nota2 /= nota1;
		printf("O nome do aluno é: %s \n",aluno);
		printf("A media do aluno é: %f \n",nota2);
		printf("Continuar sim/não:");
		scanf("%s",&continuar);	
	}
	return 0;
}
