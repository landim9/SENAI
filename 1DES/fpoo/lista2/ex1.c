#include <stdio.h>

int main(){
	float preco, desconto;
	printf("Digite o pre�o do produto:");
	scanf("%f",&preco);
	
	if (preco > 1000){
		desconto = preco * 0.8;
	} else {
		desconto = preco;
	}
	
	printf("O pre�o com desconto � %.f \n",desconto);

    return 0;
}
