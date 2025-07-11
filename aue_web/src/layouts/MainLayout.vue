<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          AUE
        </q-toolbar-title>

        <q-btn
          flat
          dense
          class="q-ml-auto"
          :label="user ? user.name : 'Guest'"
          icon="person"
          @click="goToProfile"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <MenuLink
          v-for="route in routesList"
          :key="route.title"
          v-bind="route"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import MenuLink from 'components/MenuLink.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      routesList: [
        {
          title: 'Home',
          caption: 'Go to home page',
          icon: 'home',
          route: '/'
        },
        {
          title: 'Notes',
          caption: 'Manage Notes',
          icon: 'group',
          route: '/notes'
        },
        {
          title: 'Materials',
          caption: 'View materials',
          icon: 'library_books',
          route: '/materials'
        },
      ]
    };
  },

  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },

    goToProfile() {
      this.$router.push('/profile');
    }
  }
});
</script>
