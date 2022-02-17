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
div
  
  .box
   div
    .photo-box
      img(alt="wavito_user" width=300 src="../assets/wavito.png")
  
    p Name: {{ dog.dogName }}
    p Breed: {{ dog.breed }}
    p Birth Year: {{ dog.birthYear }}
    p Human: {{ dog.user.name }}
</template>

<style lang="scss" scoped>
.box {
  width: 400px;
  padding: 2rem;
  border: 1px solid #333;
  background: #00ccad;
  border-radius: 0.3rem;
}
.photo-box {
  width: 300px;
  height: 300px;
  padding: 2rem;
  border: 1px solid #333;
  background: #00CCAD;
  border-radius: 0.3rem;
  
}
</style>
