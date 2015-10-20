//var React = require('react');
//var ReactDOM = require('react-dom');

'use strict';

var ChessBoardCell = React.createClass({
	displayName: 'ChessBoardCell',

	render: function render() {

		var background = '';

		if (this.props.isDark === true) {
			background = 'chess-board-cell-dark';
		} else {
			background = 'chess-board-cell';
		}

		return React.createElement(
			'span',
			{ className: background },
			this.props.y,
			this.props.x
		);
	}

});

var ChessBoardRow = React.createClass({
	displayName: 'ChessBoardRow',

	render: function render() {
		var columnValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		var isDark;

		if (this.props.x % 2 === 0) isDark = true;

		var rowCells = columnValues.map(function (c) {
			isDark = !isDark;

			return React.createElement(ChessBoardCell, { x: this.props.x, y: c, isDark: isDark });
		}, this);

		return React.createElement(
			'div',
			{ className: 'chess-board-row' },
			rowCells,
			React.createElement(
				'span',
				{ className: 'chess-board-row-label' },
				this.props.x
			)
		);
	}

});

var ChessBoard = React.createClass({
	displayName: 'ChessBoard',

	render: function render() {

		var columnValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		var rowValues = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
		var rows = rowValues.map(function (r) {
			return React.createElement(ChessBoardRow, { x: r });
		}, this);

		var columnLabels = columnValues.map(function (c) {
			return React.createElement(
				'span',
				{ className: 'chess-board-column-label' },
				c
			);
		}, this);

		return React.createElement(
			'div',
			{ className: 'chess-board' },
			rows,
			React.createElement(
				'div',
				{ className: 'chess-board-row' },
				columnLabels
			)
		);
	}
});

ReactDOM.render(React.createElement(ChessBoard, null), document.getElementById('content'));