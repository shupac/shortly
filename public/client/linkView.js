Shortly.LinkView = Backbone.View.extend({

  className: 'link',

  template: _.template(' \
      <img src="/redirect_icon.png"/> \
      <div class="info"> \
        <div class="updated"><%= moment(updated_at).format("MMM D, h:mm:ss a") %></div> \
        <div class="visits"><span class="count"><%= visits %></span>Visits</div> \
        <div class="title"><%= title %></div> \
        <div class="original"><%= url %></div> \
        <a href="<%= base_url %>/<%= code %>"><%= base_url %>/<%= code %></a> \
        <a href="#" class="showStats">show stats</a> \
        <a href="#" class="hideStats">hide stats</a> \
      </div>'
  ),

  initialize: function(){
    this.statView = new Shortly.StatView({model:this.model});
  },

  events: {
    'click a.showStats': 'showStats',
    'click a.hideStats': 'hideStats'
  },

  showStats: function() {
    this.statView.showStats();
    this.$el.find('.hideStats').show();
    this.$el.find('.showStats').hide();
  },

  hideStats: function() {
    this.statView.hideStats();
    this.$el.find('.hideStats').hide();
    this.$el.find('.showStats').show();
  },

  render: function(data) {
    this.$el.html( this.template(this.model.attributes) ).append(data);
    this.$el.find('.hideStats').hide();
    this.$el.append(this.statView.el);
    return this;
  }

});