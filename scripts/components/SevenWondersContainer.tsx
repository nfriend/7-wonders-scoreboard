module SevenWonders {

	export interface SevenWondersContainerProps {
		children?: any;
	}
	
	export interface SevenWondersContainerState {
		categories?: Array<Category>;
		players?: Array<Player>;
	}
	
	export interface Category {
		category: string;
		displayName: string
		categoryClass: string;
	}
	
	export interface Player {
		name: string;
		scores: Score;
		onUpdate: () => void;
	}
	
	export class Score {
		money: number = 0;
		commerce: number = 0;
		military: number = 0;
		science: number = 0;
		guilds: number = 0;
		victoryPoints: number = 0;
		wonders: number = 0;
		
		total = () => {
			return this.money + this.commerce + this.military + this.science + this.guilds + this.victoryPoints + this.wonders;
		}
	}

	export class SevenWondersContainer extends React.Component<SevenWondersContainerProps, SevenWondersContainerState> {

		constructor(props: SevenWondersContainerProps) {
			super(props);
			
			let state = {
				categories: [
					{ displayName: 'Money', categoryClass: 'money', category: 'money' },
					{ displayName: 'Commerce', categoryClass: 'commerce', category: 'commerce' },
					{ displayName: 'Military', categoryClass: 'military', category: 'military' },
					{ displayName: 'Science', categoryClass: 'science', category: 'science'},
					{ displayName: 'Guilds', categoryClass: 'guilds', category: 'guilds' },
					{ displayName: 'Victory Points', categoryClass: 'victory-points', category: 'victoryPoints' },
					{ displayName: 'Wonders', categoryClass: 'wonders', category: 'wonders' }
				],
				players: []
			};
			
			['Nathan', 'Emily', 'Derek', 'Jill', 'Terry'].forEach(name => {
				state.players.push({
					name: name,
					scores: new Score()
				});
			});
			
			this.state = state;
		}
		
		deletePlayer = (player: Player) => {
			let index = this.state.players.indexOf(player);
			
			this.setState({
				players: React.addons.update(this.state.players, { $splice: [[index, 1]] })
			});
		}

		render() {
			return (
				<div className="container">
					<SevenWondersHeader />
					<hr />
					<ScoreboardContainer players={this.state.players} categories={this.state.categories} deletePlayer={this.deletePlayer} />
				</div>
			);
		}
	}
}