const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const clickMeBtn = document.querySelector(".btn");

clickMeBtn.addEventListener("click", () => {
    let hexValue = "#";
    let i;
    let hexColorLength = 6;
    for ( i = 0; i < hexColorLength; i++ ){
        hexValue += hex[getColorIndex()];
    }
    document.querySelector(".color").innerHTML = hexValue;
    document.body.style.backgroundColor = hexValue;
    document.getElementById("hex").style.color = hexValue;  
});

let getColorIndex = () => {
    return Math.floor(Math.random() * hex.length)
}