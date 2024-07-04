// ///////////////答え
let kotae = Math.floor(Math.random()*10) + 1;
//console.log('答え（デバッグ用）: ' + kotae);

///////////////////////入力回数（予想回数）
let kaisu = 1;
let yoso;
// 予想を4回実行する

/////////////////////将来以下の hantei(); の4回の呼び出しを全て削除する
///////////////////////////代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let c1 = document.querySelector('#kaitoubotton');
c1.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let b = document.querySelector('#kaitoubotton');
  b.addEventListener('click', ask);
  function ask(){
    let i = document.querySelector('input[name="kaitou"]');
    yoso = i.value;
  }
  kaisu = document.querySelector('label#kaitou');
  kaisu.textContent = "1kara10"
  let maru = document.querySelector('span#kaisu');
  maru.textContent = kaisu;
  let squad = document.querySelector('span#answer');
  squad.textContent = yoso;
    if(kaisu>=4){
        let result = document.querySelector('p#result');
        result.textContent ='答えは ' + kotae + ' でした．すでにゲームは終わっています';
    }else if(kotae===4){
        let result = document.querySelector('p#result');
        result.textContent ='正解です．おめでとう!';
    }else if(kaisu===3){
        let result = document.querySelector('p#result');
        result.textContent ='まちがい．残念でした答えは' + kotae + 'です．';
    }else if(kaisu<=2 && yoso<kotae){
        let result = document.querySelector('p#result');
        result.textContent ='まちがい．答えはもっと大きいですよ';
    }else if(kaisu<=2 && yoso>kotae){
        let result = document.querySelector('p#result');
        result.textContent ='まちがい．答えはもっと小さいですよ';
    }
  kaisu++;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}