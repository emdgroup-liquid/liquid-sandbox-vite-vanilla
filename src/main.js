import "./style.css";

import { defineCustomElements } from "@emdgroup-liquid/liquid/dist/loader";
defineCustomElements();

import "@emdgroup-liquid/liquid/dist/css/liquid.global.css";

// if-clause only required in server-side rendering context
if (typeof window !== "undefined") {
  // @ts-ignore: Property '__LD_ASSET_PATH__' does not exist on type 'Window & typeof globalThis'.ts(2339)
  window.__LD_ASSET_PATH__ = "/liquid/";
}

const appElement = document.querySelector("#app");
if (appElement) {
  appElement.innerHTML = `
  <ld-bg-cells class="background"></ld-bg-cells>
  <div class="container">
    <ld-typo
      variant="b1"
      style="color: var(--ld-col-vy); margin-bottom: 2rem"
    >
      Liquid Sandbox App
    </ld-typo>
    <ld-card class="card">
      <ld-typo variant="h1" style="margin-bottom: 1rem">
        Welcome to
        <br />
        Liquid Oxygen 👋
      </ld-typo>
      <ld-typo style="margin-bottom: 1rem">
        This sandbox demonstrates <strong>Liquid Oxygen</strong> used in a very simple vite + typescript application. It uses plain <strong>HTML, CSS and JavaScript</strong>, without any framework.
      </ld-typo>
      <ld-typo style="margin-bottom: 3rem">
        This is just one of many ways to use Liquid Oxygen. Click the button and find out more in the <strong>Liquid Oxygen documentation</strong>.
      </ld-typo>
      <ld-button
        id="cta-learn-more"
        mode="highlight"
        size="lg"
        href="https://liquid.merck.design"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ld-icon name="bulb"></ld-icon>
        Learn more
      </ld-button>
    </ld-card>
  </div>
  `;
}

document.querySelector("#cta-learn-more")?.addEventListener("click", () => {
  console.log("😍 Thank you!");
});
