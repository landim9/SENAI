#include <stdio.h>

int main(){
	int salario, filhos, desconto, desconto2;
	printf("Digite seu salario:");
	scanf("%d",&salario);
	printf("Quantos filhos você tem?:");
	scanf("%d",&filhos);
	
	desconto = salario + (filhos * 45);
 
	if (salario < 2000)
		printf("Salario com aumento:%d",desconto);
	else
		printf("Salario sem aumento:%d",salario);
	
	
	return 0;
}
