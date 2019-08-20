<template>
  <div>
    <div
      class="content"
      ref="capture"
    >
      <div class="flex flex-justify-center">
        <img
          class="header"
          src="../assets/default.jpg"
        >
      </div>

      <div class="flex flex-justify-center title">
        <label>
          心灵毒鸡汤
        </label>
      </div>
    </div>

    <div class="footer flex flex-justify-center full-width">
      <el-button
        type="primary"
        round
        style="width:80%;"
        @click="generatorImage"
      >
        立即制作
      </el-button>
    </div>

    <el-dialog
      :visible.sync="isShow"
      width="250px"
      title="长按图片即可保存"
    >
      <div ref="addImage">

        <div class="full-width flex flex-justify-center">
          <img
            class="preview"
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

export default {
  data () {
    return {
      isShow: false,
      captureImage: '',
      captureCanvas: '',
      width: 375,
      height: 812
    }
  },

  methods: {
    showDialog () {
      this.isShow = true;
    },
    generatorImage () {
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
      this.isShow = true
      this.captureCanvas = canvas
      this.captureImage = canvas.toDataURL('image/png');
    }
  },
  components: {
    html2canvas,
    Canvas2Image
  }
}
</script>

<style lang="scss">
.content {
  height: 812px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/bg.jpg");
}
.header {
  width: 96px;
  height: 96px;
  border-radius: 48px;
  object-fit: cover;
  margin-top: 42px;
}
.title {
  color: white;
  font-size: 28px;
  margin-top: 156px;
}
.footer {
  position: absolute;
  bottom: 0;
  padding-bottom: 32px;
}
.preview {
  width: 225px;
  height: 487.2px;
  object-fit: cover;
}
</style>

