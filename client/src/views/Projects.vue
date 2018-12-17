<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Projects></Projects>
      </v-flex>

      <v-flex xs8 class="pl-4">
        <Panel title="Tasks"></Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Projects from '@/components/Projects.vue';
import router from '../router';
import { mapGetters } from 'vuex';

export default {
  components: {
    Projects
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn'
    ])
  }
};
</script>
