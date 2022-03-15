<template>
  <div class="containee">
    <div class="face"></div>
    <div class="nose"></div>
    <div class="eyes"></div>
    <div class="eyes eye"></div>
    <div class="hair">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style >
.containee {
  margin-top: 30px;
  margin-bottom: 20px;
  position: absolute;
  background-color: #ddd;
  height: 400px;
  width: 400px;
  box-shadow: 16px 16px 10px #d7d7d7;
  border-radius: 20px;
}
.face {
  position: relative;
  height: 250px;
  width: 60px;
  background-color: #fce2c4;
  left: 220px;
  top: 100px;
  border: 4px solid #ffa945;
  border-bottom: none;
  transform: rotate(4deg);
}
.face::before {
  content: "";
  position: absolute;
  height: 14px;
  width: 14px;
  background-color: #fce2c4;
  border-left: 6px solid #ffa945;
  border-bottom: 4px solid #ffa945;
  border-bottom-left-radius: 10px;
  transform: skew(-40deg);
  top: 170px;
  left: -12px;
}
.face::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #fce2c4;
  border: 4px solid #ffa945;
  border-left: none;
  border-top: none;
  transform: rotate(-40deg);
  border-radius: 50%;
  top: 80px;
  left: 54px;
}
.nose {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #fce2c4;
  border: 4px solid #ffa945;
  left: 172px;
  bottom: 90px;
  border-right: none;
  border-radius: 14px 0 0 14px;
  transform: rotate(4deg);
  z-index: 1;
}
.nose::after {
  content: "";
  position: absolute;
  height: 10px;
  width: 30px;
  background-color: #fce2c4;
  border-top: 4px solid #ffa945;
  left: 30px;
  top: -4px;
}
.eyes {
  position: relative;
  height: 44px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid black;
  left: 206px;
  bottom: 188px;
  z-index: 0;
}
.eyes::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 12px;
  background-color: black;
  border-radius: 50%;
  top: 22px;
  left: 14px;
  transform: rotate(16deg);
}
.eyes::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
  left: 18px;
  top: 24px;
}
.eye {
  width: 40px;
  height: 40px;
  bottom: 215px;
  left: 230px;
  z-index: 2;
}

.eye::before {
  top: 12px;
}
.eye::after {
  top: 14px;
}

.hair {
  position: relative;
  bottom: 252px;
  left: 10px;
  z-index: 50;
}
.hair > div:nth-child(1) {
  position: absolute;
  height: 30px;
  width: 100px;
  border-top: 20px solid green;
  left: 180px;
  bottom: 40px;
  border-radius: 50px 40px 0 0;
  transform: rotate(30deg);
}
.hair > div:nth-child(2) {
  position: absolute;
  height: 30px;
  width: 100px;
  border-top: 20px solid green;
  left: 200px;
  bottom: 40px;
  border-radius: 50px 40px 0 0;
  transform: rotate(70deg);
}
.hair > div:nth-child(3) {
  position: absolute;
  height: 30px;
  width: 80px;
  border-top: 20px solid green;
  left: 220px;
  bottom: 50px;
  border-radius: 50px 40px 0 0;
  transform: rotate(120deg);
}
.hair > div:nth-child(4) {
  position: absolute;
  height: 30px;
  width: 100px;
  border-top: 20px solid green;
  left: 200px;
  bottom: 20px;
  border-radius: 50px 40px 0 0;
  transform: rotate(20deg);
}
.hair > div:nth-child(5) {
  position: absolute;
  height: 30px;
  width: 50px;
  border-top: 20px solid green;
  left: 260px;
  bottom: 20px;
  border-radius: 50px 40px 0 0;
  transform: rotate(10deg);
}
</style>