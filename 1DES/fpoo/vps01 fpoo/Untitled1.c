#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int nota1, nota2, media;
	
	printf("Digite duas notas da disciplina:");
	scanf("%d %d",&nota1, &nota2);
		
		
	media = (nota1 + nota2) / 2;
	
	if(media >= 6){
		printf("Você está aprovado");
	}else{
		printf("Você está reprovado");
	}
	
	
	return 0;
}
