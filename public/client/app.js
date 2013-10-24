window.Shortly = Backbone.View.extend({

  template: _.template(' \
      <h1>Shortly</h1> \
      <div class="navigation"> \
      <ul> \
        <li><a href="#" class="index">All Links</a></li> \
        <li><a href="#" class="create">Shorten</a></li> \
        <li><a href="#" class="sortByVisits">Sort By Visits</a></li> \
        <li><a href="#" class="sortByLastVisit">Sort By Last Visit</a></li> \
      </ul> \
      </div> \
      <div id="container"></div>'
  ),

  events: {
    "click li a.index":  "renderIndexView",
    "click li a.create": "renderCreateView",
    "click li a.sortByVisits": "sortByVisits",
    "click li a.sortByLastVisit": "sortByLastVisit"
  },

  initialize: function(){
    console.log( "Shortly is running" );
    $('body').append(this.render().el);
    this.renderIndexView(); // default view
  },

  render: function(){
    this.$el.html( this.template() );
    return this;
  },

  sortByVisits: function() {
    this.renderIndexView('visits');
  },

  sortByLastVisit: function() {
    this.renderIndexView('last');
  },

  renderIndexView: function(sort){
    // e && e.preventDefault();
    var links;
    if(sort) {
      links = new Shortly.Links({sort:sort});
    } else {
      links = new Shortly.Links();
    }
    var linksView = new Shortly.LinksView( {collection: links} );
    this.$el.find('#container').html( linksView.render().el );
    this.updateNav('index');
  },

  renderCreateView: function(e){
    e && e.preventDefault();
    var linkCreateView = new Shortly.LinkCreateView();
    this.$el.find('#container').html( linkCreateView.render().el );
    this.updateNav('create');
  },

  updateNav: function(className){
    this.$el.find('.navigation li a')
            .removeClass('selected')
            .filter('.'+className)
            .addClass('selected');
  }

});