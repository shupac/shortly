Shortly.StatView = Backbone.View.extend({
  tagName: 'ul',
  className: 'stat',
  template: _.template('<a href="#" class="stats">show stats</a>'),
  events: {
    'click a.stats': 'showStats'
  },
  initialize: function() {
    this.render();
  },
  showStats: function() {
    var that = this;
    $.ajax({
      url: '/stats?id='+this.model.get('id'),
      type: 'GET',
      success: function(data) {
        var stats;
        var clickArr = JSON.parse(data);
        for(var i = 0; i < clickArr.length; i++) {
          var click = clickArr[i];
          that.$el.append("<li>"+moment(click.created_at).format('MMM D, h:mm:ss a')+"</li>");
        }
      }
    });
  },
  render: function() {
    this.$el.html(this.template);
  }
});