<template>
  <li>
    <!-- 
      Интерполяция - это синтаксическая структура для
      вывода динамических данных в шаблон: {{имя_переменной}}.
    -->
    <!-- {{ todo.title }} -->
    <!-- v-bind:class="{имя_класса: условие_добавления} -->
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" 
             v-on:change="todo.completed = !todo.completed"
      >
      <strong>{{index + 1}}</strong>
      <!-- 
        Оператор "|" позволяет применить фильтр к данным.
        Слева от оператора данные, справа функция-фильтр. 
      -->
      {{todo.title | uppercase}}
    </span>
    <!-- 
      Функция $emit позволяет сообщить "наверх" родительским
      компонентам о возбуждении события в дочернем компоненте.
      v-on:click="$emit('наше_имя_события', данные_события)".
     -->
    <button class="rm"
            v-on:click="$emit('remove-todo', todo.id)">
      &times;
    </button>
  </li>
</template>>

<script>
  export default {
    props: {
      // Используем другой синтаксис для props,
      // с целью настройки валидации входящих значений.
      todo: {
        type: Object,
        required: true
      },
      index: Number
    },
    // Фильтры - это одна из возможностей во Vue.
    // Служит для трансформации данных внутри шаблона.
    filters: {
      uppercase(value) {
        // console.log(value);
        return value.toUpperCase();
      }
    }
  }
</script>

<style scoped>
  input {
    margin-right: 1rem;
  }

  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }

  .rm {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
  }

  .done {
    text-decoration: line-through;
  }
</style>