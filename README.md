# OSS

This repository contains reusable files and configurations that are commonly used in my personal open-source software (OSS) projects.

## Basic Repo Setup

This section provides a guide on how to set up a basic repository for OSS projects.

### GitHub repository

Create a new repository from the GitHub UI or the `gh` CLI.
Make it empty

> [!TIP]
> Initialize it as an empty repository to make it easier for mono-repo management tools and to make consistent commit messages.

### npm Client

### pnpm

I use [pnpm](https://pnpm.io/) as my preferred npm client. It's fast and it saves disk space by using a single storage for all packages across projects.

Refer to the [pnpm docs](https://pnpm.io/installation) for installation instructions.

### Repo Management

### Turborepo

These days, I use [turborepo](https://turbo.build/repo) as my go-to tool for managing monorepos. It's fast, easy to use, and has a great CLI.

#### Creating a new monorepo

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

### Code Linting & Formatting

#### ESLint

I've written my own ESLint plugin and it's available on npm as [@brionmario/eslint-plugin](https://www.npmjs.com/package/@brionmario/eslint-plugin).

Installation can be done using the following command:

```bash
pnpm add -D eslint @brionmario/eslint-plugin
```

#### Prettier

I've a custom prettier config that I use for all my projects. It's available on npm as [@brionmario/prettier-config](https://www.npmjs.com/package/@brionmario/prettier-config).

Installation can be done using the following command:

```bash
pnpm add -D prettier @brionmario/prettier-config
```

### Versioning & Releases

This section provides information on how to manage versioning and releases with my preferred toolchains.

#### Changesets

This section provides information on how to manage changesets for your OSS projects.

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