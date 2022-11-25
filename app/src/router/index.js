import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/pages/home.vue';
import AboutPage from '../views/pages/about.vue';

import ArticlesIndex from '../views/articles/index.vue';
import ArticleShow from '../views/articles/show.vue';

import notFound from '../errors/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // pages
    {
      path: '/',
      component: HomePage,
      name: 'pages.home',
    },
    {
      path: '/about',
      component: AboutPage,
      name: 'pages.about',
    },
    {
      path: '/articles',
      component: ArticlesIndex,
      name: 'articles.index',
    },
    {
      path: '/articles/:id(\\d+)',
      component: ArticleShow,
      name: 'articles.show',
      props: true,
    },
    // catch all 404
    {
      path: '/:url(.+)?',
      name: 'notFound',
      component: notFound
    }
  ]
})

export default router
