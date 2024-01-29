#include <stdio.h>

int main(){
	char nome[20];
	int sis, sis2, sis3, sis4, sis5 , dia, dia2, dia3, dia4, dia5, media1, media2;
	printf("Digite seu nome:");
	scanf("%s",&nome);
	printf("Digite a pressão sistolica e diastolica do dia 1: ");
	scanf("%d %d",&sis,&dia);
	printf("Digite a pressão sistolica e diastolica do dia 2: ");
	scanf("%d %d",&sis2,&dia2);
	printf("Digite a pressão sistolica e diastolica do dia 3: ");
	scanf("%d %d",&sis3,&dia3);
	printf("Digite a pressão sistolica e diastolica do dia 4: ");
	scanf("%d %d",&sis4,&dia4);
	printf("Digite a pressão sistolica e diastolica do dia 5: ");
	scanf("%d %d",&sis5,&dia5);
	
	media1 = (sis + sis2 + sis3 + sis4 + sis5) / 5;
	media2 = (dia + dia2 + dia3 + dia4 + dia5) / 5;
	
	printf("A media da pressao sistolica é:%d\n",media1);
	printf("A media da pressao diastolica é:%d\n",media2);
	
	
	
	
	return 0;
}
