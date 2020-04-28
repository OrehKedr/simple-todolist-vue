<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodo 
      @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr>
    <Loader v-if="loading"/>
    <!-- 
      Для передачи данных в дочернии компоненты
      используется конструкция v-bind:todos="todos",
      где после v-bind: имя_переменной = значение_из_data.
      Значение указывается без ключевого слова this.
    -->
    <!-- 
      Символ '@' краткая запись директивы v-on:
     -->
    <TodoList       
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
// Псевдоним '@' всегда указывает на папку src.
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader';

export default {
  name: 'App',
  // В родительском компоненте будем хранить данные приложения.
  data() {
    return {
      todos: [
        // {id: 1, title: 'Купить хлеб', completed: false},
        // {id: 2, title: 'Купить сливочное масло', completed: false},
        // {id: 3, title: 'Купить молоко', completed: false}
      ],
      loading: true,  // Индикатор загрузки данных с сервера.
      filter: 'all'   // Настройка фильтра в <select></select>.
    }
  },
  // lifecycle hook "mounted": этап жизненного цикла компонента,
  // когда компонент подготовил html-шаблон и поместил его в DOM-дерево.
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => { 
        this.todos = json;
        this.loading = false;
      });
  },
  // Watch - возможность Vue, отслеживать измения значений переменных, для их обработки.
  // Название функции в объекте настроек watch должно совпадать 
  // с именем модели из объекта data, или любой другой переменной.
  // watch: {
  //   filter(value) {
  //     console.log(value);
  //   }
  // },
  // Поле настроек computed предназначно для выичсляемых свойств.
  // В computed-функциях мы прописываем логику, которая зависит от 
  // значений моделей из data и значений входящих свойств.
  // Значения могут меняться, а вслед за ними и computed-значение.
  // Computed-функцией можно пользоваться как переменной.
  // Изменение значения computed-функции, можно отслеживать в поле watch.
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }

      if (this.filter === 'completed') {
        return this.todos.filter( t => t.completed);
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter( t => !t.completed);
      }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter( t => t.id !== id );
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  },
  // Зарегистировали дочернии компоненты.
  components: {
    TodoList,
    AddTodo,
    Loader
  }
}
</script>