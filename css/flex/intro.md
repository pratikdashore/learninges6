<!-- 
https://css-tricks.com/snippets/css/a-guide-to-flexbox/


justify-content = main axis 
align-items = cross axis


properties 

container: 

display (flex. inline-flex)

flex-direction: row | column 

flex-wrap : nowrap | wrap | wrap-reverse 

flex-flow : (flex-direction flex-wrap)

justify-content : flex-start | flex-end | center | space-between | space-around | space-evenly 
(it takes effect if grow in not in place)

align-items: stratch | flex-start | flex-end | center | baseline 

align-content 

gap, row-gap, column-gap 

Children::

order 

flex-grow 

flex-shrink 

flex-basis 

flex : (flex-grow  flex-shrink flex-basis)

flex-align 

 -->

<!-- For Browser Support 

@mixin flexbox() {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

@mixin flex($values) {
  -webkit-box-flex: $values;
  -moz-box-flex:  $values;
  -webkit-flex:  $values;
  -ms-flex:  $values;
  flex:  $values;
}

@mixin order($val) {
  -webkit-box-ordinal-group: $val;  
  -moz-box-ordinal-group: $val;     
  -ms-flex-order: $val;     
  -webkit-order: $val;  
  order: $val;
}

.wrapper {
  @include flexbox();
}

.item {
  @include flex(1 200px);
  @include order(2);
}


Flext: This is a unitless proportion value that dictates how much available space along the main axis each flex item will take up compared to other flex items. In this case, we're giving each <article> element the same value (a value of 1), which means they'll all take up an equal amount of the spare space left after properties like padding and margin have been set. This value is proportionally shared among the flex items: giving each flex item a value of 400000 would have exactly the same effect.

/* Keyword values */
flex: auto;
flex: initial;
flex: none;

/* One value, unitless number: flex-grow
flex-basis is then equal to 0. */
flex: 2;

/* One value, width/height: flex-basis */
flex: 10em;
flex: 30%;
flex: min-content;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial;
flex: revert;
flex: revert-layer;
flex: unset;


The flex property may be specified using one, two, or three values.

One-value syntax: the value must be one of:
a valid value for <flex-grow>: then the shorthand expands to flex: <flex-grow> 1 0.
a valid value for <flex-basis>: then the shorthand expands to flex: 1 1 <flex-basis>.
the keyword none or one of the global keywords.
Two-value syntax:
The first value must be a valid value for flex-grow.
The second value must be one of:
a valid value for flex-shrink: then the shorthand expands to flex: <flex-grow> <flex-shrink> 0.
a valid value for flex-basis: then the shorthand expands to flex: <flex-grow> 1 <flex-basis>.
Three-value syntax: the values must be in the following order:
a valid value for flex-grow.
a valid value for flex-shrink.
a valid value for flex-basis.

flex-grow: how to grow in available positive free space, if 0 it won't grow and will take space defined by flex-basis or by content depends on flex-basis prop value
The flex-grow property specifies the flex grow factor, which determines how much the flex item will grow relative to the rest of the flex items in the flex container when the positive free space is distributed.

flex-shrink: how to shrink in available space, if 0 it won't shrink the content and content will overflow and will be desided based on flex-basis prop value

flex-basis : minimum width each item will take 
auto (default) - it will check for widht prop defined on item if not it will do auto caculation which sets max-content as flex-basis(maximum space items content can take)
0 - it won't set any initial width and all the space is allowed for flex grow

must read:: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax#combining_flex-grow_and_flex-basis


Mastering sizing of flex items
The key to really understanding how flex item sizing works is in understanding the number of things that come into play. Consider the following aspects, which we have already discussed in these guides:

What sets the base size of the item?
Is flex-basis set to auto, and does the item have a width set? If so, the size will be based on that width.
Is flex-basis set to auto or content? If so, the size is based on the item size.
Is flex-basis a length unit, but not zero? If so this is the size of the item.
Is flex-basis set to 0? if so then the item size is not taken into consideration for the space-sharing calculation.
Do we have available space?
Items can't grow with no positive free space, and they won't shrink unless there is negative free space.

If we took all of the items and added up their widths (or heights if working in a column), is that total less than the total width (or height) of the container? If so, then you have positive free space and flex-grow comes into play.
If we took all of the items and added up their widths (or heights if working in a column), is that total more than the total width (or height) of the container? If so, you have negative free space and flex-shrink comes into play.
Other ways to distribute space
If you do not want space added to the items, remember that you can deal with free space between or around items using the alignment properties described in the guide to aligning items in a flex container. The justify-content property will enable the distribution of free space between or around items. You can also use auto margins on flex items to absorb space and create gaps between items.

With all the flex tools at your disposal you will find that most tasks can be achieved, although it might take a little bit of experimentation at first.

-->