<template>
  <button v-bind:class="buttonClass" @click="handleClick">
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
  },
  computed: {
    buttonClass() {
      return { primary: this.primary }
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
