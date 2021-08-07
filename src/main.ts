import App from "./App.svelte";
import "@ionic/core/css/ionic.bundle.css";
import Modal from "@components/Modal.wc.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
export { Modal };
