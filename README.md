# Huddly Component Library

> A React component library.

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://storybook-huddly.azurewebsites.net/)
[![Docker Image CI](https://github.com/Huddly/huddly-storybook/actions/workflows/docker-image.yml/badge.svg)](https://github.com/Huddly/huddly-storybook/actions/workflows/docker-image.yml)

## How to install the component library

```bash
npm install Huddly/huddly-storybook --save
```

Then import GlobalStyles from the library and wrap your app in it.
It should look something like this:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from '@huddly/component-library';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## How to use

Here are some examples of how to use the components in your app.\
You can find all the components and more examples in [Storybook](https://storybook-huddly.azurewebsites.net/).

### Button example:

```jsx
import React from 'react';
import { Button } from '@huddly/component-library';

const App = () => {
  return (
    <Button color='lavender' onClick={handleClick} size='48'>
      Click me
    </Button>
  );
};
```

### Form example:

```jsx
import React from 'react';
import { Form, InputWrapper, Label, Input, Button } from '@huddly/component-library';

const App = () => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper id='email' isRequired={true}>
        <Label>Email</Label>
        <Input type='email' />
      </InputWrapper>

      <InputWrapper id='password' isRequired={true}>
        <Label>Password</Label>
        <Input type='password' />
      </InputWrapper>

      <Button type='submit'>Submit</Button>
    </Form>
  );
};
```

## How to run Storybook locally

```bash
npm install
npm run storybook
```

## Looking for icons?

Check out our React [Icon Library](https://github.com/Huddly/frokost).
