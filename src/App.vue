<script>
import { ref } from 'vue'

import { usePostStore } from './stores/posts'
export default {
  setup() {
    const postsStore = usePostStore()
    const posts = ref(null) // posts is now a reactive reference

    postsStore.fetchData().then(() => {
      posts.value = postsStore.data // update posts when data is fetched
    })

    return {
      posts
    }
  }
}
</script>


<template lang="pug">
div(class="container p-5")
  table(class="table")
    thead
      tr
        th ID
        th UserId
        th Title
        th Body
    tbody
      tr(v-for="item in posts" :key="item.id")
        td {{ item.id }}
        td {{ item.userId }}
        td {{ item.title }}
        td {{ item.body }}
</template>
