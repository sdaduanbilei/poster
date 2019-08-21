<template>
  <div class="wrapper">
    <div class="content">
      <ul style="margin-bottom:80px;">
        <li>
          <h3 class="title-tips padding">
            背景样式
          </h3>
          <div class="flex flex-justify-center">
            <img
              :src="imgBg"
              class="selected-bg"
            />
          </div>

        </li>

        <li>
          <h3 class="title-tips padding">
            上传头像
          </h3>
          <div class="flex flex-justify-center">
            <div class="head-bg  flex-justify-center flex-align-center">
              <div class="flex flex-justify-center margin-bottom">
                <img
                  v-if="imageUrl"
                  :src="imageUrl"
                  class="header margin-bottom"
                />
                <div
                  v-else
                  class="img-content margin-bottom"
                >

                </div>
              </div>
              <div class="file-upload-form flex flex-justify-center margin-bottom">
                <a
                  href="javascript:;"
                  class="file"
                >选择文件
                  <input
                    type="file"
                    name=""
                    id=""
                    @change="previewImage"
                    accept="image/*"
                  >
                </a>
              </div>

            </div>

          </div>
        </li>

        <li>
          <h3 class="title-tips padding">
            填写标语
          </h3>
          <div class="flex flex-justify-center">
            <el-input
              class="margin"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
            >
            </el-input>
          </div>
        </li>
      </ul>
    </div>

    <div class="flex flex-justify-center">
      <el-button
        type="primary"
        class="f-button"
        round
        @click="goEdit"
      >
        开始编辑
      </el-button>
    </div>

  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  data () {
    return {
      imgBg: '',
      textarea: '',
      imageUrl: ''
    }
  },
  created () {
    this.imgBg = this.$route.params.url
  },
  methods: {
    goEdit () {
      this.$router.push({
        name: 'start',
        params: {
          url: this.imageUrl,
          label: this.textarea,
          background: this.imgBg
        }
      })
    },
    previewImage (event) {
      var input = event.target;
      console.log(event)
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
  },
  components: {

  }
}
</script>

<style>
.head-bg {
  width: 158px;
  height: 158px;
  opacity: 0.5;
  margin-top: 16px;
  margin-bottom: 16px;
}
.header {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
}
.selected-bg {
  height: 250px;
  object-fit: contain;
}
.title-tips {
  color: white;
  width: 94%;
  font-size: 16px;
  background: #409eff;
}
.icon {
  color: white;
}
.wrapper {
  position: relative;
  min-height: 100%;
  box-sizing: border-box;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 70%;
}

.img-content {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: gray;
}
.file {
  position: relative;
  display: inline-block;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1e88c7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
</style>
