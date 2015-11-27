module SevenWonders {

	export interface ScoreboardRowProps {
		players: Array<string>;
		category: Category;
		children?: any;
	}

	export class ScoreboardRow extends React.Component<ScoreboardRowProps, ScoreboardRowProps> {

		constructor(props: ScoreboardRowProps) {
			super(props);
		}		

		render() {
			let createCell = (playerName: string, index: number) => {
				return <ScoreboardCell isEditable={true} value={73} />
			};
			
			return (
				<tr className={this.props.category.categoryClass + ' category-row'}>
					<ScoreboardCell isEditable={false} value={this.props.category.name} />
					{this.props.players.map(createCell)}
				</tr>
			);
		}
	}
}