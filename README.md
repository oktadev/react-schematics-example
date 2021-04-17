# Use Schematics with React

This repository is a Schematic implementation that installs reactstrap into React projects. 

Please read [Use Schematics with React and Add OpenID Connect Authentication in 5 Minutes](https://developer.okta.com/blog/2019/03/05/react-schematics) for a tutorial that explains how to build this example.

## Getting Started

**Prerequisites:** [Node 11](https://nodejs.org).

To install this example, run the following commands:

```sh
git clone https://github.com/oktadeveloper/react-schematics-example.git rsi
cd rsi
```

Run `npm pack` to package it up so you can install it in a React App.

Create a React app to test this Schematic and install reactstrap.

```sh
npx create-react-app test
cd test
npm link ../rsi
```

Install `schematics-cli` and run it:

```
npm i -g @angular-devkit/schematics-cli@0.1102.9
schematics rsi:rsi
```

## Use OktaDev Schematics

You can use [@oktadev/schematics](https://github.com/oktadeveloper/schematics) to add authentication with OIDC to a React app. Create a React app with TypeScript.

```
npx create-react-app rs --template typescript
```

Then cd into it and install @oktadev/schematics:

```
npm i @oktadev/schematics
schematics @oktadev/schematics:add-auth
```

This will prompt you for your Okta OIDC settings. To get those, install the [Okta CLI](https://cli.okta.com/), open a new terminal window, and run `okta register` to sign up for a new account. If you already have an account, run `okta login`. Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Single-Page App** and press **Enter**.

Use `http://localhost:3000/callback` for the Redirect URI and accept the default Logout Redirect URI of `http://localhost:3000`.

Copy your issuer and client ID into the prompts. When the installation completes, run `npm start` and marvel at your React app with OIDC authentication!

## Help

Please post any questions as comments on this repo's [blog post](https://developer.okta.com/blog/2019/03/05/react-schematics), or visit our [Okta Developer Forums](https://devforum.okta.com/). 

## License

Apache 2.0, see [LICENSE](LICENSE).
 
