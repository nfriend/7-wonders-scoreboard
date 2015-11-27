module SevenWonders {

	export interface ScoreboardTotalRowProps {
		players: Array<Player>;
		children?: any;
	}

	export class ScoreboardTotalRow extends React.Component<ScoreboardTotalRowProps, ScoreboardTotalRowProps> {

		constructor(props: ScoreboardTotalRowProps) {
			super(props);
		}

		render() {
			let createCell = (player: Player, index: number) => {
				
				// not how this should be done.
				player.onUpdate = () => {
					this.forceUpdate();
				}
				
				return <ScoreboardCell isEditable={false} value={ player.scores.total().toString() } />
			};

			return (
				<tr className={'total category-row'}>
					<ScoreboardCell isEditable={false} value={'Total'} />
					{this.props.players.map(createCell) }
				</tr>
			);
		}
	}
}