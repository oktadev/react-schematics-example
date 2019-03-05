# Use Schematics with React

This repository is a Schematic implementation that installs reactstrap into React projects. 

Please read [Use Schematics with React and Add OpenID Connect Authentication in 5 Minutes](https://developer.okta.com/blog/2019/03/05/react-schematics) for a tutorial that explains how to build this example.

## Getting Started

**Prerequisites:** [Node 11](https://nodejs.org).

To install this example, run the following commands:

```sh
git clone git@github.com:oktadeveloper/react-schematics-example.git rsi
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
npm i -g @angular-devkit/schematics-cli@0.13.4
schematics rsi:rsi
```

## Use OktaDev Schematics

You can use [@oktadev/schematics](https://github.com/oktadeveloper/schematics) to add authentication with OIDC to a React app. Create a React app with TypeScript.

```
npx create-react-app rs --typescript
```

Then cd into it and install @oktadev/schematics:

```
npm i @oktadev/schematics
schematics @oktadev/schematics:add-auth
```

This will prompt you for your Okta OIDC settings. To get those, log in to your Okta Developer account (or [sign up](https://developer.okta.com/signup/) if you don't have an account) and navigate to **Applications** > **Add Application**. Click **Single-Page App** and click **Next**. Give the app a name you'll remember, change the port from `8080` to `3000`, and click **Done**.

When prompted, enter your issuer (it can be found in Okta's dashboard under **API** > **Authorization Servers**) and client ID. When the installation completes, run `npm start` and marvel at your React app with OIDC authentication!

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

## Help

Please post any questions as comments on this repo's [blog post](https://developer.okta.com/blog/2019/03/05/react-schematics), or visit our [Okta Developer Forums](https://devforum.okta.com/). 

## License

Apache 2.0, see [LICENSE](LICENSE).
 
