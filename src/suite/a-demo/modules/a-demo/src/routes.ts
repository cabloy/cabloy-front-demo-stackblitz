import Counter2 from './page/counter2/index.vue';
import Counter from './page/counter/index.vue';
import Component from './page/component/index.vue';
import State from './page/state/index.vue';
import { IModuleRoute } from 'cabloy-module-front-a-router';

export const routes: IModuleRoute[] = [
  { path: 'state', component: State },
  { path: 'component', component: Component },
  { path: 'counter', component: Counter },
  { path: 'counter2', component: Counter2 },
];
