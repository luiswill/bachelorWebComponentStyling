const styleElement = document.createElement('dom-module');

styleElement.innerHTML = 
`
    <template>
        <style>
            /* Shared styles */

            :host {
                --headline-color: rebeccapurple;
            }
        </style>
    </template>
`;

styleElement.register('shared-styles');
