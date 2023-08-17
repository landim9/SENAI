#include <stdio.h>

int main(){
	int numeros[6];
	int maior = 0;
	int i;
	printf("Digite 6 numeros inteiros:\n");
	
	for(i = 0;1<=6; i++){
		printf("numero %d:",i + 1);
		scanf("%d", &numeros[1]);
		
		if (numeros[i] > maior) {
			maior = numeros[i];
		}
	}


	
	
	printf("O maior numero é: %d\n", maior);
	return 0;
}
