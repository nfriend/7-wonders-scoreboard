import update = React.addons.update;

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

	export class Player {

		static idCounter: number = 0;

		constructor(name: string, scores: Score) {
			this.id = Player.idCounter++;
			this.scores = scores;
			this.name = name;
		}

		name: string;
		scores: Score;
		onUpdate: () => void = () => { };
		id: number;
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

		private playersCookie: string = 'seven-wonders-players';

		constructor(props: SevenWondersContainerProps) {
			super(props);

			let state = {
				categories: [
					{ displayName: 'Money', categoryClass: 'money', category: 'money' },
					{ displayName: 'Commerce', categoryClass: 'commerce', category: 'commerce' },
					{ displayName: 'Military', categoryClass: 'military', category: 'military' },
					{ displayName: 'Science', categoryClass: 'science', category: 'science' },
					{ displayName: 'Guilds', categoryClass: 'guilds', category: 'guilds' },
					{ displayName: 'Victory Points', categoryClass: 'victory-points', category: 'victoryPoints' },
					{ displayName: 'Wonders', categoryClass: 'wonders', category: 'wonders' }
				],
				players: []
			};

			var playersFromCookie = Cookies.get(this.playersCookie);
			var players = playersFromCookie ? JSON.parse(playersFromCookie) as Array<string> : ['Player 1', 'Player 2', 'Player 3'];
			console.log(players);

			players.forEach(name => {
				state.players.push({
					name: name,
					scores: new Score()
				});
			});

			this.state = state;
		}

		addPlayer = () => {
			let newPlayers = update(this.state.players, { $push: [new Player('New Player', new Score())] });
			this.setState({
				players: newPlayers
			});
			this.updatePlayersCookie(newPlayers);
		}

		deletePlayer = (player: Player) => {
			let index = this.state.players.indexOf(player);
			let newPlayers = update(this.state.players, { $splice: [[index, 1]] });
			this.setState({
				players: newPlayers
			});
			this.updatePlayersCookie(newPlayers);
		}

		private updatePlayersCookie = (players: Array<Player>) => {
			Cookies.set(this.playersCookie, players.map(p => p.name), { expires: 365, path: '/' });
		}

		render() {
			return (
				<div className="container main-container">
					<SevenWondersHeader />
					<hr />
					<ScoreboardContainer players={this.state.players} categories={this.state.categories} deletePlayer={this.deletePlayer} />
					<i className="fa fa-plus" id="add-player-button" onClick={this.addPlayer} title="Add Player"></i>
				</div>
			);
		}
	}
}