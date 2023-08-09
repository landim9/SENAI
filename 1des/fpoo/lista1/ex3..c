#include <stdio.h>

int main(){
	char nome[10];
	int salario, reajuste, x;


	printf("Digite o nome do bico:");
	scanf("%s", &nome);
	printf("Digite o salario do bico:");
	scanf("%d", &salario);
	printf("O reajuste é:");
	scanf("%d", &reajuste);
	
	x = salario + reajuste;
	
    printf("Nome: %s\n",nome);
	printf("O salario reajustado é %d\n:",x);
	return 0;
}
