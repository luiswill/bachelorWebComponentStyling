import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class HeadlineElement extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                h3 {
                    color: var(--headline-color, red);
                }
            </style>


            <h3>Headline of a polymer element</h3>
        `;
    }
}

window.customElements.define('polymer-headline', HeadlineElement);