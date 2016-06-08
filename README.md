# gatsby-reactdown

This is an example repository demonstrating how to use
[reactdown](https://github.com/andreypopp/reactdown) with
[gatsby](https://github.com/gatsbyjs/gatsby).

### How this works together:

1. Modify the webpack config to include reactdown. This can be done using
   gatsby's `modifyWebpackConfig` API.

2. Add a `.reactdown` file registering your components with reactdown. The
   documentation for this is almost nonexistent, but the [documentation
   site](https://github.com/andreypopp/reactdown/tree/master/site) in progress
   serves as an excelent example.

3. Modify the `wrapper` used by gatsby for markdown files. This can be done by
   creating a file at `wrappers/md.js`.

Your markdown files are now a bunch of React components 🎉
