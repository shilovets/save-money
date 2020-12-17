<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input id="description" type="text" />
        <label for="description">Изменить имя</label>
        <span class="helper-text invalid">name</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
      </button>
    </form>
  </div>
</template>

<style scoped>
.page-title h3 {
  font-size: 2.5rem;
}
</style>
