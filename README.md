
# Roots Design System

Roots Design System built with React.

## Overview

This project contains shareable styles of components, UI Components using React and Storybook's presentation and build configs need to stay here.

## Requirements

Install peerDependencies in your project

```
react: ^17.0.2 or higher
react-dom: ^17.0.2 or higher
react-icons: ^4.3.1 or higher
styled-components: ^5.3.3 or higher
```

## Commands

#### Install
```sh
yarn install
```
#### Run storybook library

```sh
yarn storybook
```

## Running the local Project

- To test on a project that is consuming our package we can run our project with
``` sh
yarn build 
or 
yarn build:w
```

- To be exposed as a local package
``` sh
npm link
```

- In the project that consumes this package we will run the command
``` sh
npm link @roots/design-system
```


## 📝 License

Copyright ©
