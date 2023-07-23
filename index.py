from random import random
from math import sqrt

m = 10000 # 锚点数。几个锚点这里就是几
n = 0.0 # 圆中的点计数
for i in range(1, m+1):
    x,y = random.random(),random.random()
    dist = sqrt(x ** 2 + y ** 2, 0.5)
    if dist <= 1.0:
        n = n+1
pi = 4*(n/m)
print("圆周率为: {:.2f}".format(pi))