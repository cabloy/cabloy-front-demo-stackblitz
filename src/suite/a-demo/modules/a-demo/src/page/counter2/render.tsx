import { BeanRenderBase, Local } from '@cabloy/front';
import type { ControllerPageCounter2 } from './controller.js';
import { ScopeModule } from '../../resource/this.js';

export interface RenderPageCounter2 extends ControllerPageCounter2 {}

@Local()
export class RenderPageCounter2 extends BeanRenderBase<ScopeModule> {
  render() {
    return <div></div>;
  }
}
