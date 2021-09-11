//Create a function that prints numbers from m to n after 100ms each. m and n should be taken as parameter in function"

const printNumbers = (m, n) => {
    for (let i = m; i <= n; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 100)
    }
}
printNumbers(10, 100);