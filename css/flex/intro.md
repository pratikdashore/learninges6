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

-->