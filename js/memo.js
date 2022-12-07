

const factorial = (n) => {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return n * factorial(n-1);
}

// console.log(factorial(5));

// pointless memoization - no efficiency gained
const factorialMemoized = (n, cache) => {
    if (n == 0) return 0;
    if (n == 1) return 1;

    cache = cache || [];

    if (cache[n]) return cache[n]
    
    cache[n] = n * factorial(n-1);
    return cache[n];
}

console.log(factorialMemoized(5))