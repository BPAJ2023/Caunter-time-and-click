const timePage = document.querySelector('.time span');
const clickPage = document.querySelector('.click span');

function addTime(){
    let time = 0;
    const startTime = ()=>{
        timePage.textContent = ++time + 's';
    };
    return startTime;
};
const calcTime = addTime()
setInterval(calcTime,1000);

function addClick(){
    let click = 0;
    const startClick = ()=>{
        clickPage.textContent = ++click;
    };
    return startClick
};
const calcClick = addClick();

window.addEventListener('click',calcClick);