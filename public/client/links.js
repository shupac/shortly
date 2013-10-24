Shortly.Links = Backbone.Collection.extend({

  model: Shortly.Link,
  url: '/links'

  // function() {
  //   if(filter){
  //     return '/links' + filter;
  //   }
  //   return '/links' + order + filter; // NEED LOGIC to add '&'
  //   // ?order_by=visits&filter_by=facebook'
  // }
});