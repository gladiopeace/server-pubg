<template>
  <v-app light>
    <v-toolbar dense app dark color="dark" style="position: relative">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Tiny</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="nav_link">
        <v-btn flat to="/">Trang chủ</v-btn>
        <v-btn flat to="/contact">Liên hệ</v-btn>
        <v-btn flat>Thanh toán</v-btn>
        <v-btn flat>Hỏi đáp</v-btn>
      </v-toolbar-items>
      <v-spacer class="hidden-md-and-down"></v-spacer>
      <div class="hidden-md-and-down">

        <v-btn icon @click="addTodo({as:'hello'})">
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon @click="deleteTodo('123')">
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon to="/cart">
          <v-badge color="red">
            <span v-if="countItem!=0" slot="badge" v-html="countItem"></span>
            <v-icon>
              shopping_cart
            </v-icon>
          </v-badge>
        </v-btn>
        <v-btn icon @click="clearAll()">
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-menu offset-y>
          <v-btn slot="activator" icon>
            <v-icon>more_vert</v-icon>
          </v-btn>

          <v-list>
            <v-list-tile to="/login">
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to = "/register">
                <v-list-tile-title>Register</v-list-tile-title>
              </v-list-tile>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
    <v-container style="padding:0 !important;margin-top:5px" fluid v-if="this.$route.path === '/'  ">
      <v-layout row justify-center>
        <v-flex lg8 sm12 xs12>
          <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-content style="padding:0 !important">
      <router-view></router-view>

    </v-content>
    <!-- <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer> -->
  </v-app>

</template>

<script>
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        dialog: false,
        newTodo: '',
        countItem: this.$store.state.count,
        items: [
          {
            src: 'https://sv1.uphinhnhanh.com/images/2018/07/17/oie_17171035YicSEDWd.jpg'
          },
          {
            src: 'https://sv1.uphinhnhanh.com/images/2018/07/17/oie_17171456A5zqwZrL.jpg'
          }
        ]
      }
    },
    name: 'App',
    computed: mapGetters(['remaining', 'completed']),
    methods: {
      async clearAll() {
        await localStorage.clear();
        await window.location.reload();
      },
      ...mapActions(['addTodo', 'deleteTodo'])
    }
  }
</script>
<style scopped>
  @media only screen and (max-width: 760px),
  (min-device-width:768px) and (max-device-width:1024px) {
    .v-btn {
      font-size: 10px;
    }
    .v-toolbar__title:not(:first-child) {
      margin-left: 0 !important;
    }
  }
</style>