# OSS

This repository contains reusable files and configurations that are commonly used in my personal open-source software (OSS) projects.

## Basic Repo Setup

This section provides a guide on how to set up a basic repository for OSS projects.

### Creating a GitHub repository

Create a new repository from the GitHub UI or the `gh` CLI.
Make it empty

> [!TIP]
> Initialize it as an empty repository to make it easier for mono-repo management tools and to make consistent commit messages.

### Setup a npm Client

#### pnpm

I use [pnpm](https://pnpm.io/) as my preferred npm client. It's fast and it saves disk space by using a single storage for all packages across projects.

Refer to the [pnpm docs](https://pnpm.io/installation) for installation instructions.

### Repo Management

#### Turborepo

These days, I use [turborepo](https://turbo.build/repo) as my go-to tool for managing monorepos. It's fast, easy to use, and has a great CLI.

##### Creating a new monorepo

```bash
pnpm dlx create-turbo@latest
```

- Answer with `.` for `Where would you like to create your turborepo? .` to initialize the repository from the root.

- Answer with `pnpm workspaces` for `Which package manager do you want to use?`.

> [!IMPORTANT]  
> Refer to the [turborepo docs](https://turbo.build/repo/docs) for installation instructions since the above instructions are subject to change.

### Folder Structure

#### Pure JavaScript projects

```bash
.
├── docs # Raw markdown documentation or documentation website.
├── lib # Library root
│   ├── src # Source code
│   │   ├── public-api.ts # Public API
│   │   └── index.ts # Entry point
│   ├── .eslintignore # ESLint ignore file.
│   ├── .eslintrc.cjs # ESLint config for the library.
│   ├── CHANGELOG.md # Changelog
│   ├── package.json # Package manifest
│   ├── prettier.config.cjs # Prettier config
│   ├── rollup.config.cjs # Rollup config, webpack.config.cjs for webpack or any other bundler.
│   ├── tsconfig.eslint.json # TypeScript config for files that are not in the source directory but need to be linted. ex: cjs config files, etc.
│   ├── tsconfig.json # Main TypeScript config with common settings referencing the lib.json & spec.json.
│   ├── tsconfig.lib.json # TypeScript config for the library.
│   └── tsconfig.spec.json # TypeScript config for tests.
├── playground # Playground for testing the library.
├── .editorconfig # Editor config file.
├── .eslintignore # ESLint ignore file.
├── .eslintrc.cjs # ESLint config for the root.
├── .gitignore # Git ignore file.
├── .npmrc # npmrm config file.
├── .prettierignore # Prettier ignore file.
├── CONTRIBUTING.md # Contributing guidelines
├── LICENSE # License
├── README.md # Readme file.
├── package.json # Root package manifest containing scripts for common tasks and dependencies for dev tools.
├── pnpm-lock.yaml # pnpm lockfile
├── pnpm-workspace.yaml # pnpm workspace config
├── prettier.config.cjs # Prettier config
└── turbo.json # turborepo config
```

### .gitignore

Use the `.gitignore` files that come with the monorepo management tools or boilerplates. Or use one of the relevant ones from [.gitignore](.gitignore) folder.


> [!TIP]
> Most .gitignore templates doesn't exclude some system files like MacOS `.DS_Store` files. Hence, I append some of [these excludes](.gitignore/__COMMON__.gitignore) generally with even the ignore files generated from stock templates.

### Code Linting & Formatting

#### EditorConfig

EditorConfig helps maintain consistent coding styles across various editors and IDEs. Below are the EditorConfig files used in this repository:

- For the Monorepo root, use the following [`.editorconfig`](.editorconfig/__MONOREPO-ROOT__.editorconfig) file.

- For nested packages, you can use a separate `.editorconfig` file tailored to the specific requirements of that package or just inherit the root `..editorconfig` as shown in the following example configuration:

  - [`.editorconfig`](.editorconfig/__NESTED_PACKAGE__.editorconfig) for nested packages.

#### ESLint

> [!WARNING]
> To use ESLint effectively, ensure you have it installed in your IDE or code editor. You can install ESLint via your editor's extension marketplace or by following the instructions on the [ESLint website](https://eslint.org/).

I've written my own ESLint plugin and it's available on npm as [@brionmario/eslint-plugin](https://www.npmjs.com/package/@brionmario/eslint-plugin).

- Installation can be done using the following command:

  ```bash
  pnpm add -D eslint @brionmario/eslint-plugin
  ```

- Add the following `npm` script to run eslint on common files. (You may skip this if the monorepo management tool or the boilerplate adds their own script.)

  ```json
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  ```

- Add `.eslintrc.js` files.

  - For Monorepo root, add the [.eslintrc.js/__MONOREPO-ROOT__.eslintrc.js](.eslintrc.js/__MONOREPO-ROOT__.eslintrc.js)

- Add `.eslintignore` files.

  - For Monorepo root, add the [.eslintignore/__MONOREPO-ROOT__.eslintignore](.eslintignore/__MONOREPO-ROOT__.eslintignore)

#### Prettier

> [!WARNING]
> Before using Prettier, make sure to install the [Prettier plugin](https://prettier.io/docs/en/editors.html) for your code editor. This ensures consistent code formatting across your project and enhances collaboration.

I've a custom prettier config that I use for all my projects. It's available on npm as [@brionmario/prettier-config](https://www.npmjs.com/package/@brionmario/prettier-config).

- Installation can be done using the following command:

  ```bash
  pnpm add -D prettier @brionmario/prettier-config
  ```

- Add the following `npm` script to run prettier. (You may skip this if the monorepo management tool or the boilerplate adds their own script.)

  ```json
  "format": "prettier --write \"**/*.{js,jsx,ts,tsx,css,json,md,mdx}\""
  ```

- Add `prettier.config.cjs` files.

  - For Monorepo root, add the [prettier.config.cjs/__MONOREPO-ROOT__prettier.config.cjs](prettier.config.cjs/__MONOREPO-ROOT__prettier.config.cjs)

- Add `.prettierignore` files.

  - For Monorepo root, add the [.prettierignore/__MONOREPO-ROOT__.prettierignore](.prettierignore/__MONOREPO-ROOT__.prettierignore)
  
  - For `Node.JS`, start with [.prettierignore/__NODEJS__.prettierignore](.prettierignore/__NODEJS__.prettierignore)

### Versioning & Releases

This section provides information on how to manage versioning and releases with my preferred toolchains.

#### Changesets

I've been loving Changesets for release and versioning recently.

- Installation can be done using the following command:

  ```bash
  pnpm add -D @changesets/cli
  ```

- To initialize:

  ```bash
  npx changeset init
  ```
  
The above steps with install the Changesets CLI and setup a basic the changeset config file.

- Install `@changesets/changelog-github` plugin for GitHub flavored Changelog generation.

  ```bash
  pnpm add -D @changesets/changelog-github
  ```

- Add the following two `npm` scripts.

  ```json
  "publish:packages": "changeset publish",
  "version:packages": "changeset version && pnpm install --lockfile-only"
  ```
  
- Replace the default `.changeset/config.json` file with [this config](.changeset/config.json) file and adjust the configurations accordingly removing the comments.


## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/reponame](https://github.com/yourusername/reponame)