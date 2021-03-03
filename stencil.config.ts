import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-example',
  testing: {
    collectCoverage: true,
    coverageDirectory: './reports/javascript-coverage/',
    testPathIgnorePatterns: ['cypress', 'dist'],
    timers: 'fake',
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
