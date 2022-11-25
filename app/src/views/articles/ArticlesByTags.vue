<template>
    <div>
        <div v-if="articles">
            <header>
                <div class="my-2">
                    <h3 class="fw-bold">#{{ matchingTags }}</h3>
                    <p class="text-muted">{{ matchingTagsCount }} tags</p>
                </div>
            </header>
            <div>
                <ArticlesList :articles="articlesByTags" />
            </div>
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
</template>

<script>
import axios from 'axios'
import ArticlesList from './partials/ArticlesList.vue';
export default {
    props: { tags: Array },
    data() {
        return {
            articles: null
        };
    },
    computed: {
        articlesByTags() {
            return (this.articles).filter(
                (article) => (article.tags).filter((tag) => this.tags.includes(tag)).length
            );
        },
        matchingTags() {
            return this.tags.join(" #");
        },
        matchingTagsCount() {
            return this.tags.length
        },
    },
    mounted() {
        axios.get("http://localhost:3000/articles", (req, res) => {
            res.json();
        }).then(data => this.articles = data.data)
            .catch(err => console.log(err.message));
    },
    components: { ArticlesList }
};
</script>
