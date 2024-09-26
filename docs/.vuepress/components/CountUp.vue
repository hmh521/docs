<template>
  <div>
    <ClientOnly>
      <slot name="before" />
      <span ref="countUp"></span>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  name: "CountUp",
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimalPlaces: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      counter: null
    }
  },
  methods: {
    init() {
      import("countup.js").then(module => {
        this.$nextTick(() => {
          //构造counter对象：目标元素，结束数字，其他配置项
          this.counter = new module.CountUp(this.$refs.countUp,this.endVal,{
            //起始数字
            startVal: this.startVal,
            //数字分割符
            decimalPlaces: this.decimalPlaces,
            //动画时长
            duration: this.duration
          });

          //启动
          setTimeout(() => {
            this.counter.start();
          }, this.delay);
        })
      })
    },
    //销毁
    beforeDestroy() {
      this.counter.reset();
      this.counter = null;
    },
  }
}
</script>

