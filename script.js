"use strict";
// 1行目に記載している 'use strict' は削除しないでください
// 厳格モード(曖昧な実装をエラーにしてくれる)

let startTime = performance.now();
const stopResults = [];

// 各種エレメント
const base =  document.getElementById("base");
const leftEye =  document.getElementById("left");
const rightEye =  document.getElementById("right");
const mouth =  document.getElementById("mouth");
const nose =  document.getElementById("nose");
const btnReset = document.getElementById("btnReset");
const lblResult = document.getElementById("resultLabel");

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
  // 回転がストップした時間
  const stopTime = performance.now() - startTime;

  // 回転をストップさせる
  // event.targetにイベントを発生させた要素が格納されている
  stopElement(event.target);

  // 角度を算出
  const stopAngle = convHalf(calcAngle(stopTime));
  stopResults.push(getResult(stopAngle));
  console.log(stopResults);

  if(isAllStoped()){
    btnReset.style.visibility = "visible";
    const avg = stopResults.reduce((prev, current) => prev + current, 0) / 4;
    lblResult.innerText = String(avg) + " 点"
  }
}

/**
 * 秒数から回転角を割り出す
 */
const calcAngle = (msec) => {
  const val = msec % 1000;
  return val * (360 / 1000);
}

/**
 * 半分の角度に変換
 */
const convHalf = (degree) => {
  const rev = 360 - degree;
  return degree < rev ? degree: rev;
}

/**
 * 点数を返す
 */
const getResult = (degree) => {
  // 角度と点数のペアが入った配列の配列
  const template = [[5, 100], [10, 90], [20, 80], [30, 60], [50, 50], [90, 20]];

  for(const arr of template){
    if(degree <= arr[0]){
      return arr[1];
    }
  }
  return 0;
}


// イベント処理を追加
leftEye.addEventListener("click", update);
rightEye.addEventListener("click", update);
mouth.addEventListener("click", update);
nose.addEventListener("click", update);
