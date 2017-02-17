# Convert Tables: html to TEI

[Return to menu](../README.md)

## TEI Table Elements
```html
<table> contains text displayed in tabular form, in rows and columns.
```

```html
<row> contains one row of a table.
```

```html
<cell> contains one cell of a table.
```

```html
@rows indicates the number of rows in the table.
```

```html
@cols indicates the number of columns in each row of the table.
```

### Well-formed requirements
```html
<table> can be contained by <body>, <div>, or <p>
```

```html
<cell> can contain <pb>, <span>, but NOT <p> or <div>
```

## Conversion

| HTML | TEI |
|:-----:|:----:|
| tr | row |
| td | cell |
| @colspan | @cols |
| @rowspan | @rows |


- AFR inserts @span for tabular rules and @style for alignment. They all need to be stripped out.

### Regex
- AFR includes headings for multiple columns as: 

```html
	<td colspan="n"> and sometimes <td colspan="n" rowspan="n"> 
```

  - To retain the attribute value, search for some variation of:


```html
<td colspan="(\d+)" rowspan="(\d+)">

```

  - and replace with: 


```html
<td cols="\1" rows="\2">

```




