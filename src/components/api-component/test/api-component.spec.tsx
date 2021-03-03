import { newSpecPage } from '@stencil/core/testing';
import { ApiComponent } from '../api-component';

describe('api-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApiComponent],
      html: `<api-component></api-component>`,
    });
    expect(page.root).toEqualHtml(`
      <api-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </api-component>
    `);
  });
});
