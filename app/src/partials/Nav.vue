<template>
  <header>
    <nav class="bg-white py-3">
      <ul class="d-flex justify-content-start gap-5 px-0 mx-0">
        <li class="list-group-item">
          <RouterLink :to="{ name: 'pages.home' }" class="text-decoration-none text-dark">Home</RouterLink>
        </li>
        <li class="list-group-item">
          <RouterLink :to="{ name: 'pages.about' }" class="text-decoration-none text-dark">About</RouterLink>
        </li>
        <li class="list-group-item">
          <RouterLink :to="{ name: 'articles.index' }" class="text-decoration-none text-dark">Articles</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
