let tinhTong = (...soDiem) => {
    let ketQua = 0;
    soDiem.forEach(item => ketQua += item);
    return ketQua/soDiem.length;
}

let gradeOneBtn = document.getElementById("btnKhoi1");
gradeOneBtn.addEventListener("click", () => {
    let toan = Number(document.getElementById("inpToan").value);
    let ly = Number(document.getElementById("inpLy").value);
    let hoa = Number(document.getElementById("inpHoa").value);
    let result = tinhTong(toan, ly, hoa);
    document.getElementById("tbKhoi1").innerText = result;
});

let gradeTwoBtn = document.getElementById("btnKhoi2");
gradeTwoBtn.addEventListener("click", () => {
    let van = Number(document.getElementById("inpVan").value);
    let su = Number(document.getElementById("inpSu").value);
    let dia = Number(document.getElementById("inpDia").value);
    let english = Number(document.getElementById("inpEnglish").value);
    let result = tinhTong(van, su, dia, english);
    document.getElementById("tbKhoi2").innerText = result;
});
