---
layout: post
title: "Creating the best cursor theme ever"
date: 2022-01-04 06:13:28 +0100
tags: cursor theme x11 wayland figma
---
This is the story of how I created the best cursor theme that has ever existed. There is no way anyone will ever make a better one.

``` scss
@use 'colors';

nav#navigation ol {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;

  li {
    &.current a {
      color: colors.$accent-secondary;
      border-bottom: 3px solid colors.$accent-secondary;
    }
    a {
      padding: 8px 0;
      color: colors.$foreground;
      text-decoration: none;
  
      &:hover {
        color: colors.$accent-secondary;
      }
    }
  }
}
```