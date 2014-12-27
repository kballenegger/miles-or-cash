var React = require('react');
var Numeral = require('numeral');

var App = React.createClass({

  getInitialState: function getInitialState () {
    return {
      result: '...',
      better: 'neither',
    };
  },

  update: function update () {
    var milesInput = this.refs['miles'].getDOMNode().value.trim();
    var milesCashInput = this.refs['miles-cash'].getDOMNode().value.trim();
    var cashInput = this.refs['cash'].getDOMNode().value.trim();

    var miles = parseFloat(milesInput);
    var milesCash = parseFloat(milesCashInput);
    if (isNaN(milesCash)) milesCash = 0;
    var cash = parseFloat(cashInput);

    if (isNaN(miles) || isNaN(cash)) {
      return this.reset();
    }

    var milesValue = cash - milesCash;
    var mileValue = milesValue / miles;

    this.setState({
      result: '' +
        Numeral(miles).format('0,0a') +
        ' miles is getting you ' +
        Numeral(milesValue).format('$0,0[.]00') +
        ', i.e. ' +
        Numeral(mileValue).format('$0,0[.]00[00]') +
        ' per mile.',
      better: mileValue > 0.014 ? 'miles' : 'cash',
    });
  },

  reset: function reset () {
    this.setState(this.getInitialState());
  },

  render: function render () {

    return <div>
      <h1>Should I use miles or cash?</h1>
      <div>
        <div className={'left side ' + (this.state.better == 'miles' ? 'better' : '')}>
          <input ref="miles" onChange={this.update} /> miles
          +
          <input ref="miles-cash" onChange={this.update} /> USD
        </div>
        <div className={'right side ' + (this.state.better == 'cash' ? 'better' : '')}>
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
