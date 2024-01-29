#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
    float raio, altura;
    float area, volume;
    float pi = 3.14;
    printf("Digite o raio de um circulo:");
    scanf("%f",&raio);
    printf("Digite a altura de um circulo:");
    scanf("%f", &altura);
    
    float areaLat = 2 * (pi * raio * altura);
    float areaBase = 2 * pi * raio * altura;
    area = areaLat + areaBase;
    volume = pi * raio * raio * altura;
    
    printf("Raio = %2f\n",raio);
    printf("Altura = %2f\n",altura);
    printf("A área do cilindro = %2f\n",area);
    printf("Volume do cilindro = %2f\n",volume);
	return 0;
}
