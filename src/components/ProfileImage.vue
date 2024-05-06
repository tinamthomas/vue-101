<template>
  <img v-bind:src="imageLink" class="h-8 w-8 roundex-3xl object-contain" />
</template>
<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://fastly.picsum.photos/id/519/200/300.jpg?hmac=B0NGg8ubKyvt8vng2hrOIfwX6cmX-CJz-zjThIaC06M'
    }
  }
}
</script>
