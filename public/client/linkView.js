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
      </div>'
  ),

  render: function(data) {
    this.$el.html( this.template(this.model.attributes) ).append(data);
    var statView = new Shortly.StatView({model:this.model});
    this.$el.append(statView.el);
    return this;
  }

});