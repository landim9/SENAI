#include <stdio.h>
int main(){
	int a, b;
	printf("Digite um numero inteiro:");
	scanf("%d", &a);
	b = a % 2;
	if(b) printf("Impar");
	else print("Par");
	return 0;
}
