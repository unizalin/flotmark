<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light row">
      <h1 class="col-md-3 text-center font-weight-bold" href="#">公版調整器</h1>


      <div class="navbar-nav mr-auto " >
          <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              浮水
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/floattype1" class="dropdown-item" href="#">計次產品</router-link>
              <router-link to="/floattype2" class="dropdown-item" href="#">雙按鈕</router-link>
              <router-link to="/floattype3" class="dropdown-item" href="#">活動頁</router-link>
              <router-link to="/floattype4" class="dropdown-item" href="#">全圖</router-link>
              <router-link to="/floattype5" class="dropdown-item" href="#">白金宣傳</router-link>
            </div>
          </li>
          <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              彈跳
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/videopop" class="dropdown-item" href="#">影片彈跳</router-link>
              <router-link to="/inputpop" class="dropdown-item" href="#">輸入頁彈跳</router-link>
              <router-link to="/opinionpop" class="dropdown-item" href="#">問題回覆彈跳</router-link>
            </div>
          </li>
      </div>
    </nav>
  </div>
</template>
