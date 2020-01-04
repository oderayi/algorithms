/**
 * Solutions to problems on www.projecteuler.net
 * 
 */
// 1. Sum of multiples of 3 and 5 up to 1000
function multiples() {
    return (SumDivisibleBy(3, 1000) + SumDivisibleBy(5, 1000) - SumDivisibleBy(3 * 5, 1000))
}

function SumDivisibleBy(n, target) {
    let p = Math.floor(target / n)
    return Math.floor((n * (p * (p + 1))) / 2)
}

// console.log(multiples());

// 2. Sum of even fibonacci sequence up to 4000000
// Every third item of a fibonacci sequence are the even numbers
function evenFibo() {
    let = target = 4000000
    let a = 1
    let b = 1
    let c = a + b
    let sum = 0
    while (c < target) {
        sum += c
        a = b + c
        b = c + a
        c = a + b
    }
    return sum;
}

// console.log("Sum = ", evenFibo())

// 3. Largest prime factor
function largestPrimeFactor() {
    let target = 600851475143
    let i = 2
    while (i < target) {
        if (target % i === 0) {
            target = target / i
        }
        i++
    }

    return i
}

// console.log(largestPrimeFactor())

// 4. Largest palindrome product
function largestPalindromeProduct() {
    let mx = 0
    let target = 999
    for (i = target; i >= 100; i--) {
        for (j = i; j >= 100; j--) {
            let p = i * j
            if (p <= mx) break
            mx = isPalindrome(p) && p > mx ? p : mx
        }
    }
    return mx
}
function isPalindrome(n) {
    return n.toString().split("").reverse().join("") === n.toString()
}
// console.log(largestPalindromeProduct())

// 5. Smallest multiple - smallest number divisible by each of the numbers 1 to 20
// (suboptimal)
function smallestMultiple() {
    n = 400
    least = 0

    while (true) {
        if (isDivisible(n)) {
            least = n
            break;
        }
        n++
    }
    return least
}

function isDivisible(n) {
    success = false
    for (i = 1; i <= 20; i++) {
        if (n % i !== 0) return false
    }
    return true
}

// console.log(smallestMultiple())

// 6. Sum square difference
function sumSquare() {
    let p = 100
    let squareOfSum = 0
    let sumOfSquare = 0
    squareOfSum = Math.pow(((p * (p + 1)) / 2), 2)
    sumOfSquare = p / 6 * (2 * p + 1) * (p + 1)
    return squareOfSum - sumOfSquare
}

// console.log(sumSquare())

// 7. 10001st prime
function nthPrime() {
    const limit = 10001
    let n = 1
    let primeCount = 1 // We add 1 because n starts at 1 and increases by 2 (since all prime numbers are always odd numbers) thereby skipping 2 which is a prime number
    let p = 1
    while (primeCount < limit) {
        if (isPrime(n)) {
            p = n
            primeCount++
        }
        n += 2
    }
    return p
}

function _isPrime(n) {
    if (n === 1) return false
    for (i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// Idea from Project Eular
function isPrime(n) {
    if (n === 1) {
        return false
    } else if (n < 4) {
        return true // 2 and 3 are primes
    } else if (n % 2 === 0) {
        return false
    } else if (n < 9) { // we have already excluded 4,6 and 8
        return true
    } else if(n % 3 === 0) {
        return false
    } else {
        let r = Math.floor(Math.sqrt(n))
        let f = 5
        while (f <= r) {
            if (n % f === 0) {
                return false
            }
            if (n % (f+2) === 0) {
                return false
            }
            f += 6
        }
    }
    return true
}

// console.log(nthPrime())

// 8. Largest product in a series