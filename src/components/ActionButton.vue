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
  props: ['text', 'isPrimary', 'type'],
  computed: {
    buttonClass() {
      return { [this.type]: true }
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
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:text-brand-blue-2;
}
</style>
