module SevenWonders {

	export interface ScoreboardCellProps {
		children?: any;
		isEditable: boolean;
		value: string|number;
	}

	export class ScoreboardCell extends React.Component<ScoreboardCellProps, ScoreboardCellProps> {

		constructor(props: ScoreboardCellProps) {
			super(props);
		}		

		render() {	
			return (
				<td>{this.props.value}</td>
			);
		}
	}
}