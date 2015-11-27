module SevenWonders {

	export interface ScoreboardRowProps {
		players: Array<Player>;
		category: Category;
		children?: any;
	}

	export class ScoreboardRow extends React.Component<ScoreboardRowProps, ScoreboardRowProps> {

		constructor(props: ScoreboardRowProps) {
			super(props);
		}

		render() {
			let createCell = (player: Player, index: number) => {
				return <ScoreboardCell isEditable={true} player={player} category={this.props.category} />
			};
			
			return (
				<tr className={this.props.category.categoryClass + ' category-row'}>
					<ScoreboardCell isEditable={false} value={this.props.category.displayName} />
					{this.props.players.map(createCell)}
				</tr>
			);
		}
	}
}