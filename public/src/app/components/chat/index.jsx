var React = require('react');
var mui = require('material-ui');

var dom = require('../../lib/dom');

var Messages = require('./messages');
var Participants = require('./participants');
var Controls = require('./controls');

var debug = require('debug')('game:components:chat');

var Paper = mui.Paper;

var Chat = React.createClass({
  componentDidMount: function () {
    this._resizeHandle();
  },
  _resizeHandle: function() {
    var resizer = this.refs.resizer.getDOMNode();
    var wrapper = this.refs.wrapper.getDOMNode();
    var start;
    var wrapperHeight;


    dom.on(resizer, 'dragstart', function(e) {
      start = e.clientY;
      wrapperHeight = parseInt(wrapper.style.height, 10);
    });

    dom.on(resizer, 'drag', function(e) {
      if (e.clientY === 0) return;
      wrapper.style.height = wrapperHeight + (start - e.clientY);
    });
  },
  render: function() {
    debug('render');

    var style = {
      height: 200,
      minHeight: 150,
      maxHeight: 350
    };

    return (
      <div
        style={style}
        ref="wrapper">
        <div
          ref="resizer"
          draggable="true"
          style={{
            width: '100%',
            height: 2,
            cursor: 'row-resize',
            position: 'absolute'
          }} />
        <Paper
          innerStyle={{
            padding: 5
          }}
          rounded={false}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap'
            }}>
            <div
              style={{
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: 500,
                height: 'calc(100% - 43px)',
                marginRight: 5
              }}>
              <Messages />
            </div>
            <div
              style={{
                height: '100%',
                flexBasis: 300,
                flexShrink: 0,
                flexGrow: 0
              }}>
              <Participants />
            </div>
          </div>
          <div style={{
            position: 'absolute',
            bottom: 0
          }}>
            <Controls />
          </div>
        </Paper>
      </div>
    );
  }
});

module.exports = Chat;
