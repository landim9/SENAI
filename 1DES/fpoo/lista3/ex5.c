#include<stdio.h>
int main(){
	int i,n;
	printf("Digite um inteiro:");
	scanf("%d",&n);
	for(i = 0;i <= n; i+=2)
		printf("%d\n",i);
	return 0;
}
