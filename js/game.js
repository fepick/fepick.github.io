//대화넘기기
let click = document.querySelector(".dialog");

var kingbadcounter = 0;

click.onclick = function(){
    console.log("텍스트눌림");
    var dialog_text = document.querySelector("#dialog-text");
    new Audio("../sound/effects/next.mp3").play();
    kingbadcounter++;
    document.querySelector("#kingbad").innerHTML = kingbadcounter;
    if(dialog_text.innerHTML==="네가뭘할수있는데ㅋㅋ"){
        dialog_text.innerHTML = "킹받아도 어쩔 수 없어. 네가 뭘 할 수 있겠어??"
    }
    else{
        dialog_text.innerHTML = "네가뭘할수있는데ㅋㅋ"
    }
}

//JSON읽어서 슬라이드 만들기
var slideCounter=1;





//애니메이션

//불안하게 움직이기
//커졌다가 작아지기


//bgm

//이미지 전환

/////////////////
// gpt api 요청, 가져오기
// 이미지 생성, 가져오기
// 