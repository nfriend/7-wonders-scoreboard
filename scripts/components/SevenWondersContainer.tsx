module SevenWonders {

	export interface SevenWondersContainerProps {
		children?: any;
	}

	export class SevenWondersContainer extends React.Component<SevenWondersContainerProps, SevenWondersContainerProps> {

		constructor(props: SevenWondersContainerProps) {
			super(props);
		}
		
		players = ['Nathan', 'Derek', 'Emily', 'Jill', 'Terry'];

		render() {
			return (
				<div className="container">
					<SevenWondersHeader />
					<hr />
					<ScoreboardContainer players={this.players} />
				</div>
			);
		}
	}
}