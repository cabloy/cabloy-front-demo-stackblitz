import { BeanRenderBase, Local } from '@cabloy/front';
import type { MotherPageCounter2 } from './mother.js';

export interface RenderPageCounter2 extends MotherPageCounter2 {}

@Local()
export class RenderPageCounter2 extends BeanRenderBase {
  render() {
    return (
      <div>
        <div>count(ref): {this.$$counter.count}</div>
        <button onClick={() => this.$$counter.inrement()}>Inrement</button>
        <button onClick={() => this.$$counter.decrement()}>Decrement</button>
      </div>
    );
  }
}
