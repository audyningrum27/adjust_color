const button = document.querySelector('button');
const body = document.querySelector('body');
const input= document.getElementById('colorCode');
const liveCode = document.getElementById('liveCode');

// const warna = () => {
//     button.style.borderColor = "black";
// }

const getColor = () => {
    return input.value;
}

const AdjustColor = () => {
    body.style.backgroundColor = `${getColor()}`;
}

const getNewColor = () => {
    let symbols, color;
    symbols = "0123456789ABCDEF"
    color = "#"
    for(let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
//    button.style.backgroundColor = color;
    liveCode.innerHTML = color;
}

button.addEventListener('click', () => {
    AdjustColor();
    getNewColor();
//    warna();
})
