<script>
import axios from 'axios'
import UserCard from '@/components/user-card.vue'

export default {
  name: 'UserDetail',
  components: { UserCard },
  data() {
    return {
      user: null,
    }
  },
  async created() {
    const userRequest = await axios.get(`/api/users/${this.$route.params.id}`)
    this.user = userRequest.data
  },
}
</script>

<template lang="pug">
  .about
    h1 This is an user detail
    UserCard(:user="user" v-if="user")
  </template>
