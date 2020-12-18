<template>
  <nav class="navbar lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('clickSidebar')">
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
</template>

<style scoped>
.navbar {
  background: #0f3057;
  color: white;
}
</style>
