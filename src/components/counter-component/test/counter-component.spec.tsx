import { newSpecPage } from '@stencil/core/testing';
import { CounterComponent } from '../counter-component';

describe('counter-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CounterComponent],
      html: `<counter-component></counter-component>`,
    });
    expect(page.root).toEqualHtml(`
      <counter-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </counter-component>
    `);
  });
});
