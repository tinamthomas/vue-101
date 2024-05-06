<template>
  <button v-bind:class="{ primary }" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  methods: {
    handleClick() {
      console.log("I've been clicked")
    }
  },
  props: ['text'],
  data() {
    return {
      primary: true
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply border-0 bg-brand-blue-1  text-white hover:shadow-blue;
}
</style>
