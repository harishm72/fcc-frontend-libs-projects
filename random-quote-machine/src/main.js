import App from "./App.svelte";

import "./style.css";

const app = new App({
  target: document.body,
  props: {
    quote: {
      text: "",
      author: "",
    },
  },
});

export default app;
