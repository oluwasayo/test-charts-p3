import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`
  <dom-module id="speedometer-theme" theme-for="vaadin-chart">
    <template>
      <style include="vaadin-chart-default-theme">
        :host([theme~="speedometer"]) .highcharts-plot-band.band-0 {
          stroke: #55BF3B;
          fill: #55BF3B;
        }
        :host([theme~="speedometer"]) .highcharts-plot-band.band-1 {
          stroke: #DDDF0D;
          fill: #DDDF0D;
        }
        :host([theme~="speedometer"]) .highcharts-plot-band.band-2 {
          stroke: #DF5353;
          fill: #DF5353;
        }
        :host([theme~="speedometer"]) .highcharts-plot-band {
          fill-opacity: 1;
        }
        :host([theme~="speedometer"]) .highcharts-tick {
          stroke: #666;
          stroke-width: 2;
        }
        :host([theme~="speedometer"]) .highcharts-minor-tick {
          stroke: #666;
          stroke-width: 1;
        }
        :host([theme~="speedometer"]) .highcharts-grid-line,
        :host([theme~="speedometer"]) .highcharts-minor-grid-line {
          stroke: none;
        }
      </style>
    </template>
  </dom-module>
`;
document.head.appendChild($_documentContainer.content);