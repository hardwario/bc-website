---
title: "Content Contribution"
menu:
  doc:
    parent: 'documentation'
    weight: 20
---

You can freely contribute into the documentation using GitHub pull requests. Alternatively, for minor changes like typos, you can use the **EDIT THIS PAGE** button in the header of each document.

The name of the documentation source GitHub repository is [**bc-website**](https://github.com/bigclownlabs/bc-website). The actual documentation content is inside the `content/doc` directory.

## Basic Rules

* We take care of the accuracy of the information contained, the spelling mistakes and the typography of the written document.

* Each document contains a brief, comprehensible and clearly structured content.

* All documents are written in the **Markdown** format.

* The root of the file name is always in English.

    Example: `tutorial.md`

* Lines wrap around the paragraphs. It is therefore advisable to use an editor that supports word wrapping - e.g. [**Atom**](https://atom.io/).

* There is always one blank line between the paragraphs.

* We use an editor that has support for the **EditorConfig** plugin, such as [**Atom**](https://atom.io/). Alternatively, set the indentation level in your editor to **4 spaces**.

## Front Matter

Every document begins with the so-called "**YAML front matter**", which starts and ends with `---`. In this section, you can set the document parameters.

Example:

```
---
title: "Getting Started"
slug: "getting-started"
---

```

* The first mandatory parameter is called `title` followed by the title of the document.

* The second optional parameter is called `slug` followed by the URL path of the document. If the parameter `slug` is not specified, the name derived from the file name will be used.

* An extra blank line is followed after the front matter closing sequence.

## Headings

The heading starts with the character `#` and their number determines the heading level.

The minimum heading level must be 2, because the heading level 1 is reserved for the document title. The maximum recommended heading level is 3. Only the level 2 headings are listed in the scroll-spy on the right side.

There is always **one blank line** before and after the heading.

Example:

```

## Heading Level 2

### Heading Level 3

```

Each heading generates a bookmark name that can be used in the links within the document, or between the documents. The bookmark name is derived from the heading title - for example `Heading Level 2` will have a bookmark name `#heading-level-2`.

We use this [Rules for Capitalization in Titles of Articles
](http://grammar.yourdictionary.com/capitalization/rules-for-capitalization-in-titles.html) in our titles.

## Typography

* The text can be **highlighted** by closing it between `**`.

    Example:

    ```
    **Highlighted text**
    ```

* The text can be marked in **italics** by closing it between `*`.

    Example:

    ```
    *Text in italics*
    ```

* The text can be marked in **monospace** by closing it between `` ` ``.

    Example:

    ```
    `Ctrl+C`
    ```

    This is especially useful for commands, file names, keyboard shortcuts, etc. Proper use greatly enhances the orientation between key information.

## Lists

The item in the unordered list is denoted using the character `*`.

Example:

```
* Item 1
* Item 2
* Item 3
```

Numbered lists are denoted using a sequence number and a following dot.

Example:

```
1. First Item
2. Second Item
3. Third Item
```

Lists can also be nested. In this case, **4 spaces** must be used for indenting.

Example:

```
* Item 1
    1. First Item
    2. Second Item
    3. Third Item
* Item 2
* Item 3
```

If the item has a paragraph character in the list, it is necessary to leave a blank line before and after the item.

Example:

```

1. This is the first paragraph.

2. This is the second paragraph.

3. This is the third paragraph.

```

If an item has an associated code snippet, you need to indent it accordingly.

Example:

```
* Item

    ```
    uname -a
    ```
```

## Links

### Link Labels

{{% note "warning" %}}The link label should contain information on what the link refers to. First of all, it is easier for faster orientation on the page when the user is just following hyperlinks. Secondly, it's better for the search engine content indexing. Especially avoid link labels with the text like **here** or **download**.{{% /note %}}

**The wrong way:**

  * BigClown Raspbian image can be found [**here**](https://github.com/bigclownlabs/bc-raspbian/releases).

  * BigClown Raspbian Image [**download**](https://github.com/bigclownlabs/bc-raspbian/releases) is available.

**The right way:**

  * You can [**download BigClown Raspbian**](https://github.com/bigclownlabs/bc-raspbian/releases) image from GitHub.

  * Download the [**BigClown Raspbian Image**](https://github.com/bigclownlabs/bc-raspbian/releases).

### Link Types

1. **External without label** - simple type the URL including the protocol into the text.

    Example:

    ```
    https://www.google.com/
    ```

2. **External with label** - the URL is enclosed into the Markdown construct `[label](URL)`.

    Example:

    ```
    [Google](https://www.google.com/)
    ```

3. **Internal without bookmark** - special function is used, which converts the document path to a relative URL. The document path is always relative to the `content` directory.

    Example:

    ```
    [Foo]({{</* relref "doc/foo.md" */>}})
    ```

    {{< note "info" "This feature guarantees the integrity of links in the documentation. If the file did not exist, the documentation could not be assembled." />}}

3. **Internal with bookmark** - the same format as the previous one, but followed by `#` and a bookmark name.

    Example:

    ```
    [Foo]({{</* relref "doc/foo.md#bar" */>}})
    ```

4. **Inside the document** - the format used is `[Chapter](#bookmark)`.

    Example:

    ```
    [Next chapter](#next-chapter)
    ```

## Images

First, you need to place the image in the appropriate directory path inside the `static` folder.  If the URL is a document `/en/doc/foo/`, then you need to place the image, e.g. `screenshot.png`, into the repository path `static/en/doc/foo/screenshot.png`.

Use the following syntax to insert the image inside the Markdown document:

```
{{%/* img src="screenshot.png" */%}}
```

You can optionally set other parameters as well:

```
{{%/* img src="screenshot.png" alt="Blue screen of dead" width="320" height="240" */%}}
```

{{< note "warning" "It is always a good idea to fill in the alternative text of the image." />}}

## Images with zoom

Place image file in the appropriate directory path like for `image`.

Use the following syntax to insert the image with zoom inside the Markdown document:

```
{{%/* img-zoom src="screenshot.png" */%}}
```

Image will shrink to available width and zoom with click. `Ctrl` click will open image in new tab.

{{% note "warning" %}}You should prefere `image-zoom` instead of `image`{{% /note %}}


## Snippets
Use a single back-tick ```` ` ```` if you use snippets in the middle of the text. Like when you explain
MQTT topic  ```` `node/kitchen/temperature` ````.

Use triple back-tics ```` ``` ```` when you insert a multi-line snippet.

````
```
multiple
line
snippet
```
````

Use snippets for:

  - MQTT topics like `node/kitchen/temperature`
  - JSON payloads `{ "duration": 500, "direction": true}`
  - C code functions, structures, defines `BC_LIS2DH12_EVENT_ERROR`
  - Command-line commands `ssh pi@hub.localhost`
  - Web address in browsers `hub.local:1800`


There are 2 variants how to insert the code snippets into the text:

1. **Code snippet without syntax highlighting**

    This is done by closing the code by closing it between ```` ``` ````.

    Example:

    ~~~
    ```
    for (int i = 0; i < 10; i++)
    {
        // Do something...
    }
    ```
    ~~~

2. **Code snippet with syntax highlighting**

    This is done as a previous case, but with the name of the language immediately behind the opening ```` ``` ```` (without a space).

    Example:

    ~~~
    ```c
    for (int i = 0; i < 10; i++)
    {
        // Do something...
    }
    ```
    ~~~

    Result:

    ```c
    for (int i = 0; i < 10; i++)
    {
        // Do something...
    }
    ```

## Tables

In a document, you can create tables with the characters `|`, `-` and `:`.

Example:

```
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell A1  | Cell B1  | Cell C1  |
| Cell A2  | Cell B2  | Cell C2  |
| Cell A3  | Cell B3  | Cell C3  |
```

It is also possible to align the content of column 2 to the center.

Example:

```
| Column 1 | Column 2 | Column 3 |
|----------|:--------:|----------|
| Cell A1  | Cell B1  | Cell C1  |
| Cell A2  | Cell B2  | Cell C2  |
| Cell A3  | Cell B3  | Cell C3  |
```

Alternatively, you can align the content of column 3 to the right.

Example:

```
| Column 1 | Column 2 | Column 3 |
|----------|----------|---------:|
| Cell A1  | Cell B1  | Cell C1  |
| Cell A2  | Cell B2  | Cell C2  |
| Cell A3  | Cell B3  | Cell C3  |
```

## Annotations

For better orientation in the text, it is appropriate to divide semantic blocks that have the character of an alert. In this documentation, we use 4 types of alerts:

* **Successful progress** - designated as `success`

* **Extra information** - designated as `info`

* **Warning** - designated as `warning`

* **Dangerous zone** - designated as `danger`

There are 3 types of annotation entries:

1. **Short annotation**

    Syntax:

    ```
    {{</* note "warning" "I told you - don't drink and drive..." /*/>}}
    ```

    Result:

    {{< note "warning" "I told you - don't drink and drive..." />}}

2. **Block annotation without title**

    Syntax:

    ```
    {{</* note "danger" */>}}If you don't obey, things will go apart!{{</* /note */>}}
    ```

    Result:

    {{< note "danger" >}}If you don't obey, things will go apart!{{< /note >}}

3. **Block annotation with title**

    Syntax:

    ```
    {{</* note "info" "Did you know that..." */>}}...tomato is a fruit?{{</* /note */>}}
    ```

    Result:

    {{< note "info" "Did you know that..." >}}...tomato is a fruit?{{< /note >}}

## Related Documents

* [**Contribution Setup**]({{< relref "/doc/documentation/contribution-setup.en.md" >}})
