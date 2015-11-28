/// <reference path="../Keys" />

module SevenWonders {

	export interface ScoreboardCellProps {
		children?: any;
		isEditable: boolean;
		player?: Player;
		category?: Category;
		value?: string;
	}

	export interface ScoreboardCellState {
		isEditing: boolean;
	}

	export class ScoreboardCell extends React.Component<ScoreboardCellProps, ScoreboardCellState> {

		constructor(props: ScoreboardCellProps) {
			super(props);

			this.state = {
				isEditing: false
			}
		}

		onFocus = (ev: React.FocusEvent) => {
			this.setState({
				isEditing: true
			});
		}

		onBlur = (ev: React.FocusEvent) => {
			this.setState({
				isEditing: false
			});

			let cellValue = parseInt($(this.refs['cellInput']).val(), 10);
			if (!isNaN(cellValue)) {
				this.props.player.scores[this.props.category.category] = cellValue;
				this.props.player.onUpdate();
			}
		}

		onKeyDown = (ev: React.KeyboardEvent) => {
			if (ev.which === Key.UpArrow) {
				console.log('up arrow');
			} else if (ev.which === Key.DownArrow) {
				console.log('down arrow');
			} else if (ev.which === Key.LeftArrow) {
				console.log('left arrow');
			} else if (ev.which === Key.RightArrow) {
				console.log('right arrow');
			} else if (ev.which === Key.Enter) {
				console.log('enter');
			} else if (ev.which === Key.Escape) {
				console.log('escape');
				$(this.refs["cellInput"]).val(this.props.value);
				$(ev.target).blur();
			}
		}

		componentDidUpdate = (prevProps: ScoreboardCellProps, prevState: ScoreboardCellState) => {
			$(this.refs["cellInput"]).focus();
		}

		render() {
			if (this.props.isEditable) {
				if (this.state.isEditing) {
					return (
						<td>
							<input ref="cellInput" onBlur={this.onBlur} onKeyDown={this.onKeyDown} />
						</td>
					);
				} else {
					return (
						<td tabIndex={0} onFocus={this.onFocus}>{this.props.player.scores[this.props.category.category]}</td>
					);
				}
			} else {
				return (
					<td>{this.props.value}</td>
				);
			}
		}
	}
}