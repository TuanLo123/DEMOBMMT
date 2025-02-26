export function calculateModExp(a, k, b) {
    let mod = b;
    let binaryK = k.toString(2).split('').reverse().map(Number);
    let steps = [];
    
    let A = a % mod, result = 1;
    for (let i = 0; i < binaryK.length; i++) {
        if (binaryK[i] === 1) result = (result * A) % mod;
        steps.push({ i, bit: binaryK[i], A, result });
        A = (A * A) % mod;
    }
    return steps;
}
