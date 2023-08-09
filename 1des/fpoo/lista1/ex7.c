#include <stdio.h>

int main(){
	int alqueire, laranja, viagem, caminhao, x, b ,y, z;
	
	printf("Informe a quantidade de caminhões:");
	scanf("%d",&x);
	printf("Informe os alqueires da fazenda:");
	scanf("%d",&z);
	
	alqueire = 250;
	caminhao = 18;
	
	b = x * alqueire ;
	y = z * caminhao ;	
	
	viagem = b/y;

	printf("viagem:%d",viagem);
	
	
	return 0;
}

