<template>
    <div>
        <div v-if="article">
            <header>
                <div class="my-2">
                    <h3 class="fw-bold">#{{ article.id }} {{ article.title }}</h3>
                    <p class="text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
            </header>
            <div>
                <article >
                    <p class="m-0 p-0">{{ article.content }}</p>
                    <div class="d-flex align-items-center my-2">
                    <span v-for="tag in article.tags" :key="tag" class="badge bg-secondary me-2">{{ tag }}</span>
                    </div>
                </article>
            </div>
        </div>
        <div v-else>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['id'],
    data() {
        return {
            article: null
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/articles/${this.id}`, (req,res) => {
            res.json()
        }).then(data => this.article = data.data)
        .catch(err => console.log(err.message))
    }
}
</script>
