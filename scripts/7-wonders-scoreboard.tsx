/// <reference path="../typings/react/react" />
/// <reference path="../typings/react-dom/react-dom" />
/// <reference path="../typings/jquery/jquery" />
/// <reference path="./components/SevenWondersContainer" />
/// <reference path="./components/SevenWondersHeader" />
/// <reference path="./components/ScoreboardContainer" />
/// <reference path="./components/ScoreboardRow" />
/// <reference path="./components/ScoreboardTotalRow" />
/// <reference path="./components/ScoreboardCell" />

module SevenWonders {
	ReactDOM.render(
		<SevenWondersContainer />,
		document.getElementById('react-container')
	);
}