#include <stdio.h>

int main() {
    int num1, num2, num3, num4, num5, temp;
    printf("Digite 5 numeros:\n");
    scanf("%d %d %d %d %d", &num1, &num2, &num3, &num4, &num5);
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num2 > num3) {
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    if (num3 > num4) {
        tmp = num3;
        num3 = num4;
        num4 = temp;
    }
    if (num4 > num5) {
        temp = num4;
        num4 = num5;
        num5 = temp;
    }
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num2 > num3) {
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    if (num3 > num4) {
        tmp = num3;
        num3 = num4;
        num4 = temp;
    }
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num2 > num3) {
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    


    printf("%d %d %d %d %d", num1, num2, num3, num4, num5);
}
