---
title: "table_of_contents.json"
---

The [`table_of_contents.json`](https://github.com/graysonhicks/gatsby-starter-skinny-docs/blob/master/src/docs/table_of_contents.json) file is where you provide the structure for your documentation. It relies on Gatsby's [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) to parse Markdown files. It is queried in the [`templates/doc.jsx`](https://github.com/graysonhicks/gatsby-starter-skinny-docs/blob/master/src/templates/doc.jsx) page and passed the data into the [`<TableOfContents / >`](/table-of-contents-component) component.

* [Parts](#parts)
* [Entry Point to Gatsby](#entry)
* [Querying](#querying)
* [Example](#example)

<a name="parts"/>

### Parts

Main parts of the `json` file and their purpose:

`chapters` - Top-level structure. If a `chapter` is listed, then a corresponding `subchapter` is required. Not a link by default.

`subchapters` - Mid-level structure. If a `subchapter` is listed, then a corresponding `section` is required. Not a link by default.

`sections` - Bottom-level structure. Requires a `post` property that points to the corresponding Markdown file. The path to the Markdown file is relative to the `table_of_contents.json`. This is a link by default to the `slug` it's corresponding Markdown post.

<a name="entry"/>

### Entry Point to Gatsby

The `table_of_contents.json` is accessible to Gatsby through the [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/#gatsby-source-filesystem) plugin that is configured in this project's `gatsby-config.js` by this snippet:

```javascript
{
    resolve: 'gatsby-source-filesystem',
    options: {
    name: 'docs',
    path: `${__dirname}/src/docs/`,
    },
},
```

If you want to move it, you must change the `path` above as well.

<a name="querying"/>

### Querying

Because of the above snippet, the `table_of_contents.json` is now queriable by Gatsby wherever you may need it.

By default, this query happens in the `templates/doc.jsx` file and looks like this:

```javascript
tableOfContents: docsJson {
      possibleProp
      chapters {
        title
        subchapters {
          title
          sections {
            post {
              childMarkdownRemark {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      }
    }
```

Note that you may add other fields to your Table of Contents items.

<a name="example"/>

### Example

Here is an example of how a multi-chapter Table of Contents could be set up:

```javascript
{
  "id": "table-of-contents",
  "possibleProp": "possibleVal",
  "chapters": [
    {
      "title": "Chapter 1",
      "subchapters": [
        {
          "title": "Subchapter 1",
          "sections": [
            {
              "post": "./sub-1-section-1.md"
            },
            {
              "post": "./sub-1-section-2.md"
            }
          ]
        },
        {
          "title": "Subchapter 2",
          "sections": [
            {
              "post": "./sub-2-section-1.md"
            },
            {
              "post": "./sub-2-section-2.md"
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2",
      "subchapters": [
        {
          "title": "Subchapter 1",
          "sections": [
            {
              "post": "./ch-2-sub-1-section-1.md"
            },
            {
              "post": "./ch-2-sub-1-section-2.md"
            }
          ]
        }
      ]
    }
  ]
}
```
