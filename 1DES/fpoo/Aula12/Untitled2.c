#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	FILE *arquivo;
	char str[80];
	
	arquivo = fopen ("arquivo.txt", "r");
	if (arquivo == NULL)
		printf("Erro, n�o foi possivel abrir o arquivo\n");
	else{
		while((fgets(str, 100, arquivo)) != NULL)
			printf("%s", str);
	}
	fclose(arquivo);
	return 0;
}
