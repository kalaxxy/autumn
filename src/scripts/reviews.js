import Vue from 'vue';
import axios from 'axios';

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

const reviewItem = {
  template: '#review-item',
  props: ['item'],
  components: {
    swiperSlide
  }
}

new Vue({
  el: '#reviews-component',
  template: '#reviews-list',
  components: {
    reviewItem,
    swiper
  },
  data: {
    reviews: [],
    swiperOption: {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: {
        nextEl: '.reviews__arrow--next',
        prevEl: '.reviews__arrow--prev',
        disabledClass: 'reviews__arrow--disabled',
      },
      breakpoints: {  
        480: {       
          slidesPerView: 1,  
        },
      } 
    }  
  },
  methods: {
    addImagePaths(reviews) {
      return reviews.map(el => {
        let photo = `https://webdev-api.loftschool.com/${el.photo}`;
        el.photo = photo
        return el
      })
    }
  },
  async created() {
    let userId = 189;
    const { data } = await axios.get('https://webdev-api.loftschool.com/reviews/' + userId);
    this.reviews = this.addImagePaths(data);
  }
})