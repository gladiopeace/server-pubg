<template>
  <v-app>
    <v-container app style="padding: 0 !important" fluid>
      <v-layout style="background-color: #f2f2f2" app row wrap>
        <v-flex fill-height xs6>
          <v-btn flat>
            <span>SEARCH</span>
            <v-icon light>search</v-icon>
          </v-btn>
        </v-flex>
        <v-flex fill-height xs6>
          <v-btn flat>
            <span>CART</span>
            <v-icon light>shopping_cart</v-icon>
          </v-btn>
        </v-flex>
        <v-flex fill-height xs6>
          <v-btn flat>
            <span>SIGN IN</span>
            <v-icon light>arrow_right</v-icon>
          </v-btn>
        </v-flex>
        <v-flex fill-height xs6>
          <v-btn flat>
            <span>CONTACT</span>
            <v-icon light>phone</v-icon>
          </v-btn>
        </v-flex>
        <v-flex style="background-color: white" xs12>
          <div class="text-xs-center" style="text-align: center">
            <span style=" font-family: 'Marck Script' !important;
                color: #f88db1;
                font-size: 60px;
                font-weight: 400;
                line-height: 60px;
                ">Be</span>
            <span style="font-family: Ubuntu;
                color: #686869;
                font-size: 27px;
                font-weight: 500;
                line-height: 60px;
                ">Flora</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-btn flat>
            <span>MENU</span>
            <v-icon light>add</v-icon>
          </v-btn>
        </v-flex>
        <v-flex fill-height xs12 style="padding-top: 10px;padding-bottom: 10px">
          <v-carousel style="height: 150px;">
            <v-carousel-item src="http://res.cloudinary.com/green-life/image/upload/c_scale,w_473/v1534510677/Slide_1.jpg"></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex xs6 style="padding: 2px">
          <img width="100%" height="100%" src="http://res.cloudinary.com/green-life/image/upload/c_scale,w_180/v1534511360/2.jpg" alt="">
        </v-flex>
        <v-flex xs6 style="padding: 2px">
          <img width="100%"  height="100%" src="http://res.cloudinary.com/green-life/image/upload/c_scale,w_180/v1534511160/4.png" alt="">
        </v-flex>
        <v-flex xs6 style="padding: 2px">
          <img width="100%" height="100%" src="http://res.cloudinary.com/green-life/image/upload/c_scale,w_180/v1534511360/2.jpg" alt="">
        </v-flex>
        <v-flex xs6 style="padding: 2px">
          <img width="100%" height="100%" src="http://res.cloudinary.com/green-life/image/upload/c_scale,w_180/v1534511360/3.jpg" alt="">
        </v-flex>
      </v-layout>

    </v-container>
  </v-app>
</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Marck+Script');
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:600');
  * {
    font-family: 'Ubuntu', sans-serif;
  }

  .v-carousel__controls {
    opacity: 0;
  }
</style>

<script>
  export default {
    data() {
      return {

      }
    }
  };
</script>