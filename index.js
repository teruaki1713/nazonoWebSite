
function setScreen() {
    var screenHeight = $(window).height();
    $("main").css("height",screenHeight-50);
}
setScreen();
$(window).resize(()=>{
    setScreen();
});

var wordData = [
    "ア","イ","ウ","エ","オ",
    "カ","キ","ク","ケ","コ",
    "サ","シ","ス","セ","ソ",
    "タ","チ","ツ","テ","ト",
    "ナ","ニ","ヌ","ネ","ノ",
    "ハ","ヒ","フ","ヘ","ホ",
    "マ","ミ","ム","メ","モ",
    "ヤ","ユ","ヨ",
    "ラ","リ","ル","レ","ロ",
    "ワ","ヲ","ン",
    "ガ","ギ","グ","ゲ","ゴ",
    "ザ","ジ","ズ","ゼ","ゾ",
    "ダ","ヂ","ヅ","デ","ド",
    "バ","ビ","ブ","ベ","ボ",
    "ャ","ュ","ョ",
];


function makeRandom(min,max) {
    var number = Math.floor(Math.random()*max)+min;
    return number;
}

var wordLength = makeRandom(3,8);
var word = [];

for(var i = 0; i < wordLength; i++) {
    word.push(wordData[makeRandom(0,wordData.length-1)]);
}

function check() {
    var userAnswer = document.getElementById("samples").value;

    var num1 = 0;
    var num2 = 0;
    var num3 = "✕"
    var num4 = 0;

    if(userAnswer.length === word.length) {
        num3 = "イイね"

        for(var i = 0; i<userAnswer.length; i++){
            if(userAnswer[i] === word[i]){
                num2++;
            }
        }
    }
    
    for(var i = 0; i < word.length; i++){
        for(var ii = 0; ii < userAnswer.length; ii++){
            if(word[i] === userAnswer[ii]){
                num4++;
            }
        }
        if(num4 > 0) {
            num1++;
        }
        num4 = 0;
    }

    $(".result").prepend(
        '<ul>'+
            '<li>'+ num1 +'</li>'+
            '<li>'+ num2 +'</li>'+
            '<li>'+ num3 +'</li>'+
        '</ul>'
    );

    if(num1 === word.length && num2 === word.length){
        $("div.over").css("display","block");
    }
}

document.addEventListener('keydown', (event) => {
    var keyName = event.keyCode;

    if(keyName === 13){
        check();
    }

});
