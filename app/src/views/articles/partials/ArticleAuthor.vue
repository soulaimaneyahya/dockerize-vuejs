<template>
    <div class="py-3">
        <div v-if="author">
            <div class="d-flex align-items-center">
                <div>
                    <img :src="author.avatar " alt="author.name" class="rounded-circle me-3" width="60"/>
                </div>
                <div>
                    <h5>{{ author.name }}</h5>
                    <p>{{ author.bio }}</p>
                </div>
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
            author: null
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/articles/${this.id}`, (req,res) => {
            res.json()
        }).then(data => this.author = data.data.author)
        .catch(err => console.log(err.message))
    }
}
</script>
