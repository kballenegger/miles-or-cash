var React = require('react');

var App = React.createClass({

  render: function render () {

    return <div>
      <h1>Should I use miles or cash?</h1>
      <div>
        <div className="left">
          on-the-left
        </div>
        <div className="right">
          on-the-left
        </div>
      </div>
    </div>;
  },
});

React.render(<App />, document.getElementById('app'));
