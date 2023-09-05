#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	char produto[20][20];
	int n, i;
	float preco[20], indice, porcentagem[20];
	
	printf("Quantos produtos foram comprados: ");
	scanf("%d", &n);
	
	for(i = 1; i <= n; i++){
		printf("\nDigite o nome do produto: ", i);
		scanf("%s", &produto[i]);
		produto[i] + i;
		
		printf("Digite o preço do produto: ", produto[i]);
		scanf("%f", &preco[i]);
		preco[i] + i;
		
		printf("===============================\n");
	}
	
	printf("Insira o índice percentual(%%): ");
	scanf("%f", &indice);
	
	for(i = 1; i <= n; i++){
		porcentagem[i] = preco[i] + preco[i] * indice / 100;
		porcentagem[i] + i;
		
		printf("\n%s R$%.2f", produto[i], porcentagem[i]);
	}
	
	return 0;
}
