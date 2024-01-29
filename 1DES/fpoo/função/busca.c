#include <stdio.h>

void mostrar(int vetor[], int n){
	int i;
	for(i = 0;i < n;i++)
		printf("%d[%d]\n",i , vetor[i]);
}

int buscar(int *vetor, int valor, int n){
	int i, posicao = -1;
	for(i = 0; i < n;i++){
		if(valor == vetor[i])
		posicao = i;
		return posicao;
	}
	return posicao;
}
int main(){
	int range[] = {16, 15, 24, 32, 45, 0 , 3, 8, 7};
	int n = sizeof(range) /sizeof(range[0]);
	mostrar(range, n);
	int valor;
	printf("Digite o valor a ser buscado: ");
	scanf("%d", &valor);
	int resultado = buscar(range, valor);
	if (resultado == -1)
		printf("Valor não encontrado");
	else
		printf("O valor foi encontrado na posição %d", resultado);
	
	return 0;
}
