#include <stdio.h>

int main(){
	char mercadoria[15];
	int preco, desconto;
	printf("Digite o nome da mercadoria:");
	scanf("%s",&mercadoria);
	printf("digite o preço da mercadoria:");
	scanf("%d",&preco);

	desconto = preco * 5/100 + preco;
	
	printf("o nome da mercadoria é: %s \n",mercadoria);
	printf("O preço da mercadoria com o aumemto: %d \n", desconto);


return 0;
}
