var React = require('react');

var App = React.createClass({

  getInitialState: function getInitialState () {
    return {
      result: '...',
      better: 'neither',
    };
  },

  update: function update () {
    console.log('hello');
  },

  render: function render () {

    return <div>
      <h1>Should I use miles or cash?</h1>
      <div>
        <div className={'left side' + (this.state.better == 'miles' ? 'better' : '')}>
          <input ref="miles" onChange={this.update} /> miles
          +
          <input ref="miles-cash" onChange={this.update} /> USD
        </div>
        <div className={'right side' + (this.state.better == 'cash' ? 'better' : '')}>
          <input ref="cash" onChange={this.update} /> USD
        </div>
        <div className="middle">
          - or -
        </div>
      </div>
      <div style={{clear:'both'}} />
      <div className="result">
        {this.state.result}
      </div>
    </div>;
  },
});

React.render(<App />, document.getElementById('app'));
