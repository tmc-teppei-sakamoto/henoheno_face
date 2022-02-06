"use strict";
// 1行目に記載している 'use strict' は削除しないでください
// 厳格モード(曖昧な実装をエラーにしてくれる)


const leftEye =  document.getElementById("left");
const rightEye =  document.getElementById("right");
const mouth =  document.getElementById("mouth");
const nose =  document.getElementById("nose");


const stopElement = (event) => {
  // event.targetにイベントを発生させた要素が格納されている
  // アニメーションを止める
  event.target.style.animationPlayState = "paused"
  console.log(event.target.rotateX);
}

leftEye.addEventListener("click", stopElement);
rightEye.addEventListener("click", stopElement);
mouth.addEventListener("click", stopElement);
nose.addEventListener("click", stopElement);

