#include <stdio.h>
int main(){
	float salario, reajuste;
	printf("Digite seu salario:");
	scanf("%f",&salario);
	
	if(salario <= 1750.00) reajuste = salario * 0.15;
	else if(salario <= 2000.00) reajuste = salario * 0.12;
	else if(salario <= 3000.00) reajuste = salario * 0.09;
	else if(salario >= 3000.00) reajuste = salario * 0.06;
	else reajuste = 0.15;
	
	printf("O Reajuste do salario = %.2f\n",reajuste);
	printf("O salário líquido será de = %2.f\n",salario + reajuste); 
	return 0;
}
