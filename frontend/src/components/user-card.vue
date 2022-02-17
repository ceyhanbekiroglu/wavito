<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      defaultBio: 'This user has no bios.',
    }
  },
}
</script>

<template lang="pug">
div(v-if="user").box
  .photo-box
    img(alt="wavito_user" width=300 src="../assets/smile-pp.jpg")

  h1 {{ user.name }} has {{ user.dogs.length }} dog(s)
  .dog(v-for="dog in user.dogs")
    router-link(:to="`/dogs/${dog._id}`") {{ dog.dogName }}

  div(v-if='!user.dogs.length')
    | no dogs yet

  h2 {{ user.name }} has {{ user.events.length}} event(s) 
  .event(v-for="event in user.events")
    router-link(:to="`/events/${event._id}`") {{ event.name }}
  div(v-if='!user.events.length')
    | no events yet

  

 
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
  background: #00ccad;
  border-radius: 0.3rem;
}
</style>
