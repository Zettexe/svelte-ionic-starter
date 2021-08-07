<svelte:options tag="modal-extra" />

<script>
  let overlayElement = document.querySelector("ion-modal");
  console.log(overlayElement.componentProps);
  const closeOverlay = () => {
    overlayElement.dismiss({ data: Date.now() });
  };
</script>

<svelte:head>
  <title>Ionic Companion - Modal Extra</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-title>Modal Content</ion-title>
    <ion-buttons slot="end">
      <ion-button on:click={closeOverlay}>Close</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen>
  <ion-list>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/1?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Gollum</h2>
        <p>Sneaky little hobbitses!</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/2?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Frodo</h2>
        <p>Go back, Sam! I'm going to Mordor alone!</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <ion-img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
      </ion-avatar>
      <ion-label>
        <h2>Samwise</h2>
        <p>What we need is a few good taters.</p>
      </ion-label>
    </ion-item>
  </ion-list>
</ion-content>
