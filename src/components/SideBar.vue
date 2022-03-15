<template>
  <div class="main-box">
    <input type="checkbox" id="check" />
    <div class="side-bar" :class="{ isRemove: remove }">
      <div class="logo">
        <a href="#">places</a>
      </div>
      <div class="btn-one">
        <label for="check">
          <i class="fa fa-window-close"></i>
        </label>
      </div>
      <div class="menu">
        <ul>
          <li>
            <router-link to="/login?redirect=/protected"
              ><i class="fa fa-bars"></i>LogIn</router-link
            >
          </li>
          <li>
            <router-link to="/destination/1/brazil">
              <i class="fa fa-car"></i>Brazil</router-link
            >
          </li>
          <li>
            <router-link to="/destination/2/panama">
              <i class="fa fa-cloud"></i>Panama</router-link
            >
          </li>
          <li>
            <router-link to="/destination/3/hawaii">
              <i class="fa fa-heart"></i>Hawaii</router-link
            >
          </li>
          <li>
            <router-link to="/destination/4/jamaica"
              ><i class="fa fa-car"></i>jamaica</router-link
            >
          </li>
          <li>
            <router-link to="/myImages"
              ><i class="fa fa-bars"></i>MyImages</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remove: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-box {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1000002;
  font-family: Helvetica, Arial, sans-serif;
}
.main-box .side-bar {
  position: fixed;
  height: 100%;
  width: 280px;
  top: 95px;
  left: -280px;
  background: #2c3e50;
  transition: all 0.5s linear;
}
.side-bar .logo {
  position: absolute;
  width: 100%;
  height: 60px;
  top: 12px;
}
.side-bar .logo a {
  color: #fff;
  font-size: 35px;
  position: absolute;
  left: 50px;
  line-height: 60px;
  text-decoration: none;
  font-family: cursive;
}
.side-bar .menu {
  position: absolute;
  top: 80px;
  width: 100%;
}
.side-bar .menu li {
  margin-top: 6px;
  padding: 35px 20px;
  transition: all 0.5s linear;
}
.side-bar .menu i {
  font-size: 20px;
  color: #fff;
  padding-right: 8px;
}
.side-bar .menu a {
  color: #fff;
  font-size: 25px;
  text-decoration: none;
  opacity: 0.5;
  transition: all 0.5s linear;
}
.side-bar .menu li:hover {
  box-shadow: 0 0 4px 4px #fff;
}
.side-bar .menu a:hover {
  opacity: 1;
}

/*    ////////////////    */
#check {
  display: none;
}
.main-box .btn-one i {
  font-size: 30px;
  color: red;
  font-weight: 700;
  cursor: pointer;
  position: absolute;
  top: 12px;
  left: 85%;
  line-height: 60px;
  opacity: 0.7;
  transition: all 0.3s linear;
}
.main-box .btn-one i:hover {
  transform: scale(1.2);
  opacity: 1;
}
#check:checked ~ .side-bar {
  left: 0px;
  transition: all 0.5s linear;
}
</style>