#include <stdio.h>
#include <locale.h>

int main(){
	setLocale(LC_ALL, "Portuguese");
	
	float preco, precocal, precober, precocam, precocam2;
	int produto, quantidade;
	
	printf("Qual o produto que voce deseja comprar? 1. camisa 2.calça 3.bermuda:");
	scanf("%d",&produto);
	
	if(produto == 1){
		printf("Quanto custa a camisa em R$?");
		scanf("%f",&precocam);
		preco = precocam * 0.80
		printf("A camisa com desconto custa R$%.2f/n,preco");
		printf("Quantas calças deseja comprar?:");
		scanf("%d",&quantidade);
		precocam2 = quantidade * preco;
		printf("O valor da compra deu: R$%.2f",precocam2);
		
	}
}
