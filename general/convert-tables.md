# Convert Tables: html to TEI

## TEI Table Elements
```
<table> contains text displayed in tabular form, in rows and columns.
```
```
<row> contains one row of a table.
```
```
<cell> contains one cell of a table.
```
```
@rows indicates the number of rows in the table.
```
```
@cols indicates the number of columns in each row of the table.
```

### Well-formed requirements
```
<table> can be contained by <body>, <div>, or <p>
```
```
<cell> can contain <pb>, <span>, but NOT <p> or <div>
```

## Conversion

| HTML | TEI |
|:-----:|: ----:|
tr | row
td | cell
@colspan | @cols
@rowspan | @rows

### Regex
- AFR includes headings for multiple columns as: 

```
	<td colspan="n"> and sometimes <td colspan="n" rowspan="n"> 
```
To retain the attribute value, search for some variation of
```
<td colspan="(\d+)" rowspan="(\d+)">
```
and replace with 
```
<td cols="\1" rows="\2">
```
- AFR also inserts @span for tabular rules, and they all need to be stripped out.

