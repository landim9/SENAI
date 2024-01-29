#include <stdio.h>

int main(){
	
	char nome[20];
	int preco,a,b;
	printf("Digite o nome do produto:");
	scanf("%s",&nome);
	
	printf("Digite o valor do produto:");
	scanf("%d",&preco);
	
	a = preco * 0.05 + preco;
	b = preco * 0.07 + preco;
	
	printf("Nome do produto: %s\n",nome);
	
	if(preco >= 1000)
	printf("Novo Preço: %d\n",a);
	
	else if(preco < 1000)
	printf("Novo preço: %d \n",b);
	
	
	return 0;
}
