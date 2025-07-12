l = [1, 2, 3]
l2 = []
for i in l:
    l2.append(i*i)
print(l2)

l = [1, 2, 3]
l2 = [i * i for i in l if i % 2 != 0]
print(l2)
