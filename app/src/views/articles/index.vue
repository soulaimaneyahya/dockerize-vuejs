<template>
    <div>
        <header>
            <div class="my-2">
                <h3 class="fw-bold">Articles</h3>
                <p class="text-muted">Lorem ipsum dolor sit amet.</p>
            </div>
        </header>
        <div>
            <div v-if="articles">
              <article v-for="article in articles" :key="article.id" class="mb-4">
                <h3>{{ article.title }}</h3>
                <p class="m-0 p-0">{{ article.lead }}</p>
                <div class="d-flex align-items-center my-2">
                  <span v-for="tag in article.tags" :key="tag" class="badge bg-secondary me-2">{{ tag }}</span>
                </div>
                <router-link :to="{ name: 'articles.show', params: { id: article.id } }">View</router-link>
              </article>
            </div>
            <div v-else>
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      articles: null
    }
  },
  mounted(){
    axios.get("http://localhost:3000/articles", (req,res) => {
      res.json()
    }).then(data => this.articles = data.data)
      .catch(err => console.log(err.message))
  }
};
</script>
