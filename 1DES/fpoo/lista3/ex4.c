#include<stdio.h>
int main(){
	int i,n;
	printf("Digite um numero inteiro:");
	scanf("%d",&i);
	printf("Digite outro inteiro:");
	scanf("%d",&n);
	for(;i <= n; i++)
		printf("%d\n",i);
	return 0;
}
