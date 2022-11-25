<template>
    <div class="py-3">
        <div v-if="comments">
            <ul class="list-group">
                <li v-for="comment in comments" :key="comment.id" class="list-group-item">{{ comment.content }}</li>
            </ul>
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
            comments: null
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/articles/${this.id}`, (req,res) => {
            res.json()
        }).then(data => this.comments = data.data.comments)
        .catch(err => console.log(err.message))
    }
}
</script>
