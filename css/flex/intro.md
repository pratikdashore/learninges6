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

flex-grow: how to grow in available space, if 0 it won't grow and will take space defined by flex-basis or by content depends on flex-basis prop value

flex-shrink: how to shrink in available space, if 0 it won't shrink the content and content will overflow and will be desided based on flex-basis prop value

flex-basis : minimum width each item will take 

-->