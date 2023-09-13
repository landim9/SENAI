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
	printf("%.1f", mediaN(notas, 7));
}
