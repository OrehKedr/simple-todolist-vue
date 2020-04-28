<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr>
    <!-- 
      Компонент <router-view /> указывает на место монтирования компонента/страницы.
      Монтируемый компонет/страница соответвует пути(url).
      Настройки прописываются для экземпляра Router в router.js.
     -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
