window.onload = (event) => {
    console.log('init fvrtrp...');
   
    init();
};

function init() {
    setInterval(changeBackground, 100);
    setTimeout(openOverlay, 1000);
}

function changeBackground() {
    const img = document.querySelector("#bgImage");
    console.log(img.src);

    const num = parseInt(img.src.match(/(.)\.svg/)[1]);
    let newNum = num + 1;
    if(num === 11)
        newNum = 1;
    img.src = `${newNum}.svg`;
}

function openOverlay() {
    document.getElementById('container').classList.add("blur");
    document.getElementById('overlay').classList.add("active");
    document.getElementById('nav').classList.add("active");
}