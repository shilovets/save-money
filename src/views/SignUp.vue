<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" />
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
      <div class="input-field">
        <input id="name" type="text" class="validate" />
        <label for="name">Имя</label>
        <small class="helper-text invalid">Name</small>
      </div>
      <p>
        <label>
          <input type="checkbox" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login" class="link">Войти</router-link>
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
