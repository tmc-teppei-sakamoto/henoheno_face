"use strict";
// 1行目に記載している 'use strict' は削除しないでください
// 厳格モード(曖昧な実装をエラーにしてくれる)

let startTime = performance.now();

// 各種エレメント
const base =  document.getElementById("base");
const leftEye =  document.getElementById("left");
const rightEye =  document.getElementById("right");
const mouth =  document.getElementById("mouth");
const nose =  document.getElementById("nose");
const btnReset = document.getElementById("btnReset");

const movingElements = [leftEye, rightEye, mouth, nose];

/**
 * 
 * @returns {Booleen} 全ての要素が止められたかどうかを返す
 */
 const isAllStoped = () => {
  for(const element of movingElements){
    if(element.style.animationPlayState !== "paused"){
      return false;
    }
  }
  return true;
}

/**
 * 回転をとめる
 * @param { element }  回転を止めたい要素
 */
// 回転をストップする
const stopElement = (target) => {
  target.style.animationPlayState = "paused"
}

/**
 * 止めるフロー
 */
const update = (event) => {
  console.log(performance.now() - startTime);
  // event.targetにイベントを発生させた要素が格納されている
  stopElement(event.target);
  if(isAllStoped()){
    btnReset.style.visibility = "visible"
  }
}

// イベント処理を追加
leftEye.addEventListener("click", update);
rightEye.addEventListener("click", update);
mouth.addEventListener("click", update);
nose.addEventListener("click", update);
btnReset.addEventListener("click", ()=>{
  for(const element of movingElements){
    element.style.animationPlayState = "running"
  }
  btnReset.style.visibility = "hidden"
});
