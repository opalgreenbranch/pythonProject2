let x = 0
let y = 0
let index = 0
for (index = 0; index < 5; index++) {
    led.plot(x, y)
    y += 1
    led.plot(x, y)
    x += 1
    index += 1
}
index = 0
y = 0
x = 4
for (index = 0; index < 5; index++) {
    led.plot(x, y)
    y += 1
    led.plot(x, y)
    x -= 1
    index += 1
}
index = 0
