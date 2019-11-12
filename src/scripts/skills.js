import Vue from 'vue';
import $axios from "axios";

const skill = {
  template:'#skill',
  props: ['skillName', 'skillItem'],
  mounted() {
    const circle = this.$refs['colored-circle'];
    const dashArray = parseInt(
      getComputedStyle(circle).getPropertyValue('stroke-dasharray')
    );
    const percent = (dashArray / 100) * (100 - this.skillItem);

    circle.style.strokeDashoffset = percent;
  }
};

const skillsBlock = {
  template: '#skills-block',
  components: { skill },
  props: ['skill']
};

new Vue({
  el: '#skills-component',
  template: '#skills-list',
  data: () => ({
    skills: []
  }),
  components: { skillsBlock },
  async created() {
    let userId = 189;
    const data = await $axios.get('https://webdev-api.loftschool.com/skills/' + userId);
    this.skills = data;
  }
});