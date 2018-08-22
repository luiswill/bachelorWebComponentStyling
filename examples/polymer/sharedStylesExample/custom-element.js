import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './styling/shared-styles.js';

/**
 * `custom-element`
 * A custom element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CustomElement extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }

        h3 {
          color: var(--headline-color, red);
        }
      </style>
      <h3>I am a headline from Polymer.</h3>
    `;
  }
}

window.customElements.define('custom-element', CustomElement);
