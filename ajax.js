// // var ajaxRequest = new XMLHttpRequest();
// // ajaxRequest.addEventListener('readystatechange', function(r) {
// //   if(r.target.status === 200) {
// //     console.log(r.target.response);
// //   }
// // });
// // ajaxRequest.open("GET", "https://api.github.com/users/cassidoo", true);
// // ajaxRequest.send();
//
// var a = new XMLHttpRequest();
//
// a.addEventListener('readystatechange', function(r){
//   if(r.target.status === 200){
//     console.log(r.target.response);
//   }
// });
//
// a.open('GET', 'https://api.github.com/users/cassidoo', true);
// a.send();


//Promises
fetch('https://api.github.com/users/cassidoo')
.then(function(r){
  console.log(r.status);
  return r.json();
})
.then(function(j) {
  console.log(j);
})
