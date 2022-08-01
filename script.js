let button=document.querySelector("button");
let enter=document.querySelector("#enter");
let btn1=document.querySelector("#button1");
let btn2=document.querySelector("#button2");
let btn3=document.querySelector("#button3");
let btn4=document.querySelector("#button4");
let btn5=document.querySelector("#button5");
let btn6=document.querySelector("#button6");
let btn7=document.querySelector("#button7");
let btn8=document.querySelector("#button8");
let btn9=document.querySelector("#button9");
let btn10=document.querySelector("#button10");
let iframes=document.getElementsByClassName("iframes")[0];

function run(){
    iframes.innerHTML=`
    <div class="style" id="iframe0">
        <p>Dimension: Responsive (viewport)</p>
        <iframe src=" ${enter.value} " style="width:100%; height:100%;"></iframe>
    </div>
    <div class="style" id="iframe1">
        <p>Dimension: iPhone SE (375 &times; 667)</p>
        <iframe src="${enter.value}" style="width:375px; height:667px; transform:scale(0.7); position:relative; top:-100px;"></iframe>
    </div>
    <div class="style" id="iframe2">
        <p>Dimension: iPhone XR (414 &times; 896)</p>
        <iframe src="${enter.value}" style="width:414px; height:896px; transform:scale(0.7); position:relative; top:-130px;"></iframe>
    </div>
    <div class="style" id="iframe3">
        <p>Dimension: iPhone 12/13 Pro (390 &times; 844)</p>
        <iframe src="${enter.value}" style="width:390px; height:844px; transform:scale(0.7); position:relative; top:-120px;"></iframe>
    </div>
    <div class="style" id="iframe4">
        <p>Dimension: Samsung S8+ (360 &times; 740)</p>
        <iframe src="${enter.value}" style="width:360px; height:740px; transform:scale(0.8); position:relative; top:-80px;"></iframe>
    </div>
    <div class="style" id="iframe5">
        <p>Dimension: Samsung S20 (412 &times; 915)</p>
        <iframe src="${enter.value}" style="width:412px; height:915px; transform:scale(0.8); position:relative; top:-80px;"></iframe>
    </div>
    <div class="style" id="iframe6">
        <p>Dimension: Mobile Big Screen (599 &times; 820)</p>
        <iframe src="${enter.value}" style="width:599px; height:820px; transform:scale(0.8); position:relative; top:-70px;"></iframe>
    </div>
    <div class="style" id="iframe7">
        <p>Dimension: iPad Air (820 &times; 1180)</p>
        <iframe src="${enter.value}" style="width:820px; height:1180px; transform:scale(0.5); position:relative; top:-300px;"></iframe>
    </div>
    <div class="style" id="iframe8">
        <p>Dimension: iPad Mini/Tablet (768 &times; 1024)</p>
        <iframe src="${enter.value}" style="width:768px; height:1024px; transform:scale(0.6); position:relative; top:-200px;"></iframe>
    </div>
    <div class="style" id="iframe9">
        <p>Dimension: Mobile Small Screen (280 &times; 653)</p>
        <iframe src="${enter.value}" style="width:280px; height:653px;"></iframe>
    </div>
    <div class="style" id="ifraame10">
        <p>Dimension: Surface Pro 7/Mini PC (912 &times; 1368)</p>
        <iframe src="${enter.value}" style="width:912px; height:1368px; transform:scale(0.5); position:relative; top:-320px;"></iframe>
    </div>
    <div class="style" id="iframe11">
        <p>Width:968px</p>
        <iframe src="${enter.value}" style="width:968px; height:1024px"></iframe>
    </div>
    <div class="style" id="iframe12">
        <p>Width:1024px</p>
        <iframe src="${enter.value}" style="width:1024px; height:1366px"></iframe>
    </div>
    <div class="style" id="iframe13">
        <p>Width:1280px</p>
        <iframe src="${enter.value}" style="width:1280px; height:800px"></iframe>
    </div>
    <div class="style" id="iframe14">
        <p>Width:1440px</p>
        <iframe src="${enter.value}" style="width:1440px; height:900px"></iframe>
    </div>
   
    
    `
}


function start() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[0].style.display = "block";
    }
}

btn1.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[1].style.display = "block";
    }
}

btn2.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[2].style.display = "block";
    }
}

btn3.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[3].style.display = "block";
    }
}

btn4.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[4].style.display = "block";
    }
}

btn5.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[5].style.display = "block";
    }
}

btn6.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[6].style.display = "block";
    }
}

btn7.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[7].style.display = "block";
    }
}

btn8.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[8].style.display = "block";
    }
}

btn9.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[9].style.display = "block";
    }
}

btn10.onclick = function() {
    const screen = document.querySelectorAll(".style");
    for (let i = 0; i < screen.length; i++) {
        screen[i].style.display = "none";
        screen[10].style.display = "block";
    }
}