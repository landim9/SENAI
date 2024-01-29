#include <stdio.h>

int main(){
	float preco, desconto;
	printf("Digite o preço do produto:");
	scanf("%f",&preco);
	
	if (preco > 1000){
		desconto = preco * 0.8;
	} else {
		desconto = preco;
	}
	
	printf("O preço com desconto é %.f \n",desconto);

    return 0;
}
