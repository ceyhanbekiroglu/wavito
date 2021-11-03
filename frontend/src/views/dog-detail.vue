<script>
import DogCard from '@/components/dog-card.vue'
import { mapActions } from 'vuex'

export default {
    name: 'DogDetail',
    components: { DogCard },
    data() {
        return {
            dog: null,
    }
},
async created() {
    this.dog = await this.fetchDog(this.$route.params.id)
    
},
methods: {
    ...mapActions(['fetchDog']),
    
    },
}
</script>

<template lang="pug">
    .about
        h1 Dog detail
        DogCard(:dog="dog")
        
</template>
