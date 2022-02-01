# Huddly Component Library

A React component library.

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://storybook-huddly.azurewebsites.net/)

[![Docker Image CI](https://github.com/Huddly/huddly-storybook/actions/workflows/docker-image.yml/badge.svg)](https://github.com/Huddly/huddly-storybook/actions/workflows/docker-image.yml)

## Development

### Setup

1. `git clone git@github.com:Huddly/huddly-storybook.git`
2. `cd huddly-storybook/huddly-storybook`
3. `npm install`

### Add a new component

If you have the [Huddly CLI](https://github.com/Huddly/huddly-storybook-cli) installed, you can use it to add a new component with the `storybook component` command.

Example:

```bash
$ storybook component product-card --props title:string content:string is-large:boolean
```

The CLI will generate a folder containing the component and a story file.
