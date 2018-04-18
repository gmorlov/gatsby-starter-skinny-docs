---
title: "Table of Contents Component"
---

The `<TableOfContents / >` React component is what receives the queried data from `table_of_contents.json` and loops over to build the nested left nav of Chapters, Subchapters, and Sections.

Because it is build of `styled-components`, it is completely stylable to your needs. You may also make use of the `ThemeProvider` that is set up with `gatsby-starter-skinny-docs`.

It is very customizable if you choose to pass additional fields from `table_of_contents.json` and access them within this component..

It relies entirely on the structure of the `table_of_contents.json` file to stay virtually the same. So be prepared for changes in several files if you wish to make structural changes to the Chapter/Subchapter/Section design.
