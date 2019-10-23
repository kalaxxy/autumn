import Vue from 'vue';

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
  created() {
    const data = require('../data/skills.json');
    this.skills = data;
  }
});