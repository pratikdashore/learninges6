
# GRID:: for 2 dimentional layout

## MDN CSS (https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)

## fr unit is for flexible size for grid rows and column, it represents fraction of available space in grid container 

### Note: The fr unit distributes available space, not all space. Therefore, if one of your tracks has something large inside it, there will be less free space to share.


## The rules for grid-template-areas are as follows:

* You need to have every cell of the grid filled.
* To span across two cells, repeat the name.
* To leave a cell empty, use a . (period).
* Areas must be rectangular — for example, you can't have an L-shaped area.
* Areas can't be repeated in different locations.

* Grid Container - Where display:grid is assigned
* Grid Item - Direct Descendants of grid container
* Grid Lines: dividing lines that makes up grid (vertical and/or horizontal) 
* Grid Track - space between two adjacent grid lines (known as row or column)
* Grid Area - total area surrounded by 4 grid lines 

## Parent Props 
* display : grid | inline-grid
* Grid-template-columns & grid-template-rows : defines the template for columns and rows, default is 1 column per row
* Grid-template-areas : Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property.
* grid-template: short hand for setting grid-template-rows, grid-template-columns and grid-template-areas
* gap | column-gap | row-gap : provides gutter
* justify-items: Aligns grid items along the inline (row) axis (as opposed to align-items which aligns along the block (column) axis). This value applies to all grid items inside the container. (start | end | stretch (default) | center)
* align-items: Aligns grid items along the block (column) axis (as opposed to justify-items which aligns along the inline (row) axis). This value applies to all grid items inside the container. (start | end | stretch (default) | center)
* place-items: sets both align-items and justify-items property in single declaration 
<align-items> / <justify-items> – The first value sets align-items, the second value justify-items. If the second value is omitted, the first value is assigned to both properties.
* justify-content | align-content | place-content : if total size of grid is less than the size of its grid container the used 
* grid-auto-columns | grid-auto-rows: Specifies the size of any auto-generated grid tracks
Read on (https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-auto-columnsgrid-auto-rows)

## Child Props 
* grid-column-start | grid-column-end | grid-row-start | grid-row-end

* grid-column |  grid-row : 

* grid-area: Gives an item a name so that it can be referenced by a template created with the grid-template-areas property. 

* justify-self | align-self | place-self

## Sizing keywords:: 

* min-content: the minimum size of the content. Imagine a line of text like “E pluribus unum”, the min-content is likely the width of the word “pluribus”.
* max-content: the maximum size of the content. Imagine the sentence above, the max-content is the length of the whole sentence.
* auto: this keyword is a lot like fr units, except that they “lose” the fight in sizing against fr units when allocating the remaining space.
* fit-content: use the space available, but never less than min-content and never more than max-content.
* fractional units: see above


## Sizing Functions
minmax: minimum and maximum size 
min and max 


## The repeat() Function and Keywords
```css
grid-template-columns: repeat(8, minmax(10px, 1fr));
```

1. auto-fill: Fit as many possible columns as possible on a row, even if they are empty.
2. auto-fit: Fit whatever columns there are into the space. Prefer expanding columns to fill space rather than empty columns.