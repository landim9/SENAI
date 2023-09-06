#include <stdio.h>
#include <locale.h>

int main(){
	
	int idade[5], i, temp = 0;
	char nome[20][20];
	
	for(i = 0; i < 5; i++){
		printf("Digite o nome:");
		scanf("%s", &nome[i]);
		
		printf("Digite a idade:");
		scanf("%d", &idade[i]);
		
		printf("==================\n");
	}
	
	
	for(i = 0; i < 5; i++){
		if(idade[i] > temp){
			temp = idade[i];
			
		}
	}
	
	printf("%d", temp);
	
	
	return 0;
}
