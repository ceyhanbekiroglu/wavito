<script>
// @ is an alias to /src
import axios from 'axios'
import UserCard from '@/components/user-card.vue'

export default {
  name: 'UserList',
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
      time: new Date(),
    }
  },
  async created() {
    const usersRequest = await axios.get('/api/users')
    this.users = usersRequest.data
  },
}
</script>

<template lang="pug">
  .home
    h1 Wavito App
    h2 Welcome to your pets' best place. :)  
    p The time is: {{ time }}
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
</template>
