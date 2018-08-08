import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`
  <dom-module id="speedometer-dual-theme" theme-for="vaadin-chart">
    <template>
      <style include="vaadin-chart-default-theme">
        :host([theme~="speedometer-dual"]) .highcharts-yaxis .highcharts-axis-line {
          stroke-width: 2;
        }
        :host([theme~="speedometer-dual"]) .kmh .highcharts-axis-line,
        :host([theme~="speedometer-dual"]) .kmh .highcharts-tick,
        :host([theme~="speedometer-dual"]) .kmh .highcharts-minor-tick {
          stroke: #339;
        }
        :host([theme~="speedometer-dual"]) .mph .highcharts-axis-line,
        :host([theme~="speedometer-dual"]) .mph .highcharts-tick,
        :host([theme~="speedometer-dual"]) .mph .highcharts-minor-tick {
          stroke: #933;
        }
        :host([theme~="speedometer-dual"]) .highcharts-grid-line,
        :host([theme~="speedometer-dual"]) .highcharts-minor-grid-line {
          stroke: none;
        }
        :host([theme~="speedometer-dual"]) .highcharts-pivot {
          fill: #000;
          stroke: #000;
        }
      </style>
    </template>
  </dom-module>
`;
document.head.appendChild($_documentContainer.content);