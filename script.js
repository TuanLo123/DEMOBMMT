// Chuyển đổi giữa hai thuật toán khi chọn trong dropdown
function toggleAlgorithm() {
    let selected = document.getElementById("algorithm").value;
    document.getElementById("modExpSection").style.display = selected === "modExp" ? "block" : "none";
    document.getElementById("euclidExtSection").style.display = selected === "euclidExt" ? "block" : "none";
}

/**
 * Thuật toán tính lũy thừa modulo: a^k mod b
 */
function calculateModExp() {
    const a = parseInt(document.getElementById("a").value); // Cơ số a
    const b = parseInt(document.getElementById("b").value); // Modulo b
    const k = parseInt(document.getElementById("k").value); // Số mũ k
    const mod = b; // Modulo

    let resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = ""; // Xóa bảng kết quả trước đó

    let A = a % mod; // Khởi tạo A = a mod b
    let result = 1; // Biến lưu trữ kết quả
    let i = 0; // Đếm bước lặp
    let exponent = k; // Lưu giá trị của k để xử lý

    while (exponent > 0) {
        let bit = exponent & 1; // Lấy bit cuối của k (xác định có nhân hay không)
        if (bit === 1) result = (result * A) % mod; // Nếu bit = 1, nhân A vào kết quả

        // Thêm kết quả vào bảng
        resultTable.innerHTML += `<tr><td>${i}</td><td>${bit}</td><td>${A}</td><td class='${bit === 1 ? 'highlight' : ''}'>${result}</td></tr>`;

        A = (A * A) % mod; // Bình phương A
        exponent >>= 1; // Dịch bit phải (chia k cho 2)
        i++; // Tăng chỉ số bước
    }
}

/**
 * Thuật toán Euclid mở rộng để tìm nghịch đảo modulo
 */
function calculateEuclidExt() {
    let a = parseInt(document.getElementById("ea").value); // Nhập số a
    let b = parseInt(document.getElementById("eb").value); // Nhập số b
    let x1 = 0, x2 = 1, y1 = 1, y2 = 0; // Giá trị ban đầu cho hệ số x, y
    let table = document.getElementById("euclidTable");
    
    // Xóa nội dung bảng trước khi tính toán
    table.innerHTML = `<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>${a}</td><td>${b}</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>`;

    // Lặp đến khi b = 0 (điều kiện dừng của thuật toán Euclid)
    while (b !== 0) {
        let q = Math.floor(a / b); // Tính thương số q = a / b
        let r = a % b; // Phần dư r = a mod b
        let x = x2 - q * x1; // Cập nhật hệ số x
        let y = y2 - q * y1; // Cập nhật hệ số y

        // Ghi kết quả vào bảng
        table.innerHTML += `<tr><td>${q}</td><td>${r}</td><td>${x}</td><td>${y}</td><td>${b}</td><td>${r}</td><td>${x1}</td><td>${x}</td><td>${y1}</td><td>${y}</td></tr>`;

        // Cập nhật giá trị cho vòng lặp tiếp theo
        a = b;
        b = r;
        x2 = x1;
        x1 = x;
        y2 = y1;
        y1 = y;
    }
}
