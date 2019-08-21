<template>
  <div>
    <div v-bind:style="previewStyle">
      <el-carousel
        :height="(screenHeght-80) +'px'"
        @change="change"
      >
        <el-carousel-item
          v-for="item in list"
          v-bind:style="previewStyle"
          :key="item.url"
        >
          <img
            :src="item.url"
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
        使用模板
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
      list: [
        {
          url: require('../assets/poster_bg/poster_bg_4.png'),
        },
        {
          url: require('../assets/poster_bg/poster_bg_2.png')
        },
        {
          url: require('../assets/poster_bg/poster_bg_3.png')
        },
        {
          url: require('../assets/poster_bg/poster_bg_1.png')
        }
      ],
      currentIndex: 0
    }
  },
  methods: {
    goStart () {
      this.$router.push({
        name: 'upload',
        params: {
          url: this.list[this.currentIndex].url
        }
      })
    },
    change (index) {
      this.currentIndex = index
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
