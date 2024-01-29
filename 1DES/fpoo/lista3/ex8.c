#include <stdio.h>

int main(){
	int num, num1;
	
	printf("Insira um numero: ");
	scanf("%d", &num);
	
	if(num <= 0){
		printf("Somente numeros maiores que 0. ");
		return 0;
	}else{
		for(num1 = 1; num > 1; num = num - 1){
			num1 = num1 * num;
		}	
	}	
	
	printf("%d\n", num1);
	return 0;
}