<template>
  <div>
    <h2>Home page</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ullam vel, ipsam, dolor assumenda similique soluta at veritatis odio tenetur, corrupti amet provident molestiae deserunt! Voluptatum illo doloremque adipisci consectetur debitis! Doloribus possimus dolorum est ex aperiam esse, cumque nesciunt sequi sed cupiditate quae alias harum maiores quo fuga inventore rerum distinctio veritatis eaque praesentium? Voluptatibus quaerat reprehenderit repellendus ab rerum molestias quo unde laudantium impedit expedita placeat eius corporis libero, nostrum illum odit itaque facilis. Temporibus hic molestias non illum laboriosam quibusdam reiciendis quos tenetur maxime quo, voluptatem enim dolorum similique culpa suscipit quod consectetur assumenda mollitia, amet labore!</p>
    <!-- 
      Роутер может работать с html-тегом <a href="/todos"></a>, но 
      в таком случае при переходе по ссылке будет произведена перезагрузка страницы.
      Чтобы этого избежать нужно использовать нативный компонент Vue <router-link to="путь"></router-link>
    -->
    <router-link to="/todos">Todos</router-link>
  </div>
</template>