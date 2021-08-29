<template>
  <div v-for="thread in threads"
       :key="thread.id"
  class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div v-for="postId in thread.posts" :key="postId">
        <p>{{userById(postById(postId).userId).name }}</p>
        <p>{{ postById(postId).text }}</p>
      </div>
      <div class="post"
           v-for="postId in thread.posts"
            :key="postId">

        <div class="user-info">
          <a href="#" class="user-name">
            {userById(postById(postId).userId).name }}
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    }
  },
  methods: {
    postById(postId){
      return this.posts.find(p => p.id === postId)
    },
   userById(userId){
      return this.users.find(p => p.id === userId)}

  },
  name: "pageHome"
}
</script>

<style scoped>

</style>