module SevenWonders {

	export interface SevenWondersHeaderProps {
		children?: any;
	}
	
	export interface SevenWondersHeaderState {
	}

	export class SevenWondersHeader extends React.Component<SevenWondersHeaderProps, SevenWondersHeaderState> {
		constructor(props: SevenWondersHeaderProps) {
			super(props);
		}

		render() {
			return (
				<div>
					<div className="title-container">
						<h1>Seven Wonders Scoreboard</h1>
					</div>
					<div className="cleared"></div>
				</div>
			);
		}
	}
}