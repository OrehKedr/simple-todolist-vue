<template>
  <!-- 
    @имя_события.prevent отменить действия браузера по-умолчанию.
    Для события "отправка формы" действие по-умолчанию: перезагрузка страницы.
   -->
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
export default {
  name: 'AddTodo',
  // Метод data возвращает модель данных для Vue-компонента.
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      // console.log('Submit', this.title);
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        };

        // Оповещаем родительский компонент 
        // о возбуждении события 'add-todo'.
        this.$emit('add-todo', newTodo);

        this.title = '';
      }
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input {
    width: 400px;
  }
</style>>