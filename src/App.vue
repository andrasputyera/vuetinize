<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      :mobile-breakpoint="768"
      app
    >
      <v-img
      class="pa-4 pt-7"
      src="sunset.jpg"
      max-height="170"
      gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
      <v-avatar size="70" class="mb-2">
        <img
          src="avatar.png"
          alt="Avatar"
        >
      </v-avatar>
      <div class="white--text text-subtitle-1 font-weight-bold">
        Roger Federer
      </div>
      <div class="white--text text-subtitle-2">
        roger_federer
      </div>
      </v-img>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="sunset.jpg"
      prominent
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">Vuetinize Today</v-toolbar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
      </v-container>

    </v-app-bar>

    <v-main>
      <!-- Routes -->
      <router-view></router-view>
      <!-- Snackbars -->
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    components: {
      'search' : require('@/components/Tools/Search.vue').default,
      'live-date-time' : require('@/components/Tools/LiveDateTime.vue').default,
      'snackbar' : require('@/components/Global/Snackbar.vue').default
    },
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Todo', icon: 'mdi-playlist-edit', to: '/' },
          { title: 'About', icon: 'mdi-information-outline', to: '/about' },
      ], 
    }),
  }
</script>

<style lang="sass">
  .header-container
    max-width: none !important
</style>