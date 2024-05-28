import { BeanRenderBase, Local } from '@cabloy/front';
import type { ControllerPageCounter } from './controller.js';
import { ScopeModule } from '../../resource/this.js';

export interface RenderPageCounter extends ControllerPageCounter {}

@Local()
export class RenderPageCounter extends BeanRenderBase<ScopeModule> {
  render() {
    return <div></div>;
  }
}
