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
  props: ['works', 'currentWork', 'currentIndex']
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
      return this.currentWork.skills.split(', ');
    }
  }
}

new Vue({
  el: '#slider-component',
  template: '#slider-wrap',
  components: { pics, textContent },
  data: () => ({
    works: [],
    currentIndex: 0
  }),
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
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
    handleSlide(direction) {
      switch(direction) {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break;
      }
    },
    handlePreviewClick(previewId) {
      this.currentIndex = previewId - 1;
    }
  },
  async created() {
    let userId = 189;
    const data = await axios.get('https://webdev-api.loftschool.com/works/' + userId);
    this.works = this.makeArrImages(data);
  }
});
