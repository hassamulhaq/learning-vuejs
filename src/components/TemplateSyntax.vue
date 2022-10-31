<template>
  <span>Message: {{ message }}</span>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue',
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  }
}
</script>


<style scoped>

</style>