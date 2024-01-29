#include <stdio.h>




int main(){
	int prova1, prova2, prova3, media;
	float frequencia, presenca, aula;
	printf("Digite a nota da prova 1 do aluno de 0 a 100:");
	scanf("%d",&prova1);	 
	printf("Digite a nota da prova 2 do aluno de 0 a 100:");
	scanf("%d",&prova2);	
	printf("Digite a nota da prova 3 do aluno de 0 a 100:");
	scanf("%d",&prova3);	 
	
	printf("Digite o numero de aulas dadas:");
	scanf("%d",&aula);	  
	printf("Digite o numero da frequencia:");
	scanf("%d",&presenca);	  
	
	media = (prova1 + prova2 + prova3) / 3;
	frequencia = presenca / aula;
	
	printf("A media das provas é: %d \n",media);
	printf("A frequencia do aluno é: %.2f\t ou %0f%%\n ",frequencia, frequencia *100);
	return 0;
}

