### Condé Nast International test test
---
This repo contains my submission for the [CNI tech test](https://github.com/conde-nast-international/cnid-tech-tests).

I tried to keep it as simple as possible, without using any frameworks.
The only libraries I used were for some UI, such as Material UI.

### Getting Started
---
Please ensure that you have NodeJS installed. It should work with any NodeJS version above 6.9,
however it has been tested and built using 8.2.1.

After cloning this repo please run:

```
npm install
```

To run locally:

```
npm start
```

Or if you want to specify your own Port run:
```
PORT=<port-number> npm start
```

This will run a local server running that site at `http://localhost:4666` (or the port you specified above).

### Testing
---
To run unit tests, please run:

```
npm test
```

### To-Do
---
As with most tests, there was a bunch more I would've liked to have done, if there was more time available:

- Full server-side rendering
- More tests and functional tests
- Service workers for offline
- UI tweaks for better UX