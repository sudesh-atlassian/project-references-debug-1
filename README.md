Debug Project References

# Setup

`yarn install`

# Steps to reproduce the issue

1. Run typescript build with project references, this should create `tsDist` folder at the repo with emitted declarations
   `yarn tsc -b tsconfig.project-references.json -v`

2. Delete `packages/bar/src/clean.ts`, this files is consumed by `packages/foo/src/index2.ts`, Also we have paths defined for `bar/clean` in `tsconfig.json`
   `rm packages/bar/src/clean.ts`

3. Run typescript build with project references, this should update `tsDist` folder at the repo with emitted declarations, but it doesn't throw any error, as packages/foo/src/index2.ts is cosuming a non existing file
   `yarn tsc -b tsconfig.project-references.json -v`
