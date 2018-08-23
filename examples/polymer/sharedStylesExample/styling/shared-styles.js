const styleElement = document.createElement('dom-module');

styleElement.innerHTML = 
`
    <template>
        <style>
            /* Shared styles */

            :host {
                --headline-color: rebeccapurple;
            }
            
            h3 {
                font-size: 18px;
            }
        </style>
    </template>
`;

styleElement.register('shared-styles');
