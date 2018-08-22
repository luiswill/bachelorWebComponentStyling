import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HeadlineElement extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host h3 {
                    color: red;
                }
            </style>


            <h3>Headline of a polymer element</h3>
        `;
    }
}

window.customElements.define('polymer-headline', HeadlineElement);