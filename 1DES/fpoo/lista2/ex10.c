#include <stdio.h>

int main(){

	int media,a,b,c,nota;

	printf("Digite as 3 notas do aluno de 0 a 10:");
	scanf("%d %d %d", &media,&a,&b);
	
	nota = (media + a + b) / 3;
	
	printf("A média é:%d\n",nota);
	
	if(nota >= 6)
		printf("Aprovado");
	else if(media > 4)
		printf("Recuperação");
	else
		printf("Reprovado");	
	return 0;
}
