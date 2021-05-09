# ReactJS, Webpack 5 starter

# Develop
```
$ npm install

# Start development server
$ npm start

# Build bundle folder for local enviroment
$ npm run build

# Build bundle folder for development enviroment
$ npm run build:dev

# Build bundle folder for production enviroment
$ npm run build:production
```

# Mock
Start server mock
```
$ npm run start:mock
```
[Create mock data](https://blog.hblab.vn/posts/Huong-dan-viet-mock-API-voi-connect-api-mocker-qua-vi-du)

# Stacks
- react
- react-router-v4
- redux
- redux-sagas
- webpack 5
- tailwindcss
- bulma
- styled-components
- Storybook

# Architecture
## Atomic Design
- Every components should not have a logic about API (server-side) and side effect logic.

  * Move them to `modules/*`.

- Pages are Class Component.

  * Manage a local state and connect to Redux's store.

- Other components should Function Component.

  * And should not have a local state without special reason.

## Redux
Using the [re-ducks](https://github.com/alexnm/re-ducks) architecture.

## Other rules
- Every magic number going to be moved to `constants/*`
- Images are defined on `themes/images.js` and import it by some Components.

# References