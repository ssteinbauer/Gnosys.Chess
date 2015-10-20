//var React = require('react');
//var ReactDOM = require('react-dom');

var ChessBoardCell = React.createClass({

	render: function() {

		var background = '';

		if (this.props.isDark === true) {
			background = 'chess-board-cell-dark'
		} else {
			background = 'chess-board-cell'
		}		

		return (
			<span className={background}>
				{this.props.y}{this.props.x}
			</span>
		);
	}

});

var ChessBoardRow = React.createClass({

	render: function() {
		var columnValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];	
		var isDark;

		if (this.props.x % 2 === 0)
			isDark = true;

		var rowCells = columnValues.map(function(c) {
			isDark = !isDark;

			return (
				<ChessBoardCell x={this.props.x} y={c} isDark={isDark} />
			);
		}, this);

		return (
			<div className='chess-board-row'>
				{rowCells}
				<span className='chess-board-row-label'>
					{this.props.x}
				</span>
			</div>
		);
	}

})

var ChessBoard = React.createClass({
	render: function () {
	
		var columnValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];	
		var rowValues = [1, 2, 3, 4, 5, 6, 7, 8].reverse();	
		var rows = rowValues.map(function(r) {
			return (
				<ChessBoardRow x={r} />
			);
		}, this);
		
		var columnLabels = columnValues.map(function(c) {
			return (
				<span className='chess-board-column-label'>{c}</span>
			);
		}, this);


        return (
			<div className='chess-board'>
				{rows}
				<div className='chess-board-row'>
					{columnLabels}
				</div>
			</div>
		);
    }
});

ReactDOM.render(
	<ChessBoard />,
	document.getElementById('content')
);
