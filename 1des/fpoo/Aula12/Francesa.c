#include <stdio.h>

int main(){
	int total, i;
	printf("Digite quantas portas e descendentes:");
	scanf("%d", &total);
	int portas[total];
	for(i = 0; i < total; i++)
		if(portas[i] == 0)
		printf("Porta %d fechada\n");
	else
		printf("Porta %d aberta\n");
		
		
	
	return 0;
}
