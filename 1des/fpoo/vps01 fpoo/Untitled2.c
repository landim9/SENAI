#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int i, n;
	
	printf("Digite quantos produtos foram comprados:");
	scanf("%d", &n);
	
	char produto [n][15];
	float porcentagem, preco[i], lucro[i];
	
	

	
	for(i = 0; i < n; i++){
		printf("Digite o nome do %d produto:", i + 1);
		scanf("%s", &produto[i]);
		
		printf("Digite o preço do %d produto:", i + 1);
		scanf("%f", &preco[i]);
		
		printf("=====================================\n");
	}
	
	printf("Digite a margem de lucro em porcentagem esperada:");
	scanf("%f", &porcentagem);
	
	
	for(i = 0; i < n; i++){
		lucro[i] = preco[i] + preco[i] * porcentagem / 100;
		lucro[i] + i;
		
		printf("Produto: %s \n Preço: %f", produto[i], lucro[i]);
	}
	
	
	
	return 0;
}
