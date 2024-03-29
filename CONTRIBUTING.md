<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Writing Documentation](#writing-documentation)
  - [To add new sections](#to-add-new-sections)
- [Documentation Guidelines about Tools that are integrated with this documentation site](#documentation-guidelines-about-tools-that-are-integrated-with-this-documentation-site)
  - [Lighthouse CI](#lighthouse-ci)
    - [Features](#features)
- [Documentation Guidelines about Tools that are integrated with this documentation site](#documentation-guidelines-about-tools-that-are-integrated-with-this-documentation-site-1)
  - [Vale](#vale)
  - [Prettier GitHub Action support to format docs](#prettier-github-action-support-to-format-docs)

<!-- ABOUT THE PROJECT -->

## About the Project

[Docusaurus](https://docusaurus.io/) is a static site generator that helps you ship beautiful, accessible docs. For building our documentation engine, we have made certain modifications to the template generated by [Docusaurus](https://docusaurus.io) to be able to properly showcase all our contents with their respective versions.

### Built With

- [Docusaurus](https://docusaurus.io/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)

<!-- GETTING STARTED -->

## Getting Started

This section describes how you can get our documentation portal up and running on your machine.

### Prerequisites

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

1. Fork this repository in your GitHub account

2. Clone the repository using different ways of your choice in your local machine

> Cloning the repository using HTTPS:

```shell
git clone https://github.com/<USERNAME>/new-keptn-docs-engine.git
```

> Cloning the repository using SSH:

```shell
git@github.com:<USERNAME>/new-keptn-docs-engine.git
```

> Cloning the repository using GitHub CLI:

```shell
gh repo clone <USERNAME>/new-keptn-docs-engine
```

3. Install NPM packages

```shell
npm install
```

4. Run the Docusaurus site

```shell
npm start
```

<!-- USAGE EXAMPLES -->

## Usage

<!-- In usage, mention how to edit the docs, how to update versions, etc. -->

### Writing Documentation

To just edit older documentation, go to the specified versioned folder for a section, for example, you want to edit documentation for Release 0.16.x, open up `Release 0.16.x` folder and edit the required files there.

To create a new version inside a section, for example, Go. Make your changes in [docs/Go](./docs/Go). The `./docs` folder consists of the `next` version, which is unpublished, and is where you add your newer or _next_ version of the documentation.

After your changes are done, to create a version, run the following command:

```shell
npm run docusaurus docs:version:Go 1.2.3
```

This will create a new version `1.2.3` for Go.

Reference: [https://docusaurus.io/docs/versioning](https://docusaurus.io/docs/versioning)

### To add new sections

Create a new section in docusaurus by adding a new plugin entry in [docusaurus.config.js](./docusaurus.config.js).

Say you're adding a new Go section:

```javascript
{
  plugins: [
    // ...
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "docs/go",
        routeBasePath: "go",
        id: "go",
        sidebarPath: require.resolve("./sidebars/sidebars-go.js"),
        sidebarCollapsible: false,
        onlyIncludeVersions: !isDev ? require("./go_versions.json") : undefined,
      },
    ],
  ];
}
```

After you add this, you'll need to create a [sidebars file](https://docusaurus.io/docs/sidebar) `./sidebars/sidebars-go.js`.

Also, add your new docs to `./docs/go`, say you add `introduction.mdx`

Now, run `npm start` and you can access your Go docs at [http://localhost:3000/go/introduction](http://localhost:3000/go/introduction)

Then, you can create versions and edit older versions as mentioned above.

## Documentation Guidelines about Tools that are integrated with this documentation site

### Lighthouse CI

Lighthouse CI is a suite of tools that make continuously running, saving, retrieving, and asserting against [Lighthouse](https://github.com/GoogleChrome/lighthouse) results as easily as possible.

#### Features

- Get a Lighthouse report alongside every PR.
- Prevent regressions in accessibility, SEO, offline support, and performance best practices.
- Track performance metrics and Lighthouse scores over time.
- Set and keep performance budgets on scripts and images.
- Run Lighthouse many times to reduce variance.
- Compare two versions of your site to find improvements and regressions of individual resources.

The LightHouse CI should ideally:

- Add `lighthousesrc.json` to identify the metrics we are looking to track.
- Use the `jakepartusch/wait-for-netlify-action` action to grab the deployed preview link.
- Use the `treosh/lighthouse-ci-action` to audit the preview link through LightHouse and upload generated files as an artifact.
- Use the `actions/github-script` and `marocchino/sticky-pull-request-comment` to mark the performance as a PR comment.

For more information, see [https://github.com/treosh/lighthouse-ci-action](https://github.com/treosh/lighthouse-ci-action)

> For the time being, we have adopted the [Google Style Guide](https://google.github.io/styleguide/) because our main motivation is to integrate the Vale GitHub Action into the new documentation site engine.

## Documentation Guidelines about Tools that are integrated with this documentation site

### Vale

Vale is a command-line tool that brings code-like linting to prose. It's fast, cross-platform (Windows, macOS, and Linux), and highly customizable.

For more information, see [https://vale.sh/](https://vale.sh/)

### Prettier GitHub Action support to format docs

[Prettier](https://prettier.io/) is a very popular code formatter that uses very opinionated but sensible styles to format your code and prevent ongoing debates about code styles. So we wanted a GitHub action to automatically format your code using Prettier.

> Currently, we are running prettier checks for `docs/**/*.{md,mdx}` files only.
