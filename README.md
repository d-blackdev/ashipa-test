# ashipa-test
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This repository is them frontend for Monkey Music Group. At a high-level, The projects produces 3 apps:

- Android
- IoS
- Web

### Built With <a name = "built-with"></a>

Check [package.json]](./package.json)

## Getting Started

- Run `npm install` in root directory to install packages.
- Run `npm start` to start the server.
- Run either one of any of the command below in a different terminal(shell) to start the required app.
  - `yarn run android` to start android app.
  - `yarn run ios` to start IoS app.

<!-- CONTRIBUTING -->

## Contributing

Follow the steps below to contribute to the project. Please ensure code is properly linted and tested. A pull request should only contain an atomic
feature(a change or improvement that can not be broken down further).

1. Clone the Project Repo
2. Create your Feature Branch
3. Commit your Changes.
4. Push to the Branch
5. Open a Pull Request

## Linting

- To run a static(lint) test use `npm run lint`.
- To format or correct most errors use `npm run format`

### Guidelines

- Use only npm.
- Use pre-existing naming convention.
- Ensure every new snippet is unique. This implies that you should check the code to ensure the feature or problem you want to solve isn't in the codebase already.
- Reduce code duplication by extracting repeated lines of code to a component. The rule of thumb is to create a component when lines of code is replicated.
