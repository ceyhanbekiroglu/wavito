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
  h1 {{ user.name }} has {{ user.dogs.length }} dog(s)
  .dog(v-for="dog in user.dogs")
    router-link(:to="`/dogs/${dog._id}`") {{ dog.dogName }}

  div(v-if='!user.dogs.length')
    | no dogs yet

  h2 {{ user.name }} s events
  .event(v-for="event in user.events")
    router-link(:to="`/events/${event._id}`") {{ event.name }}
  div(v-if='!user.events.length')
    | no events yet

  

  .div 
  button(@click="user.addDog") Add Dog

  .div
  button(@click="user.addEvent") Add Event
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #00CCAD;
  border-radius: 0.3rem;
}
</style>
