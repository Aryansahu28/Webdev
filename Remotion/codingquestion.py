a1 = 10
a2 = 5

def isDivisible(a1,a2):
    a = min(a1,a2)
    b = max(a1,a2)
    for i in range(1,b+1):
        b = b-a
        if b==0:
            print("a1 is divided by a2")
            return
    if b!=0:
        print("It is not divisible")

isDivisible(5,5)
