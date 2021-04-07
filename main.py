x = 0
y = 0
index = 0

for index in range(5):
    led.plot(x, y)
    y += 1
    led.plot(x, y)
    x += 1
    index += 1
index = 0
y = 0
x = 4
for  index in range(5):
    led.plot(x, y)
    y += 1
    led.plot(x, y)
    x -= 1
    index += 1
index = 0
