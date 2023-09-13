#include <stdio.h>

float mediaN(float *notas, int n){
	float total = 0;
	int i;
	for(i = 0;i < n; i++)
	total += notas[i];
	return total / n;
}

int main(){
	float notas[] = {10, 9, 7, 2, 7.5, 7, 9};
	int bytes = sizeof(notas);
	int elementos = bytes / sizeof(0);
	printf("Tamanho do vetor em bytes = %d\n",bytes);
	printf("Quantidade de elementos no vetor = %d\n", elementos);
	printf("%.1f", mediaN(notas, elementos));
}
