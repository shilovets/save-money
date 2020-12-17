<template>
  <div class="app-main-layout">
    <nav class="navbar lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#">
            <i class="material-icons">dehaze</i>
          </a>
          <span class="">12.12.12</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <router-link
              to="profile"
              class="dropdown-trigger"
              data-target="dropdown"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
            </router-link>

            <ul id="dropdown" class="dropdown-content">
              <li>
                <a href="#" class="">
                  <i class="material-icons">account_circle</i>Профиль
                </a>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="#" class="">
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav app-sidenav open">
      <li>
        <router-link to="/home" class="waves-effect waves-deep pointer"
          >Счет</router-link
        >
      </li>
      <li>
        <router-link to="/history" class="waves-effect waves-deep pointer"
          >История</router-link
        >
      </li>
      <li>
        <router-link to="/planning" class="waves-effect waves-deep pointer"
          >Планирование</router-link
        >
      </li>
      <li>
        <router-link to="/record" class="waves-effect waves-deep pointer"
          >Новая запись</router-link
        >
      </li>
      <li>
        <router-link to="/categories" class="waves-effect waves-deep pointer"
          >Категории</router-link
        >
      </li>
    </ul>

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link to="record" class="btn-add btn-floating btn-large">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background: #0f3057;
  color: white;
}
.sidenav {
  background: #e7e7de;
}
.sidenav a {
  color: #0f3057;
  font-size: 18px;
  font-weight: 700;
}
.btn-add {
  background: #008891;
}
</style>
