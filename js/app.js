const colors = ["green", "hsl(30, 100%, 50%)", "red", "rgba(133,122,200)", "#f15025", "hsl(225, 100%, 50%)"];
const clickMeBtn = document.querySelector(".btn");

clickMeBtn.addEventListener("click", () => {
    let randomIndex = getColorIndex();

    document.querySelector(".color").innerHTML = colors[randomIndex];
    document.body.style.backgroundColor = colors[randomIndex];
    document.getElementById("simple").style.color = colors[randomIndex];
});

let getColorIndex = () => {
    return Math.floor(Math.random() * colors.length)
}