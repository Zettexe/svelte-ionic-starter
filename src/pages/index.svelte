<script>
  import { IonicShowModal } from "@utils/IonicHelper";
  import Modal from "@components/Modal.wc.svelte"

  const showModal = () => {
    IonicShowModal("modal-extra", Modal, {
      firstName: "Douglas",
      lastName: "Adams",
      middleInitial: "N",
    }).then(console.log);
  };
</script>

<div class="main">
  <ion-button on:click={showModal}>Open</ion-button>
</div>

<style>
  .main {
    text-align: center;
    margin: 50px auto;
  }
</style>
