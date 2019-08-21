<template>
  <div>
    <div class="flex flex-justify-center">
      <div class="head-bg flex flex-justify-center flex-align-center">
        <i class="icon el-icon-s-custom" />
      </div>
    </div>

    <div class="upload-bg">
      <i class="el-icon-plus icon" />
    </div>
    <div class="flex flex-justify-center">
      <el-button
        type="primary"
        round
        class="f-button"
      >
        上传素材
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>head-bg

<style>
.head-bg {
  width: 72px;
  height: 72px;
  opacity: 0.5;
  background: gray;
  border-radius: 36px;
  margin-top: 72px;
}
.icon {
  color: white;
}
</style>
