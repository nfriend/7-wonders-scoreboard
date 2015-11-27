module SevenWonders {

	export interface ScoreboardContainerProps {
		players: Array<Player>;
		children?: any;
		categories: Array<Category>;
	}

	export class ScoreboardContainer extends React.Component<ScoreboardContainerProps, ScoreboardContainerProps> {

		constructor(props: ScoreboardContainerProps) {
			super(props);
		}		

		render() {
			let createPlayerHeader = (player: Player, index: number) => {
				return <th key={player.name}>{player.name}</th>
			};
			
			let createScoreRow = (category: Category, index: number) => {
				return <ScoreboardRow players={this.props.players} category={category} />	
			};
			
			return (
				<table className="table score-table">
					<thead>
						<tr>
							<th>Category</th>
							{this.props.players.map(createPlayerHeader)}
						</tr>
					</thead>
					<tbody>
						{this.props.categories.map(createScoreRow)}
						<ScoreboardTotalRow players={this.props.players} />
					</tbody>
				</table>
			);
		}
	}
}