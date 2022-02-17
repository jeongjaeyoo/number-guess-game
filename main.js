///랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 Up!!
/// Reset버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100범위 밖에 숫자를 입력하면 알려준다, 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다.

let computerNum = Math.floor(Math.random() * 100) + 1;
console.log(computerNum);
let userNumber = document.getElementById("input-area");
let chances = 5;
let leftChances = document.getElementById("left-chances");
let resultArea = document.querySelector(".result-text");
let resultAreaImg = document.querySelector(".main-img");
let playButton = document.getElementById("play-button");
let playButtonClick = playButton.addEventListener("click", play);
let resetButton = document
  .getElementById("reset-button")
  .addEventListener("click", reset);
let inputButton = document
  .getElementById("input-area")
  .addEventListener("focus", function blank() {
    userNumber.value = "";
  });
let gameOver = false;
let history = [];

function play() {
  userValue = userNumber.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1부터 100사이의 숫자를 입력하세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하세요!";
    return;
  }
  chances--;
  console.log("chances:", chances);
  leftChances.textContent = `남은 기회: ${chances}번`;

  if (computerNum < userValue) {
    resultAreaImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    resultArea.textContent = "Down!";
  } else if (computerNum > userValue) {
    resultAreaImg.src =
      "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
    resultArea.textContent = "Up!";
  } else {
    resultAreaImg.src =
      "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    resultArea.textContent = "맞췄습니다!";
    gameOver = true;
  }

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}
function reset() {
  resultArea.textContent = "죽기 싫다면 맞춰라!";
  leftChances.textContent = "남은 기회: 5번";
  userNumber.value = "";
  playButton.disabled = false;
  resultAreaImg.src = "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif"
}
