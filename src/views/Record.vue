<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <select>
          <option>name cat</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <p>
        <label>
          <input class="with-gap" name="type" type="radio" value="income" />
          <span>Доход</span>
        </label>
      </p>

      <p>
        <label>
          <input class="with-gap" name="type" type="radio" value="outcome" />
          <span>Расход</span>
        </label>
      </p>

      <div class="input-field">
        <input id="amount" type="number" />
        <label for="amount">Сумма</label>
        <span class="helper-text invalid">amount пароль</span>
      </div>

      <div class="input-field">
        <input id="description" type="text" />
        <label for="description">Описание</label>
        <span class="helper-text invalid">description пароль</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Добавить
      </button>
    </form>
  </div>
</template>

<style scoped>
.page-title,
.form {
  min-width: 550px;
  max-width: 700px;
}
.page-title h3 {
  font-size: 2.5rem;
}
</style>
