let number = 90; //기준점 숫자
let unit = [];
// 유저가 입력할 숫자 a 정의
let resetbutton = 0;

function guessGame() {
for (let i = 1; i == 5; i++) {
  let a = 1;
  if (a < number) {
    console.log("Up!");
    unit.push(a)
    console.log(5-i)
  } else if (a > number) {
    console.log("Down!");
    unit.push(a)
    console.log(5-i)
  } else if (a == number) {
    console.log("That's right");
    console.log("버튼 비활성화")
    break;
    
  } else if (unit.includes(a)) {
    console.log("경고메세지");
  } else{
  console.log("경고메세지");
  }
}
}

if (resetbutton="push"){
    guessGame()
}
