import { BeanRenderBase, Local } from '@cabloy/front';
import type { MotherPageCounter } from './mother.js';

export interface RenderPageCounter extends MotherPageCounter {}

@Local()
export class RenderPageCounter extends BeanRenderBase {
  render() {
    return (
      <div>
        <div>count(ref): {this.count}</div>
        <button onClick={() => this.inrement()}>Inrement</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}
