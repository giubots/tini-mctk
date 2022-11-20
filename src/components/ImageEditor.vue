<template>
  <tui-image-editor :include-ui="true" :options="options"></tui-image-editor>
</template>

<script>
import "tui-color-picker/dist/tui-color-picker.css";
import "tui-image-editor/dist/tui-image-editor.css";
import { ImageEditor } from "@toast-ui/vue-image-editor";

export default {
  components: {
    "tui-image-editor": ImageEditor,
  },
  props: {
    // Array of active modules
    active: {
      type: Array,
      required: true,
    },
    // Array of highlighted modules and parameters as provided by the tool
    highlighted: {
      type: Array,
      required: true,
    },
  },
  data() {
    const blue = "#04D3FA";
    // const purple = "#A459EE"

    return {
      options: {
        includeUI: {
          menu: this.active,
          uiSize: {
            width: "100%",
            height: "100vh",
          },
          menuBarPosition: "left",
          theme: {
            "common.bi.image": "",
            "common.bisize.width": "0",
            "common.bisize.height": "0",
            "common.backgroundImage": "none",
            "common.backgroundColor": "#ffffff",
            "common.border": "0px",

            // header
            "header.backgroundImage": "none",
            "header.backgroundColor": "#fff",
            "header.border": "0px",

            // load button
            "loadButton.backgroundColor": "#fff",
            "loadButton.border": "1px solid #ddd",
            "loadButton.color": "#222",
            "loadButton.fontFamily": "NotoSans, sans-serif",
            "loadButton.fontSize": "12px",

            // download button
            "downloadButton.backgroundColor": blue,
            "downloadButton.border": "none", // '1px solid #3ba26e',
            "downloadButton.color": "#fff",
            "downloadButton.fontFamily": "NotoSans, sans-serif",
            "downloadButton.fontSize": "12px",

            // icons default
            "menu.normalIcon.color": "#8a8a8a",
            "menu.activeIcon.color": "#555555",
            "menu.disabledIcon.color": "#434343",
            "menu.hoverIcon.color": "#e9e9e9",
            "submenu.normalIcon.color": "#8a8a8a",
            "submenu.activeIcon.color": "#e9e9e9",

            "menu.iconSize.width": "24px",
            "menu.iconSize.height": "24px",
            "submenu.iconSize.width": "32px",
            "submenu.iconSize.height": "32px",

            // submenu primary color
            "submenu.backgroundColor": "#ffffff",
            "submenu.partition.color": "#858585",

            // submenu labels
            "submenu.normalLabel.color": "#000",
            "submenu.normalLabel.fontWeight": "bold",
            "submenu.activeLabel.color": "#000",
            "submenu.activeLabel.fontWeight": "bold",

            // checkbox style
            "checkbox.border": "1px solid #ccc",
            "checkbox.backgroundColor": "#fff",

            // rango style
            "range.pointer.color": blue,
            "range.bar.color": "#666",
            "range.subbar.color": "#d1d1d1",

            "range.disabledPointer.color": "#ddd",
            "range.disabledBar.color": "#ddd",
            "range.disabledSubbar.color": "#ddd",

            "range.value.color": "#fff",
            "range.value.fontWeight": "lighter",
            "range.value.fontSize": "11px",
            "range.value.border": "1px solid #353535",
            "range.value.backgroundColor": "#151515",
            "range.title.color": "#fff",
            "range.title.fontWeight": "lighter",

            // colorpicker style
            "colorpicker.button.border": "1px solid #1e1e1e",
            "colorpicker.title.color": "#fff",
          },
        },
        cssMaxWidth: 700,
        cssMaxHeight: 500,
        usageStatistics: false,
      },
    };
  },
  methods: {
    setClassModule(name, add) {
      this.$el
        .querySelector(`.tie-btn-${name}`)
        .classList.toggle("highlighted", add);
    },
    setParamModule(name, add) {
      if (["pixelate", "brightness"].includes(name)) {
        this.$el
          .querySelector(`.tie-${name}`)
          .parentNode.parentNode.parentNode.classList.toggle(
            "highlighted",
            add
          );
      }
      this.$el
        .querySelector(`.tie-${name}`)
        .parentNode.classList.toggle("highlighted", add);
    },
  },
  watch: {
    highlighted: {
      deep: true,
      handler(newValue) {
        for (const { name, highlighted, parameters } of newValue) {
          this.setClassModule(name, highlighted);
          for (const {
            name: paramName,
            highlighted: paramHighlighted,
          } of parameters) {
            this.setParamModule(paramName, paramHighlighted);
          }
        }
      },
    },
  },
  mounted() {
    // Fix image editor interface
    const h = document.createElement("h2");
    h.appendChild(document.createTextNode("Image Editor with TINI"));
    h.classList.add("title");
    const header = this.$el.querySelector(".tui-image-editor-header-logo ");
    header.replaceChildren(h); //, header.firstElementChild);
    header.classList.add("same-line");

    // Set help menu to top
    const help = this.$el.querySelector(".tui-image-editor-help-menu");
    help.classList.replace("right", "bottom");
  },
};
</script>

<style>
.highlighted {
  background-color: #a459ee !important;
}

.title {
  margin: -7px 7px 0px 0px;
  /* color: #A459EE; */
}

.same-line {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
</style>
