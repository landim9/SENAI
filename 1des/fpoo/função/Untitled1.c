#include <stdio.h>
#include <locale.h>

int soma(int a, int b){
	return a + b;
}

int media(int a, int b){
	return (a + b) / 2;	
}

int procedimentoBart(){
	int i;
	for(i = 0;i < 100;i++){
		printf("não vou atormentar a Lisa\n");
	}
}

int frases(char frase[], int n){
	int i;
	for(i = 0;i < n;i++){
		printf("%s\n", frase);
	}
}
int main(){
	setlocale(LC_ALL,"");
	frases("Palmeiras não tem mundial", 5);
	return 0;
}

