/**
 * Mixed linear congruential algorithm for random number generation
 * 
 * @author Steven Oderayi <oderayi@gmail.com>
 */
function congruential(_seed) {
    const sn = 4
    let seed = _seed || 3597
    const multi = 7953
    let rnd
    let cnt = 0
    let first = seed;

    while (true) {
        cnt++
        rnd = (seed * multi).toString()
        rnd = rnd.substr(rnd.length - sn, sn)
        console.log(cnt + ' --> ' + rnd)
        seed = Number(rnd)
        if (first === rnd) {
            console.log(`Period = ${cnt.toLocaleString()}`)
            break;
        }
    }
}

/**
 * Multiplicative linear congruential algorithm for random number generation
 * 
 * @author Steven Oderayi <oderayi@gmail.com>
 */
function multiplicative(_seed) {
    let seed = _seed || 7 // Seed = 7, To get maximum period, seed should be an odd number not divisible by 5. 
    const a = 1 // (1,5,9,13) a (and c) should be less than m, not divisible by either 3 or 5. a = multiplier. a = 7 is 1sec 50m, while a = 3 is 10sec 500m 
    const c = 45 // (1,3,5,7,...) Setting c = 7 takes the period from 500M to 1B. c should be such that c mod 8 = 5 (bin) or c mod 200 = 21 (dec)
    const m = 9223372037 // 10B. m should be sufficiently large to get a larger period. 10 * 2^63
    // const m = 9223372037000000000 // m should be sufficiently large to get a larger period. 2^63. Got over 1Trillion with this, ununded after about 24hrs
    let rnd
    let cnt = 0
    let first = seed;

    while (true) {
        cnt++
        rnd = ((seed * a) + c) % m
        seed = rnd
        if (first === rnd) {
            console.log(`Period = ${cnt.toLocaleString()}`)
            break;
        }
    }
}

multiplicative()