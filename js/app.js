const App = {
  data() {
    return {
      title: "Programmer memes",
      subTitle: "Welcome to the Club Buddy",
      memes: [
        {
          id: 1,
          title: "Developing",
          tags: ["Frontend", "Backend"],
          imagePath: "pic1.jpg",
        },
        {
          id: 2,
          title: "JavaScript Programmer",
          tags: ["Javascript", "Ruby on Rails"],
          imagePath: "pic2.jpg",
        },
        {
          id: 3,
          title: "Developing",
          tags: ["Frontend", "Backend"],
          imagePath: "pic3.jpg",
        },
        {
          id: 4,
          title: "Php developer",
          tags: ["Php"],
          imagePath: "pic4.jpg",
        },
        {
          id: 5,
          title: "Programmer",
          tags: ["coding"],
          imagePath: "pic5.jpg",
        },
        {
          id: 6,
          title: "UNIX",
          tags: ["linux"],
          imagePath: "pic6.jpg",
        },
      ],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      console.log("doubleCountComputed");
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
    },
  },
};

const app = Vue.createApp(App);

app.mount("#app");
