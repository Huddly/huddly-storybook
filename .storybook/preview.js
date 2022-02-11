import React from 'react';

import { GlobalStyles } from '../src/shared/global';

/*
 * Global decorator to apply the styles to all stories
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <Story />
        </>
    ),
];

/*
 * Read more about global parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};
