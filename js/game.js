//대화넘기기
let click = document.querySelector(".dialog");

click.onclick = function(){
    console.log("텍스트눌림");
    var dialog_text = document.querySelector("#dialog-text");
    if(dialog_text.innerHTML==="네가뭘할수있는데ㅋㅋ"){
        dialog_text.innerHTML = "킹받아도 어쩔 수 없어. 네가 뭘 할 수 있겠어??"
    }
    else{
        dialog_text.innerHTML = "네가뭘할수있는데ㅋㅋ"
    }
}

//애니메이션

//bgm

//이미지 전환

/////////////////
// gpt api 요청, 가져오기
// 이미지 생성, 가져오기
// 