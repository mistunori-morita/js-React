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
