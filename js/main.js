const target1 = document.getElementById('target1');
const target2 = document.getElementById('target2');
let num1 = 0;
let num2 = 0;

// お題となるワードリスト
const wordList = ['りんご','ゴリラ','玉ねぎ','プリン','砂糖'];

// ランダム数を生成する関数
function genNum() {
    let randomNum = Math.floor(Math.random() * wordList.length);
    num1 = randomNum;

    while (num1 == num2) {
        randomNum = Math.floor(Math.random() * wordList.length);
        num2 = randomNum;
    }
}

genNum();

// 表示させる
target1.textContent = wordList[num1];
target2.textContent = wordList[num2];
