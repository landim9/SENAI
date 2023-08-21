#include <stdio.h>
int main(){
	int idade;
	
	printf("Digite a idade:");
	scanf("%d",&idade);	
	
	if(idade < 10)
		printf("Crianca");
	else{
	if(idade < 15)
		printf("Adolescente");
	else
	if(idade < 20)
		printf("Jovem");
	else
	if(idade < 35)
		printf("Adulto");
	else
	if(idade < 55)
		printf("Meia idade");
	else
		printf("Idoso");		
	}	
	return 0;	
}
