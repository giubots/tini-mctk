<template>
  <beautiful-chat
    :participants="participants"
    :onMessageWasSent="onMessageWasSent"
    :messageList="messageList"
    :isOpen="isChatOpen"
    :close="closeChat"
    :open="openChat"
    :showEmoji="false"
    :showFile="false"
    :showEdition="false"
    :showDeletion="false"
    :showLauncher="true"
    :showCloseButton="true"
    :colors="colors"
    :alwaysScrollToBottom="true"
    :disableUserListToggle="true"
    :messageStyling="false"
  >
    <template v-slot:header>
      <h2>{{ title }}</h2>
    </template>
  </beautiful-chat>
</template>

<script>
import { parseKb, getJson } from "@/utils/configuration";
import { getResponse } from "@/utils/core";
import { setupNLP, getIntent } from "@/utils/nlp";

const defaultIconURL =
  "https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_1280.png";

export default {
  name: "TiniMctk",

  props: {
    // Array of trining files' URLs
    training: { type: Array, required: true },
    // URL of configuration table file
    configurationTable: { type: String, required: true },
    // Array of utterance files' URLs
    utterances: { type: Array, required: true },
    // The highlighted modules and parameters
    value: { type: Array, required: true },
    // An array of the active modules
    active: { type: Array, required: true },

    // Callback that takes a sentence and returns a promise with the intent and language
    nlpCallback: { type: Function, required: false, default: undefined },
    // The title of the chat panel
    title: { type: String, required: false, default: "TINI" },
    // The colors of the chat panel
    colors: { type: Object, required: false, default: undefined },
    // The name of the bot
    botName: { type: String, required: false, default: "Bot" },
    // The name of the user
    userName: { type: String, required: false, default: "You" },
    // The avatar URL of the bot
    botAvatar: { type: String, required: false, default: defaultIconURL },
    // Initial welcome message
    welcomeMessage: { type: String, required: false, default: "Hi!" },
    // Whether the chat panel is initially open
    open: { type: Boolean, required: false, default: false },
  },

  data() {
    return {
      participants: [
        { id: "bot", name: this.botName, imageUrl: this.botAvatar },
        { id: "user", name: this.userName },
      ],
      messageList: [
        { type: "text", author: "bot", data: { text: this.welcomeMessage } },
      ],
      kbData: null,
      uttData: null,
      isChatOpen: this.open,
      intentCallback: this.nlpCallback,
    };
  },

  computed: {
    highlighted() {
      return this.value;
    },
  },

  methods: {
    async onMessageWasSent(message) {
      this.messageList = [...this.messageList, message];
      const response = getResponse(
        await this.intentCallback(message.data.text),
        this.kbData,
        this.uttData
      );
      this.updateModules(response.highlighted);
      this.messageList = [
        ...this.messageList,
        { author: "bot", type: "text", data: { text: response.answer } },
      ];
    },
    openChat() {
      this.isChatOpen = true;
    },
    closeChat() {
      this.isChatOpen = false;
    },
    updateModules(toHighlight) {
      this.$emit("input", toHighlight);
    },
  },

  async mounted() {
    if (this.intentCallback === undefined) {
      const corpora = await Promise.all(
        this.training.map((url) => getJson(url))
      );
      const nlp = await setupNLP(corpora);
      this.intentCallback = (intent) => getIntent(intent, nlp);
    }

    this.kbData = await parseKb(this.configurationTable, this.active);
    
    this.uttData = {}
    for (const url of this.utterances) {
      const data = await getJson(url);
      this.uttData[data.locale.split("-")[0]] = data.data;
    }

  },
};
</script>
