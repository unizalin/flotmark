<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <h6 class="sidebar-heading d-flex justify-content-between
        align-items-center px-3 mt-4 mb-1 text-muted">
        <span>浮水公版</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link to="/floattype1" class="nav-link">
            <i class="far fa-hand-point-up"></i>計次產品
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/floattype2" class="nav-link">
            <i class="far fa-list-alt"></i> 雙按鈕
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/floattype3" class="nav-link">
            <i class="fas fa-ticket-alt"></i> 活動頁
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/floattype4" class="nav-link">
            <i class="fas fa-ticket-alt"></i> 全圖
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/floattype5" class="nav-link">
            <i class="fas fa-ticket-alt"></i> 白金宣傳
          </router-link>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between
        align-items-center px-3 mt-4 mb-1 text-muted">
        <span>彈跳公版</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link to="/videopop" class="nav-link">
            <i class="far fa-hand-point-up"></i>影片彈跳
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/inputpop" class="nav-link">
            <i class="far fa-hand-point-up"></i>輸入頁彈跳
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/opinionpop" class="nav-link">
            <i class="far fa-hand-point-up"></i>問題回覆彈跳
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
