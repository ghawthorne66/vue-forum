<template>
  <h1>Welcome to the forum</h1>
  <ThreadList :threads="threads"/>
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
    }
  },
  name: "pageHome"
}
</script>

<style scoped>

</style>