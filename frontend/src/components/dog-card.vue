<script>
export default {
  name: 'DogCard',
  props: ['dog'],
  data() {
    return {}
  },
}
</script>

<template lang="pug">
.box
  div
    p Name: {{ dog.dogName }}
    p Breed: {{ dog.breed }}
    p Birth Year: {{ dog.birthYear }}
    p Human: {{ dog.user.name }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #00ccad;
  border-radius: 0.3rem;
}
</style>
