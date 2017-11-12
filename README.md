# js + React おさらい

## DOMについて
- `console.dir(document)` DOMの階層を見ることができる。

## DOMで何ができるか
- id,classを指定して取得できる
- getElementById
- querySelector
- querySelectorAll
- innerHTML
```javascript
//cromeデベロッパーにて
1.
<h1 id="header">The DOM is cool for many reasons.</h1>
consoleで確認

document.getElementById('header')
を行うことでIDを取得することができる

2.
<ul class="list">
  <li>You can see how pages are made</li>
  <li>You can manipulate it</li>
</ul>

document.getElementByClassName('list')
を行うことでclassを取得することができる
[ul.list]

document.getElementsByClassName('list')[0]では
<ul class="list">
  <li>You can see how pages are made</li>
  <li>You can manipulate it</li>
</ul>
この状態で出力される

document.getElementsByTagName('li')
だと配列として取得することができる

3.
document.querySelector('#header')
document.querySelector('.list')
最初の要素でセレクターを取得することができる

document.querySelectorAll('.list')
指定セレクタに一致する文書内のすべての要素を取得できる

document.querySelector('.list').children
配列で中身を全て取得できる

document.querySelector('.list').children[0]
で取得した最初の要素を取得

document.querySelector('.list').children[0].innerHTML
でその中の文章を変更できる

document.querySelector('.list').children[0].innerHTML = 'this is the firest list item'
で中身を書き換えている

```

- createElement()
- createAttribute()
- setAttributeNode

```javascript
1. エレメントの作成
var p = document.createElement('p')
console画面にてpと入力すると

<p></p>
と表示されて、新しくelementが作られる

p.innerText = 'this is the created element'
にすると※pと打って見ると

<p>this is the created element</p>
となりHTMLとしてelementを作成できる

document.body.appendChild(p)
をすることで,すでにあるHTMLに追加することができる

2. idを作成、追加
var alt = document.createAttribute('id') //idを作成

alt.value = 'created'　//id名を追加

//作成したidを変数altにいれてあるので、それをsetする
p.setAttributeNode(alt)

```
## Events
- click
- resize
- keydown, keypress, keyup
- mouseover
- load

```javascript
1. click

//clickしたらコンソールに表示
document.getElementById('one').addEventListener('click',function(){
  console.log('you clicked the button!');
});

//mouseoverをしたらinnerTextで文字を変更
document.getElementById('two').addEventListener('mouseover', function() {
  document.getElementById('two').innerText = 'you hovered over me!'
});

//bodyにイベントを設定、その内容がコールバックでstateTimeという関数を引き渡している
document.body.addEventListener('timeEvent' ,stateTime);

//stateTimeという関数を呼び出すようにしているのでその宣言
function stateTime(e){
  alert("event time is:" + e.detail);
}

//myEventにカスタムイベントを設定(自分だけのイベントを定義し発火させることができる)
var myEvent = new CustomEvent('timeEvent', {
  'detail' : new Date()
});


2.
//指定したクラスの有る無しを切り替える toggle
// クリックすると表示・非表示を切り替え
document.getElementById('theme').addEventListener('click', function() {
  document.body.classList.toggle('theme2');
});

```

## Ajax
- 同期
- 非同期
- HTTP Methods(GET,POST,DELETE)

```html
HTTPE status Codes
1. 100-level - hold on
2. 200-level - here you go
3. 300-level - go away
4. 400-level - you messed up
5. 500-level - servers messed up
```

```javascript

1.
//Ajax (非同期通信) に使われる組み込みオブジェクト
var a = new XMLHttpRequest();

//イベントの設定 readystatechangeを設定　200は成功
a.addEventListener('readystatechange', function(r){
  if(r.target.status === 200){
    console.log(r.target.response);
  }
});

//GETで対象のURLを設定して取得
a.open('GET', 'https://api.github.com/users/cassidoo', true);

//サーバへリクエストを送信
a.send();

2.
//PromiseによるAjaxこの方法だと短くかける
//Promiseのステータス
- Pending - incomplete
- Fulfilled - complete
- Rejected - failed

fetch('https://api.github.com/users/cassidoo')
.then(function(r){
  console.log(r.status); //これを入れると取得できているかどうかのステータスがわかる(※成功200)
  return r.json();
})
.then(function(j) {
  console.log(j);
})

これでjsonが取得できる
```


## json
- keys astring wrapped in
- Values can be a string, number, boolean expression, array, or object

サンプル書式
```javascript
EXample json
{
  "name": "Mana",
  age: 16,
  "ocean": {
      "chosen": true,
      "vayaged": false
  }
}

//名前を取得したい場合は
console.log(json.name); //Mana

//年齢を取得したい場合
console.log(json.age);
```
### Converting JSON
- JSON.stringify()  turn JSON into a string
- JSON.parse()  turn a string into JSON

```javascript
※サンプルの場合の話 github Followers取得
- Display avatar, username, real name, location, bio, and number of followers
- Get the usernames and avatars of their followers
- Add a "loading" indicator
- Add an input box that takes in other usernames to display

//jshandling.js一部抜粋
var response = null;
var followers = null;

document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
  getUser(document.getElementsByTagName('input')[0].value);
});

function getUser(name) {
  fetch('https://api.github.com/users/' + name)
    .then(function(r) {
      return r.json();
    })
    .then(function(j) {
      response = j;
      assignValues();
      getFollowers(j.followers_url);
    })
}
```

## Scope
- Global
- Local

```javascript
//グローバル例
var x = "hello, world";

consoleで見ると普通に見える


//function スコープ例
function someFunction() {
  //Local scope#1
  function someOtherFunction() {
    //Local scope#2
  }
}

//Call method
function greet(thing) {
  console.log(this + " says greetings, " + thing);

  greet.call("Cami", "earthilings")
  //=> Cami says greetings, earthilings
}


//call method2
var person = {
  name: "Samantha",
  greet: function(thing){
    console.log(this.name + " says greetings, " + thing );
  }
}

person.greet('neighbor')
⬇︎
person.greet.call(person, 'neighbor');
// Samantha says greetings, neighbor


//apply method
function greet(thing1, thing2){
  console.log(this + " says greetings, " + thing1);
  console.log("But " + thing2 + " doesn't like " + this);
}

- コールとの違いをチェック
greet.call('Smanatha', 'Maya', 'Angelina')

//applyを使っても同じ結果になる（コールとの違い）
greet.apply('Smanatha' , ['Maya', 'Angelina'])
// Samantha says greeting, Maya
// But Angelina doesn't like Samantha

```
