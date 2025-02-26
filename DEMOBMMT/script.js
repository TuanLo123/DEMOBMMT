function toggleAlgorithm() {
    let selected = document.getElementById("algorithm").value;
    document.getElementById("modExpSection").style.display = selected === "modExp" ? "block" : "none";
    document.getElementById("euclidExtSection").style.display = selected === "euclidExt" ? "block" : "none";
}

function calculateModExp() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let k = parseInt(document.getElementById("k").value);
    let mod = b;
    let binaryK = k.toString(2).split('').reverse().map(Number);
    let resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = "";

    let A = a % mod, result = 1;
    for (let i = 0; i < binaryK.length; i++) {
        if (binaryK[i] === 1) result = (result * A) % mod;
        resultTable.innerHTML += `<tr><td>${i}</td><td>${binaryK[i]}</td><td>${A}</td><td class='${binaryK[i] === 1 ? 'highlight' : ''}'>${result}</td></tr>`;
        A = (A * A) % mod;
    }
}

function calculateEuclidExt() {
    let a = parseInt(document.getElementById("ea").value);
    let b = parseInt(document.getElementById("eb").value);
    let x1 = 0, x2 = 1, y1 = 1, y2 = 0;
    let euclidTable = document.getElementById("euclidTable");
    let inverseResult = document.getElementById("inverseResult");
    euclidTable.innerHTML = "";

    let originalA = a, originalB = b;
    while (b > 0) {
        let q = Math.floor(a / b);
        let r = a % b;
        let x = x2 - q * x1;
        let y = y2 - q * y1;
        euclidTable.innerHTML += `<tr><td>${q}</td><td>${r}</td><td>${x}</td><td>${x1}</td><td>${x2}</td><td>${y}</td><td>${y1}</td><td>${y2}</td></tr>`;
        a = b; b = r;
        x2 = x1; x1 = x;
        y2 = y1; y1 = y;
    }

    if (a > 1) {
        inverseResult.innerHTML = `<b style='color: red;'>Không có nghịch đảo vì gcd(${originalA}, ${originalB}) = ${a} > 1</b>`;
    } else {
        inverseResult.innerHTML = `<b style='color: green;'>GCD = 1, Nghịch đảo của ${originalA} mod ${originalB} là ${x2 < 0 ? x2 + originalB : x2}</b>`;
    }
}
