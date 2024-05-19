import { BeanMotherPageBase, Local } from '@cabloy/front';

@Local()
export class MotherPageCounter extends BeanMotherPageBase {
  count: number = 0;

  inrement() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
