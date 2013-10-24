Shortly.LinksView = Backbone.View.extend({

  className: 'links',

  template: _.template('<input class = "search" type="text" placeholder="Search"></input>'),

  events: {
    "keydown .search": "filterView"
  },

  initialize: function(){
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  filterView: function(event){
    if(event.which === 13){
    var filter = $('.search').val();
    this.$el.html(this.template);
    this.$el.append("<div class='filterName'>Filter: " + filter + "</div>");
    var that = this;
      this.collection.forEach(function(link){
        var title = link.get('title');
        var url = link.get('url');
        if(title.indexOf(filter) !== -1 || url.indexOf(filter) !== -1) {
          that.addOne(link);
        }
      });
    }
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(item){
    var view = new Shortly.LinkView( {model: item} );
    this.$el.append(view.render().el);
  }

});