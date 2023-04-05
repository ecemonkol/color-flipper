const colors = ['coral', 'aqua','violet', 'red', 'yellow', 'green', 'blue', 'navy'];


const btn = document.querySelector(".btn")
const color = document.querySelector("#color")

const randonNumber = () => {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener("click", () => {
    const num = randonNumber();
    document.body.style.backgroundColor = colors[num]
    color.textContent = colors[num]
});