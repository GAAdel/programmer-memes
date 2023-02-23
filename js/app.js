const App = {
  data() {
    return {
      title: "Programmer memes",
      subTitle: "Make programmer memes great again!",
      memes: [
        {
          id: 1,
          title: "Developing",
          name: "joke-drake",
          tags: ["Frontend", "Backend"],
          imagePath: "pic1.jpg",
        },
        {
          id: 2,
          title: "JavaScript Programmer",
          name: "nazim",
          tags: ["Javascript", "Ruby on Rails"],
          imagePath: "pic2.jpg",
        },
        {
          id: 3,
          title: "Developing",
          name: "simpson",
          tags: ["Frontend", "Backend"],
          imagePath: "pic3.jpg",
        },
        {
          id: 4,
          title: "Php developer",
          name: "google",
          tags: ["Php"],
          imagePath: "pic4.jpg",
        },
        {
          id: 5,
          title: "Programmer",
          name: "cat",
          tags: ["coding"],
          imagePath: "pic5.jpg",
        },
        {
          id: 6,
          title: "UNIX",
          name: "pingvin",
          tags: ["linux"],
          imagePath: "pic6.jpg",
        },
      ],
    };
  },
};

const app = Vue.createApp(App);

app.mount("#app");
