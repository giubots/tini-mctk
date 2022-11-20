<template>
  <div id="app">
    <image-editor :active="active" :highlighted="highlighted"></image-editor>
    <tini-mctk
      :training="['/training-en.json', '/training-it.json']"
      :utterances="['/utterances-en.json', '/utterances-it.json']"
      configurationTable="/configuration-table.csv"
      :active="active"
      v-model="highlighted"
      welcome-message="Hello, how can I help you? Write me what you want to do with your image"
      :colors="colors"
    ></tini-mctk>
  </div>
</template>

<script>
import ImageEditor from "./components/ImageEditor";
import TiniMctk from "./components/TiniMctk";

const blue = "#04D3FA";
const purple = "#A459EE";

export default {
  name: "App",
  components: {
    "image-editor": ImageEditor,
    "tini-mctk": TiniMctk,
  },
  data() {
    return {
      active: [
        "crop",
        "flip",
        "rotate",
        "draw",
        "shape",
        "icon",
        "text",
        "mask",
        "filter",
      ],
      highlighted: [
        {
          name: "filter",
          highlighted: false,
          parameters: [{ name: "sharpen", highlighted: false }],
        },
      ],
      colors: {
        header: {
          bg: blue,
          text: "#ffffff",
        },
        launcher: {
          bg: blue,
        },
        messageList: {
          bg: "#ffffff",
        },
        sentMessage: {
          bg: purple,
          text: "#ffffff",
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222",
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867",
        },
        userList: {
          bg: "#fff",
          text: "#212121",
        },
      },
    };
  },

  methods: {
    pac() {
      this.$set(this.highlighted[0].parameters[0], "highlighted", true);
    },
    mac() {
      this.$set(this.highlighted[0], "highlighted", true);
    },
  },
};
</script>

<style>
body {
  margin: 0 !important;
}
#app {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
