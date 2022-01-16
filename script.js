document.querySelector("#submit").addEventListener("click", () => {
    const hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    let hex_code1 = "";
    let hex_code2 = "";
    let random_index = 0;
    for(let i = 0; i < 6;i++){
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hex_code1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hex_code2 += hex_numbers[random_index];
    }

    document.body.style.background = `linear-gradient(to left top, #${hex_code1}, #${hex_code2})`;
    document.querySelector("#hex-code1").textContent = hex_code1;
    document.querySelector("#hex-code2").textContent = hex_code2;
});