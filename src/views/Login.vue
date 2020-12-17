<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" class="validate" />
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/signup" class="link">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<style scoped>
.card-title {
  font-size: 34px;
  font-weight: 700;
}
.link {
  color: #008891 !important;
}
.link:hover {
  color: #00b6b0 !important;
}
</style>
