module SevenWonders {

	export interface ScoreboardContainerProps {
		players: Array<string>;
		children?: any;
	}
	
	export interface ScoreboardContainerState {
		categories: Array<Category>;
	}
	
	export interface Category {
		name: string;
		categoryClass: string;
	}

	export class ScoreboardContainer extends React.Component<ScoreboardContainerProps, ScoreboardContainerState> {

		constructor(props: ScoreboardContainerProps) {
			super(props);
			
			this.state = {
				categories: [
					{ name: 'Money', categoryClass: 'money' },
					{ name: 'Commerce', categoryClass: 'commerce' },
					{ name: 'Military', categoryClass: 'military' },
					{ name: 'Science', categoryClass: 'science' },
					{ name: 'Guilds', categoryClass: 'guilds' },
					{ name: 'Victory Points', categoryClass: 'victory-points' },
					{ name: 'Wonders', categoryClass: 'wonders' },
				]
			}
		}		

		render() {
			let createPlayerHeader = (playerName: string, index: number) => {
				return <th>{playerName}</th>
			};
			
			let createScoreRow = (category: Category, index: number) => {
				return <ScoreboardRow players={this.props.players} category={category} />	
			};
			
			return (
				<table className="table">
					<thead>
						<tr>
							<th>Category</th>
							{this.props.players.map(createPlayerHeader)}
						</tr>
					</thead>
					<tbody>
						{this.state.categories.map(createScoreRow)}
					</tbody>
				</table>
			);
		}
	}
}