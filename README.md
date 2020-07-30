# static-ts-boilerplate

A simple boilerplate project with hot reloading for static websites using typescript.

## Instructions

- Run `npm install` to fetch all dependencies.
- Run `npm run start:dev` to start development.

## Scripts

- `npm run start:tsc`- tsc compiles on file change in src and saves compiles \*.js to dist/js/ directory.
- `npm run start:server` - starts server with autoreloading if html, css, or js in dist directory changes. View site at [http://0.0.0.0:3000]
- `npm run start:dev` - This script serves as a shortcut and starts both scripts above.
- `npm run build`- This script cleans the dist/js/ directory and recompiles all \*.ts files in src directory. As of right now, it should only work on Linux systems.
