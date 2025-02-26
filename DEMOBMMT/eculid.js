export function calculateEuclidExt(a, b) {
    let x1 = 0, x2 = 1, y1 = 1, y2 = 0;
    let steps = [];

    while (b > 0) {
        let q = Math.floor(a / b);
        let r = a % b;
        let x = x2 - q * x1;
        let y = y2 - q * y1;

        steps.push({ q, r, x, x1: x2, x2: x1, y, y1: y2, y2: y1 });

        a = b; b = r;
        x2 = x1; x1 = x;
        y2 = y1; y1 = y;
    }
    
    return { d: a, x: x2, y: y2, steps };
}
