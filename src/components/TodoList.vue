<template>
  <div>
    <ul>
      <!-- {{todos}} -->
      <TodoItem 
        v-for="(todo, i) of todos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>>

<script>
  import TodoItem from '@/components/TodoItem';
  export default {
    name: 'TodoList',
    props: ['todos'],
    components: {
      TodoItem
    },
    methods: {
      removeTodo(id) {
        // console.log(id);
        // Пробрасываем событие 'remove-todo' компонента TodoItem
        // выше по дереву иерархии в родительский компонент App.
        this.$emit('remove-todo', id);
      }
    }
  }
</script>

<style scoped>
  /* 
    Атрибут scoped ограничивает область действия
    css-стилей в пределах данного компонента.
    Так организовывается локализация стилей.
  */
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>