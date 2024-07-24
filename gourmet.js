// 1. イベントハンドラの登録

let se = document.querySelector('button#searchbotton');
se.addEventListener('click', printAnswer);


// 2. イベントハンドラの定義

function printAnswer() {
    // name 属性が genre の input 要素をすべて検索
    let rs = document.querySelectorAll('input[name="genre"]');
    for (let r of rs) {
        if (r.checked) {        // r が選択されていたら
            console.log(r.value);
            sendRequest(r.value);
        }
    }
    

}




// 通信を開始する処理
function sendRequest(key) {
  let input = document.querySelector('input');
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+key + '.json';

	axios.get(url)
		.then(showResult)  
		.catch(showError)  
		.then(finish);     
}

// 通信が成功した時の処理
function showResult(resp) {
  let h2 = document.querySelectorAll('h2');
  let p = document.querySelectorAll('p');
  for (let n of h2) {
    n.remove();
  }
  for (let n of p) {
    n.remove();
  }
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

  //if文の後ならこれは{}内ならどこでもいい
  print(data);
}

function print(data){
    let hazime = document.querySelector('div#result');
    let h1 = document.createElement('h1');
    h1.textContent = 'グルメ情報(検索結果:'+data.results.shop.length+'件)';
    


    for(let n of data.results.shop){

    h2 = document.createElement('h2');
    p11 = document.createElement('p');
    p12 = document.createElement('p');
    p13 = document.createElement('p');
    p14 = document.createElement('p');
    p15 = document.createElement('p');
    p16 = document.createElement('p');
    p17 = document.createElement('p');
    p18 = document.createElement('p');

    h2.textContent = '☆'+n.name+'☆';
    hazime.insertAdjacentElement('beforeend', h2);
    p11.textContent = 'アクセス: '+n.access;
    hazime.insertAdjacentElement('beforeend', p11);
    p12.textContent = '住所: '+n.address;
    hazime.insertAdjacentElement('beforeend', p12);
    p13.textContent = '予算: '+n.average;
    hazime.insertAdjacentElement('beforeend', p13);
    p14.textContent = 'キャッチコピー: '+n.catch;
    hazime.insertAdjacentElement('beforeend', p14);
    p15.textContent = 'ジャンル: '+n.genre.name;
    hazime.insertAdjacentElement('beforeend', p15);
    p16.textContent = '営業時間: '+n.open;
    hazime.insertAdjacentElement('beforeend', p16);
    p17.textContent = '最寄駅: '+n.station_name;
    hazime.insertAdjacentElement('beforeend', p17);
    p18.textContent = 'サブジャンル: '+n.sub_genre.name;
    hazime.insertAdjacentElement('beforeend', p18);

    }
}


// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
  let p100 = document.createElement('h1');
  p100.textContent = 'エラーが発生しました';
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}


