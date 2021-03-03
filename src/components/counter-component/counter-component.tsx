import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {
  @Prop() amount: number;
  render() {
    return (
      <Host>
        <div data-testid="counter">how many images: {this.amount}</div>
      </Host>
    );
  }
}
