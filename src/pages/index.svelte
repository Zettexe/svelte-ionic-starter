<script>
  import { IonicShowModal } from "@utils/IonicHelper";

  const showModal = () => {
    IonicShowModal("modal-extra", {
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

  img {
    max-width: 100%;
  }
</style>
