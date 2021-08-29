<template>
  <h1>Welcome to the forum</h1>
  <ThreadList />
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from "./ThreadList";

export default {
  components: {
    ThreadList,
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    }
  },
  methods: {
    postById(postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById(userId) {
      return this.users.find(p => p.id === userId)
    }

  },
  name: "pageHome"
}
</script>

<style scoped>

</style>