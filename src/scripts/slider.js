import Vue from 'vue';
import axios from 'axios';

const preview = {
  template: '#slider-preview',
  props: ['works', 'currentWork'],
}

const controls = {
  template: '#slider-controls '
}

const pics = {
  template: '#slider-left',
  components: { preview, controls },
  props: ['works', 'currentWork', 'currentIndex', 'sliderImageClass'],
}

const tags = {
  template: '#slider-tags',
  props: ['tags']
}

const textContent = {
  template: '#slider-right',
  components: { tags },
  props: ['currentWork'],
  
  computed: {
    tagsArr() {
      return this.currentWork.techs.split(', ');
    },
    
  }
}

new Vue({
  el: '#slider-component',
  template: '#slider-wrap',
  components: { pics, textContent },
  data: () => ({
    works: [],
    currentIndex: 0,
    direction: 'next'
  }),
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    },
    sliderImageClass() {
      let imgClass = {}
      imgClass['slider-img--' + this.direction] = true
      return imgClass
    }
  },
  watch: {
    currentIndex(value) {
      const worksNum = this.works.length - 1;
      if (value < 0) this.currentIndex = worksNum;
      if (value > worksNum) this.currentIndex = 0; 
    }
  },
  methods: {
    makeArrImages(data) {
      return data.map(item => {
        const requiredImg = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = requiredImg;
        return item;
      });
    },
    enterItem(el) {
      console.log(el);
      
    },
    handleSlide(direction) {
      switch(direction) {
        case 'next':
          this.currentIndex++;
          this.direction = 'next'
          break;
        case 'prev':
          this.currentIndex--;
          this.direction = 'prev'
          break;
      }
    },
    handlePreviewClick(previewId) {
      this.currentIndex = previewId;
    }
  },
  async created() {
    let userId = 189;
    const { data } = await axios.get('https://webdev-api.loftschool.com/works/' + userId);
    this.works = this.makeArrImages(data);
  }
});
