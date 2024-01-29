#include <stdio.h>

int main(){
	int x;
	int y;
	int z; 
	printf("Terceira parte:");
	scanf("%d",&x);
	
	printf("Segunda parte:");
	scanf("%d",&y);
	
	printf("Terceira parte:");
	scanf("%d",&z);
	x = x + y / z;

	printf("Resultado: %d",x);
}
