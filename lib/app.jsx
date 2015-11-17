'use strict';

var React = require('react');
var Style = {
  height: '100px',
  width: '100px'
};



var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */

   getInitialState: function() {
     return {value : this.props.initialValue};
   },



   componentWillMount: function(){
   	var old_this = this;
   	this.timer = setInterval(function(){
   	var oldValue = old_this.state.value;
   	var newValue = oldValue === 'X' ? 'O': 'X';
   	old_this.setState({
   	value: newValue
   	});
   	}, 300);
   	},

   	componentWillUnmount: function(){
   	clearInterval(this.timer);
   	},


  'render': function onRender () {
    return (
      <button style={Style}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue='Y'/>, document.body);
