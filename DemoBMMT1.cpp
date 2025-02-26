#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
//------------------------------------------------
//call  fuction
void nhapsonguyenduong(int &n);
void nhapso(long long &n);
long long TinhAkmodB(long long a, long long b, long long k);
int EUCLIDEMORONG(int a, int b, int* X, int* Y);
void MENU()
{
	printf("\n***************    MENU   ****************");
	printf("\n*1. TINH A^K MOD B.                      *");
	printf("\n*2. EUCLIDE MO RONG.                     *");
	printf("\n*0. THOAT CHUONG TRINH.                  *");
	printf("\n******************************************");
}
void process()
{
	int lc, n,a1,b1,x,y;
	long long a, b, k;
	do
	{
		MENU();
		printf("\nNHAP LUA CHON CUA BAN: ");
		nhapsonguyenduong(lc);
		switch (lc)
		{
			case 1:
			{
				printf("\nNHAP A: ");
				nhapso(a);
				printf("\nNHAP B: ");
				nhapso(b);
				printf("\nNHAP K: ");
				nhapso(k);
				long long kq = TinhAkmodB(a, b, k);
				printf("\nKET QUA CUA %lld^%lld MOD %lld: %lld ", a, k, b, kq);
				break;
			}
			case 2:
			{
				printf("\nNHAP A: ");
				nhapsonguyenduong(a1);
				printf("\nNHAP B: ");
				nhapsonguyenduong(b1);
				int kq = EUCLIDEMORONG(a1, b1, &x, &y);
				if (kq == 1)
				{
					printf("\nUCLN CUA (%d,%d) = 1 THOA MAN DIEU KIEN", a1, b1);
					printf("\n%dx + %dy = 1", a1, b1);
					printf("\nKET QUA: %d^-1 MOD %d: %d", b1, a1, y);
					printf("\nKET QUA: %d^-1 MOD %d: %d", a1, b1, x);
				}
				else
				{
					printf("\nUCLN CUA (%d,%d) KHAC 1 KHONG THOA MAN DIEU KIEN", a1, b1);
				}
				break;
			}
			case 0:
			{
				exit(1);
				break;
			}
		}
	} while (lc != 0);
	_getch();
}
//------------------------------------------------
// run
void main()
{
	process();
}
//------------------------------------------------
//function
void nhapsonguyenduong(int &n)
{
	do
	{
		scanf_s("%d", &n);
		if (n < 0)
		{
			printf("\nVui long nhap lai mot so nguyen duong.");
		}
	} while (n < 0);
}
void nhapso(long long &n)
{
	do
	{
		scanf_s("%lld", &n);
		if (n < 0)
		{
			printf("\nVui long nhap lai mot so nguyen duong.");
		}
	} while (n < 0);
}
//Hàm tính A^k mod b
long long TinhAkmodB(long long a, long long b, long long k)
{
	long long KQ = 1; //BƯỚC 1: ĐẶT B <- 1
	long long A = a % b;//BƯỚC 2: ĐẶT A = a
	//CHUYỂN K VỀ DẠNG NHỊ PHÂN
	while (k > 0)
	{
		if (k % 2 == 1)//NẾU BIT HIỆN TẠI Ki = 1 
		{
			KQ = (KQ * A) % b; // b = A*b Mod n
		}
		A = (A * A) % b; //A = A^2 mod n
		k /= 2;// dịch phải k
	}
	return KQ;
}
//Hàm EUCLIDE MỞ RỘNG
int EUCLIDEMORONG(int a, int b, int* X, int* Y)
{
	int x1 = 0, x2 = 1, y1 = 1, y2 = 0;
	int q, r, x, y;
	while (b > 0)
	{
		q = a / b;
		r = a - q * b;
		x = x2 - q * x1;
		y = y2 - q * y1;
		//Cập nhập các giá trị a b x y
		a = b;
		b = r;
		x2 = x1;
		x1 = x;
		y2 = y1;
		y1 = y;
	}
	*X = x2;
	*Y = y2;
	return a;
}