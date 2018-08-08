import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`
  <dom-module id="spiderweb-theme" theme-for="vaadin-chart">
    <template>
      <style include="vaadin-chart-default-theme">
        :host([theme~="spiderweb"]) .highcharts-xaxis .highcharts-axis-line {
          stroke-width: 0;
        }
        :host([theme~="spiderweb"]) .highcharts-xaxis-grid .highcharts-grid-line {
          stroke-width: 1px;
        }
      </style>
    </template>
  </dom-module>
`;
document.head.appendChild($_documentContainer.content);