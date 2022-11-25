<template>
    <article v-for="article in articles" :key="article.id" class="mb-4">
        <h3>{{ article.title }}</h3>
        <p class="m-0 p-0">{{ article.lead }}</p>
        <div class="d-flex align-items-center my-2">
            <span v-for="tag in article.tags" :key="tag" class="badge bg-secondary me-2">
                <router-link class="text-white" :to="{ name: 'articles.tags', params: {tags: [tag]} }">{{ tag }}</router-link>
            </span>
        </div>
        <router-link :to="{ name: 'articles.show.comments', params: { id: article.id } }">View</router-link>
    </article>
</template>

<script>
export default {
    props: {
        articles: Object
    }
}
</script>

<style>

</style>