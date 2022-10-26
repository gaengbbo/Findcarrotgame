const startBtn = document.querySelector('#startBtn');
const container = document.querySelector('.container');


function createItem () {
    const interface = document.createElement('div');
    interface.setAttribute('class', 'set__parts');
    interface.innerHTML= ` 
        <span id="time">00:00</span>
        <div id="leftCarrot">dd</div>`;    
        console.log("hey");
        container.appendChild(interface);
        return interface;

    }

function startTime () {
    const time = document.querySelector('#time');
    let defaultTime = 10;
    let time_left = defaultTime;
    
    let timeInterval = setInterval(function() {
        time_left--;
        time.innerText = ` 00 : ${time_left}`},1000)

};



function createObj () {
    const setObj = document.createElement('div');
    setObj.setAttribute('class', 'set__obj');
    setObj.innerHTML = `
        <img class="carrots" src=img/carrot.png>
        <img class="bugs" src=img/bug.png>`;
    container.appendChild(setObj);
    }




startBtn.addEventListener('click', (event)=>{
    //1. startbtn 삭제 
    startBtn.remove();

       
    //2. 초시계랑 남은당근 화면 출력 / 카운트 다운 시작
    createItem();
    startTime();

    createObj();
    
    //3. 랜덤한 좌표에 벌레랑 당근 출력

})

const time = document.querySelector('#time');
const leftCarrot = document.querySelector('#leftCarrot');