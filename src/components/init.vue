<template>
  <div>
    <div v-bind:style="previewStyle">
      <el-carousel :height="(screenHeght-80) +'px'">
        <el-carousel-item
          v-for="item in list"
          v-bind:style="previewStyle"
          :key="item"
        >
          <img
            :src="item"
            v-bind:style="previewStyle"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div
      class="flex flex-justify-center"
      style="background:blue"
    >
      <el-button
        class="f-button"
        round
        type="primary"
        @click="goStart()"
      >
        立即制作
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeght: document.documentElement.clientHeight,
      previewStyle: {
        height: (document.documentElement.clientHeight - 80) + 'px',
        width: document.documentElement.clientWidth + "px"
      },
      list: ['http://circlezine.com/wp-content/uploads/2017/12/201708091513528134.jpg',
        'https://images.uiiiuiii.com/wp-content/uploads/2019/01/meiia-0112-3d-1.jpg',
        'http://pic1.16xx8.com/allimg/180722/16xx8-79843-0.jpg']
    }
  },
  methods: {
    goStart () {
      this.$router.push({
        name: 'start',
        params: {
          url: this.list[2]
        }
      })
    }
  },
  components: {

  }
}
</script>

<style>
.f-button {
  position: absolute;
  width: 70%;
  bottom: 0;
  margin-bottom: 16px;
}
</style>
