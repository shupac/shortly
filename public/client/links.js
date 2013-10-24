Shortly.Links = Backbone.Collection.extend({

  model: Shortly.Link,
  initialize: function(params) {
    this.url = '/links';
    if(params) this.url = this.url + '?sort_by=' + params.sort;
    console.log(this.url);
  }
});