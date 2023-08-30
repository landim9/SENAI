#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	
	int i, n;
	
	printf("Digite o numero de doadores:");
	scanf("%d", &n);
	
	
	char nomes [n][20];
	int dias[n];
	int sexo[n][1];
	int idade[n];
	
	
	for(sexo == 1; i<n;i++){
		printf("Digite o nome do %d doador:",i + 1);
		scanf("%s",&nomes[i]);
		printf("Digite a idade do %d doador:",i + 1);
		scanf("%d",&idade[i]);
		printf("Informe como você de identifica 1.mulher, 2.homem::");
		scanf("%d",&sexo[1]);
		printf("Digite quantos dias desde a ultima doação do %d doador:",i + 1);
		scanf("%d",&dias[i]);
		
		if(dias<90) printf("Inapto\n");
		else printf("Apto\n");
}

for(sexo == 2; i<n;i++){
		printf("Digite o nome do %d doador:",i + 1);
		scanf("%s",&nomes[i]);
		printf("Digite a idade do %d doador:",i + 1);
		scanf("%d",&idade[i]);
		printf("Informe como você de identifica 1.mulher, 2.homem::");
		scanf("%d",&sexo[1]);
		printf("Digite quantos dias desde a ultima doação do %d doador:",i + 1);
		scanf("%d",&dias[i]);
		
		if(dias<60) printf("Inapto \n");
		else printf("Apto \n");
}

	return 0;
}
