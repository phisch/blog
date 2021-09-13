---
layout: page
title: "Markdown Demo"
navigation_order: 5
---
# h1 heading
## h2 heading
### h3 heading
#### h4 heading
##### h5 heading
###### h6 heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue magna vitae velit pretium congue. Nam vitae nibh purus. Vivamus dictum gravida eros vel dictum. Proin purus sem, commodo nec augue non, pretium consequat est. Sed nec vestibulum ex. Donec imperdiet tellus sed erat congue efficitur. Maecenas ornare ex et lorem efficitur, quis ultrices turpis accumsan. Suspendisse at fringilla nisi, a cursus dolor.
___

## Blockquotes

> Blockquotes can also be nested...
> > ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

asd

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Tables

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus neque nulla, sit amet aliquam turpis elementum eget. In lacinia vehicula rutrum. Ut sit amet aliquam enim. Ut lacus nisl, mollis vitae nisi vitae, tempus vehicula nulla. Praesent lectus augue, tempus eget turpis et, lobortis dignissim eros.

| header 1 | header 2 | header 3 |
| ---      |  ------  |----------|
| cell 1   | cell 2   | cell 3   |
| cell 4 | cell 5 is longer | cell 6 is much longer than the others, but that's ok. It eventually wraps the text when the cell is too large for the display size. |
| cell 7   |          | cell 9   |

Lorem ipsum.

| header 1 | header 2 | header 3 |
| ---      |  ------  |----------|
| cell 1   | cell 2   | cell 3   |
| cell 4 | cell 5 is longer | foobar |
| cell 7   |          | cell 9   |



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus neque nulla, sit amet aliquam turpis elementum eget. In lacinia vehicula rutrum. Ut sit amet aliquam enim. Ut lacus nisl, mollis vitae nisi vitae, tempus vehicula nulla. Praesent lectus augue, tempus eget turpis et, lobortis dignissim eros.


## Code blocks and syntax highlighting

Proper `inline code` markup.  
Syntax highlighted code block

``` kotlin
fun delete() {
    this.parent?.let {
        it.children.remove(this)
        when (it.children.count()) {
            0 -> if (this.isLeaf) this.passRenderableTo(it) else it.delete() 
            1 -> it.children[0].delete()
        }
    }
}
```


Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Code block

```
Sample text here...
```

## Test

{% comment %} {% gist 2b67453a46b0eb6f4682ccc3bdb5b275 %} {% endcomment %}

## Links

[link text](http://github.com/phisch)

[link with title](http://github.com/phisch/blog "title text!")

Autoconverted link http://github.com/phisch/blog (enable linkify to see)

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
