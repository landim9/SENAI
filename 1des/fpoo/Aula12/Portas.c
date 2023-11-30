#include <stdio.h>
int total, i, j;

void mostrarPortas(int *portas[]){
	for(i = 0; i < total; i++){
		if(portas[i])
		printf("Porta %d Aberta\n", i + 1);
	else
		printf("Porta %d Fechada\n", i + 1);
		
	}
}


int main(){
	
	printf("Digite quantas portas e descendentes: ");
	scanf("%d", &total);
	int portas[total];
	
	
	for(i = 0; i < total; i++)
		portas[i] = 0;
		
		
	for(i = 2; i < total; i++){
		for(j = i; i < total; j+=i)
		if(portas[j]) portas[j] = 0;
		else portas[j] = 1;
	}
	
	mostrarPortas(portas);
	return 0;
}
