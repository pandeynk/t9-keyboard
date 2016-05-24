
var input = document.getElementById("input");
var timer;
var pause = 0;
var difTolerance = 700;
var startTime;
var endTime;
var first = true;
var activeKey=[];
var current;
var lastKey;
var k48 = ["0"," "];
var k49 = [".",",","!", "1"];
var k50 = ["a","b","c", "2"];
var k51 = ["d","e","f", "3"];
var k52 = ["g","h","i", "4"];
var k53 = ["j","k","l", "5"];
var k54 = ["m","n","o", "6"];
var k55 = ["p","q","r","s", "7"];
var k56 = ["t","u","v", "8"];
var k57 = ["w","x","y","z", "9"];
var k58= ["*"];
var k59 = ["#"];
function setWord(){
    input.innerHTML = input.innerHTML + activeKey[current];
    current = 0;
    first=true;
}
function checkPause(){
    endTime = new Date().getTime();
    if (endTime - startTime >= difTolerance) {
        clearInterval(timer);       
        setWord();
    }
}
function handleClick(e){
    console.log("HEJ", e);

    if ($(e).prop("id") != lastKey) {
        current = 0;
        first = true;
    }
    
    lastKey = $(e).prop("id");
    clearInterval(timer);
    startTime = new Date().getTime();
    pause = 0;
    timer = setInterval(checkPause, 5);

    
    if ($(e).prop("id") === "0") {
        // 0
        // space    
        activeKey = k48;    
    } else if ($(e).prop("id") === "1") {
        // 1
        activeKey = k49;
    } else if ($(e).prop("id") === "2") {
        // 2
        // a b c
        activeKey = k50;
    } else if ($(e).prop("id") === "3") {
        // 3
        // d e f
        activeKey = k51;
    } else if ($(e).prop("id") === "4") {
        // 4
        // g h i
        activeKey = k52;
    } else if ($(e).prop("id") === "5") {
        // 5
        // j k l
        activeKey = k53;
    } else if ($(e).prop("id") === "6") {
        // 6
        // m n o
        activeKey = k54;
    } else if ($(e).prop("id") === "7") {
        // 7
        // p q r s
        activeKey = k55;
    } else if ($(e).prop("id") === "8") {
        // 8
        // t u v
        activeKey = k56;    
    } else if ($(e).prop("id") === "9") {
        // 9
        // w x y z
        activeKey = k57;
    }
    else if ($(e).prop("id") === "*") {
        // 9
        // w x y z
        activeKey = k58;
        current = 0;
        first = true;
    }
    else if ($(e).prop("id") === "#") {
        // 9
        // w x y z
        activeKey = k59;
        current = 0;
        first = true;
    }

    if (current < activeKey.length-1) {
        current++;      
    }else{
        current = 0;
        first=true;
    }
    if (first) {
        current = 0;
        first = false;
    }
}
