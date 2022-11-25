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
              <ArticlesList :articles="articles" />
            </div>
            <div v-else>
              <p class="placeholder-glow">
                <span class="placeholder bg-secondary col-6"></span>
                <span class="placeholder bg-secondary col-12"></span>
                <span class="d-flex align-items-center my-2">
                    <span class="btn btn-sm btn-secondary placeholder bg-secondary col-1 me-2"></span>
                    <span class="btn btn-sm btn-secondary placeholder bg-secondary col-1 me-2"></span>
                </span>
                <a href="#" tabindex="-1" class="btn btn-sm btn-primary disabled placeholder col-1" aria-hidden="true"></a>
              </p>
              <p class="placeholder-glow">
                <span class="placeholder bg-secondary col-6"></span>
                <span class="placeholder bg-secondary col-12"></span>
                <span class="d-flex align-items-center my-2">
                    <span class="btn btn-sm btn-secondary placeholder bg-secondary col-1 me-2"></span>
                    <span class="btn btn-sm btn-secondary placeholder bg-secondary col-1 me-2"></span>
                </span>
                <a href="#" tabindex="-1" class="btn btn-sm btn-primary disabled placeholder col-1" aria-hidden="true"></a>
              </p>
              <p class="placeholder-glow">
                <span class="placeholder bg-secondary col-6"></span>
                <span class="placeholder bg-secondary col-12"></span>
                <span class="d-flex align-items-center my-2">
                    <span class="btn btn-sm btn-secondary placeholder bg-secondary col-1 me-2"></span>
                    <span class="btn btn-sm btn-secondary placeholder bg-secondary col-1 me-2"></span>
                </span>
                <a href="#" tabindex="-1" class="btn btn-sm btn-primary disabled placeholder col-1" aria-hidden="true"></a>
              </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ArticlesList from './partials/ArticlesList.vue';
export default {
  components: {
    ArticlesList,
  },
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
