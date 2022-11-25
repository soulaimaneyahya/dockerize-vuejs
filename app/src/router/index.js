import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/pages/home.vue';
import AboutPage from '../views/pages/about.vue';

import ArticlesIndex from '../views/articles/index.vue';

import ArticleShow from '../views/articles/show.vue';
import ArticleComments from '../views/articles/partials/ArticleComments.vue';
import ArticleAuthor from '../views/articles/partials/ArticleAuthor.vue';

import ArticlesByTags from '../views/articles/ArticlesByTags.vue';

import notFound from '../errors/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // pages
    {
      path: '/',
      component: HomePage,
      name: 'pages.home',
      alias: ['/home', '/home-page']
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
      children: [
        {
          path: '',
          component: ArticleComments,
          name: 'articles.show.comments',
          props: true,
        },
        {
          path: 'author',
          component: ArticleAuthor,
          name: 'articles.show.author',
          props: true,
        }
      ]
    },
    {
      path: '/articles/tags/:tags+',
      component: ArticlesByTags,
      name: 'articles.tags',
      props: true,
    },

    {
      path: '/relentless',
      redirect: {
        name: 'pages.home'
      }
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
