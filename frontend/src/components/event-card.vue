<script>
export default {
  name: 'EventCard',
  props: ['event'],
  data() {
    return {}
  },
}
</script>

<template lang="pug">
.box
  div
    p Name: {{ event.name }}
    p Location: {{ event.location }}
    p Date and Time: {{ event.date }} at {{ event.time }}
    p Who is joining: {{ event.acceptedBy }}
    
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #00ccad;
  border-radius: 0.3rem;
}
</style>
