#include <stdio.h>

int main() {
    int a, b, c, d, e;
    printf("Digite 5 numeros:\n");
    scanf("%d %d %d %d %d", &a, &b, &c, &d, &e);
    if (a > c) {
        int tmp = c;
        c = a;
        a = tmp;
    }
    if (a > b) {
        int tmp = b;
        b = a;
        a = tmp;
    }
    if (b > c) {
        int tmp = c;
        c = b;
        b = tmp;
    }
    if (b > d) {
        int tmp = d;
        d = b;
        b = tmp;
    }
    if (d > e) {
        int tmp = e;
        e = d;
        d = tmp;
    }
    printf("%d %d %d %d %d", a, b, c, d, e);
}
