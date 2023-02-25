const App = {
  data() {
    return {
      title: "Programmer memes",
      subTitle: "Make programmer memes great again!",
      allMemes: [],
      currentUserMemes: [],
    };
  },
  async created() {
    await this.fetchMemes();
    this.generateMemes();
  },
  methods: {
    async fetchMemes() {
      response = await fetch("./db/db.json", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      data = await response.json();
      // console.log("data: ", data.memes);
      this.allMemes = data.memes;
    },
    generateMemes() {
      const chosenMemesId = new Set();
      const chosenMemes = new Set();
      const allMemesId = this.allMemes.map((item) => item.id);
      while (chosenMemesId.size !== 6) {
        let randomInteger = this.getRandomInt(0, this.allMemes.length - 1);
        if (!chosenMemesId.has(this.allMemes[randomInteger].id)) {
          chosenMemesId.add(this.allMemes[randomInteger].id);
          chosenMemes.add(this.allMemes[randomInteger]);
        }
      }
      const arrayChosenMemes = [...chosenMemes];
      // console.log("arrayChosenMemes: ", arrayChosenMemes);
      this.currentUserMemes = arrayChosenMemes;
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};

const app = Vue.createApp(App);

app.mount("#app");
