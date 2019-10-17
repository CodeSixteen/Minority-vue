<template>
    <div>
        <div ref="editor" style="text-align:left" class="wangEditor-editor-container"></div>
        <button v-on:click="getContent">查看内容</button>
    </div>
</template>

<script>
    import E from 'wangeditor'

    export default {
      name: 'wangEditor',
      data () {
        return {
          editorContent: ''
        }
      },
      methods: {
        getContent: function () {
            alert(this.editorContent)
        }
      },
      mounted() {
        var editor = new E(this.$refs.editor)
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.customConfig.uploadImgShowBase64 = true;
        editor.customConfig.showLinkImg = false
        editor.create()
      }
    }
</script>

<style lang="scss" scoped>
.wangEditor-editor-container{
  img{
    width:auto;
    max-width: 750px;
  }
}
</style>
