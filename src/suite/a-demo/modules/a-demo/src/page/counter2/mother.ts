import { BeanMotherPageBase, Local, Use } from '@cabloy/front';
import { Counter } from './counter.js';

@Local()
export class MotherPageCounter2 extends BeanMotherPageBase {
  @Use()
  $$counter: Counter;
}
