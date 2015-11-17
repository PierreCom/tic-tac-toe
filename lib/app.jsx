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

   /*componentWillMount: function(){
   	var old_this = this;
   	this.timer = setInterval(function(){
   	var oldValue = old_this.state.value;
   	var newValue = oldValue === 'X' ? 'O': 'X';
   	old_this.setState({
   	value: newValue
   	});
   	}, 300);
   	},
*/
   	componentWillUnmount: function(){
   	clearInterval(this.timer);
  },


    Click : function(){
      if(this.state.value === 'X')
      {
        this.setState.value = 'O'
      }
      if(this.state.value === 'O')
      {
        this.setState.value = 'X'
      }
    },

  'render': function onRender () {
    return (
      <button style={Style} onClick = {this.Click}>{this.state.value}</button>
    );
  }
});

var Row = React.createClass({
  'render': function onRender() {
    return (
      <div><Box initialValue='X'/><Box initialValue='X'/><Box initialValue='X'/></div>
    );
    }
  });

//React.render(<Box initialValue='X'/>, document.body);
React.render(<Row/>, document.body);
