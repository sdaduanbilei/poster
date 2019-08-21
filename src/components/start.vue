<template>
  <div>
    <div
      class="content"
      ref="capture"
      v-loading="loading"
      element-loading-text="拼命制作中"
      v-bind:style="backgroundStyle"
    >

      <div class="flex flex-justify-center">
        <VueDragResize
          :isActive="isActive"
          :w="96"
          :h="96"
          :x="width /2 - 48"
          :y="100"
          v-on:resizing="resize"
          v-on:dragging="resize"
          class="flex flex-justify-center flex-align-center"
        >
          <img
            class="header"
            :src="coustomHead"
            v-bind:style="headerStyle"
          ></VueDragResize>
      </div>

      <el-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="top-start"
      >
        <VueDragResize
          :isActive="isActive"
          :w="200"
          :h="200"
          :x="width /2 - 100"
          :y="300"
          v-on:resizing="resizeTitle"
          v-on:dragging="resizeTitle"
          class="flex flex-justify-center"
        >
          <div
            class="flex flex-justify-center flex-align-center title"
            v-bind:style="titleStyle"
          >
            <label>
              {{title}}
            </label>
          </div>
        </VueDragResize>
      </el-tooltip>
    </div>

    <div class="flex flex-justify-center full-width">
      <el-button
        class="f-button"
        type="primary"
        round
        @click="generatorImage"
      >
        {{buttonTips}}
      </el-button>
    </div>
    <el-dialog
      :visible.sync="isShow"
      :width="dialogWidth"
      title="长按图片即可保存"
    >
      <div ref="addImage">

        <div class="full-width flex flex-justify-center">
          <img
            class="preview"
            v-bind:style="previewStyle"
            :src="captureImage"
          />
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import Canvas2Image from 'canvas2image';
import VueDragResize from 'vue-drag-resize';

export default {
  data () {
    return {
      isShow: false,
      isActive: true,
      captureImage: '',
      captureCanvas: '',
      title: '',
      loading: false,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      backgroundStyle: {
        height: document.documentElement.clientHeight + 'px',
        width: document.documentElement.clientWidth + "px",
      },
      previewStyle: {
        height: (document.documentElement.clientHeight * 0.6) + 'px',
        width: (document.documentElement.clientWidth * 0.6) + "px"
      },
      headerStyle: {
        height: 96 + "px",
        width: 96 + "px"
      },
      titleStyle: {
        width: 200 + "px",
        height: 200 + "px"
      },
      dialogWidth: (document.documentElement.clientWidth * 0.7) + 'px',
      titles: ['承认自己的伟大，就是认同自己的愚疑。', '毁灭人只要一句话，培植一个人却要千句话，请你多口下留情。',
        '偶尔跟老板交心是必要的，但要有的放矢。', '做事做得好，干活干到老。',
        '上司是趋利动物，关键时候一定会出卖你。', '忍耐力较诸脑力，尤胜一筹。'],
      buttonTips: '效果预览',
      coustomHead: ''
    }
  },

  mounted () {
    var index = Math.floor(Math.random() * 6)
    // this.title = this.titles[index]
    console.log(this.$route.params)
    this.coustomHead = this.$route.params.url
    this.title = this.$route.params.label
    this.backgroundStyle = {
      height: document.documentElement.clientHeight + 'px',
      width: document.documentElement.clientWidth + "px",
      background: 'url(' + this.$route.params.background + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundNoRepeat: 'no-repeat'
    }
    this.$toast.top('点击拖动位置和修改大小');
  },

  methods: {
    showDialog () {
      this.isShow = true;
    },
    generatorImage () {
      if (this.isActive) {
        this.buttonTips = "立即制作"
        this.isActive = false
        return
      }
      this.isActive = false
      this.loading = true
      var canvas = document.createElement("canvas")
      var scale = 2
      canvas.width = this.width * scale
      canvas.height = this.height * scale
      canvas.getContext("2d").scale(scale, scale)
      var opts = {
        scale: scale,
        canvas: canvas,
        logging: true,
        width: this.width,
        height: this.height,
        useCORS: true
      }
      html2canvas(this.$refs.capture, opts).then(canvas => {
        this.convertCanvasToImage(canvas)
      })
    },
    convertCanvasToImage (canvas) {
      this.loading = false
      this.isShow = true
      this.captureCanvas = canvas
      this.captureImage = canvas.toDataURL('image/png');
    },
    resize (newRect) {
      this.buttonTips = "效果预览"
      this.isActive = true
      var min = Math.min(newRect.width, newRect.height)
      this.headerStyle = {
        height: min + "px",
        width: min + "px"
      }
    },
    resizeTitle (newRect) {
      this.buttonTips = "效果预览"
      this.isActive = true
      var min = Math.min(newRect.width, newRect.height) / 7.12
      this.titleStyle = {
        width: newRect.width + "px",
        height: newRect.height + "px",
        fontSize: min + "px"
      }
    }
  },
  components: {
    html2canvas,
    Canvas2Image,
    VueDragResize
  }
}
</script>

<style lang="scss">
.content {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/bg.jpg");
}
.header {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
}
.title {
  color: white;
  font-size: 28px;
  width: 200px;
  height: 200px;
}
.preview {
  object-fit: cover;
}
</style>

