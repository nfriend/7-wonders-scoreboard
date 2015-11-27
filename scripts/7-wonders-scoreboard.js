var SevenWonders;
(function (SevenWonders) {
    (function (Key) {
        Key[Key["UpArrow"] = 38] = "UpArrow";
        Key[Key["DownArrow"] = 40] = "DownArrow";
        Key[Key["LeftArrow"] = 37] = "LeftArrow";
        Key[Key["RightArrow"] = 39] = "RightArrow";
        Key[Key["Enter"] = 13] = "Enter";
        Key[Key["Escape"] = 27] = "Escape";
    })(SevenWonders.Key || (SevenWonders.Key = {}));
    var Key = SevenWonders.Key;
})(SevenWonders || (SevenWonders = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var update = React.addons.update;
var SevenWonders;
(function (SevenWonders) {
    var Score = (function () {
        function Score() {
            var _this = this;
            this.money = 0;
            this.commerce = 0;
            this.military = 0;
            this.science = 0;
            this.guilds = 0;
            this.victoryPoints = 0;
            this.wonders = 0;
            this.total = function () {
                return _this.money + _this.commerce + _this.military + _this.science + _this.guilds + _this.victoryPoints + _this.wonders;
            };
        }
        return Score;
    })();
    SevenWonders.Score = Score;
    var SevenWondersContainer = (function (_super) {
        __extends(SevenWondersContainer, _super);
        function SevenWondersContainer(props) {
            var _this = this;
            _super.call(this, props);
            this.addPlayer = function () {
                _this.setState({
                    players: update(_this.state.players, { $push: [{ name: 'New player', scores: new Score() }] })
                });
            };
            this.deletePlayer = function (player) {
                var index = _this.state.players.indexOf(player);
                _this.setState({
                    players: update(_this.state.players, { $splice: [[index, 1]] })
                });
            };
            var state = {
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
            ['Nathan', 'Emily', 'Derek', 'Jill', 'Terry'].forEach(function (name) {
                state.players.push({
                    name: name,
                    scores: new Score()
                });
            });
            this.state = state;
        }
        SevenWondersContainer.prototype.render = function () {
            return (React.createElement("div", {"className": "container"}, React.createElement(SevenWonders.SevenWondersHeader, null), React.createElement("hr", null), React.createElement(SevenWonders.ScoreboardContainer, {"players": this.state.players, "categories": this.state.categories, "deletePlayer": this.deletePlayer}), React.createElement("button", {"onClick": this.addPlayer}, "Add Player")));
        };
        return SevenWondersContainer;
    })(React.Component);
    SevenWonders.SevenWondersContainer = SevenWondersContainer;
})(SevenWonders || (SevenWonders = {}));
var SevenWonders;
(function (SevenWonders) {
    var SevenWondersHeader = (function (_super) {
        __extends(SevenWondersHeader, _super);
        function SevenWondersHeader(props) {
            _super.call(this, props);
        }
        SevenWondersHeader.prototype.render = function () {
            return (React.createElement("div", null, React.createElement("div", {"className": "title-container"}, React.createElement("h1", null, "Seven Wonders Scoreboard")), React.createElement("div", {"className": "cleared"})));
        };
        return SevenWondersHeader;
    })(React.Component);
    SevenWonders.SevenWondersHeader = SevenWondersHeader;
})(SevenWonders || (SevenWonders = {}));
var SevenWonders;
(function (SevenWonders) {
    var ScoreboardContainer = (function (_super) {
        __extends(ScoreboardContainer, _super);
        function ScoreboardContainer(props) {
            _super.call(this, props);
        }
        ScoreboardContainer.prototype.render = function () {
            var _this = this;
            var createPlayerHeader = function (player, index) {
                return (React.createElement("th", {"key": player.name}, React.createElement("span", {"className": "pull-left"}, player.name), React.createElement("span", {"className": "pull-left close-button", "onClick": function () { _this.props.deletePlayer(player); }}, "  ", React.createElement("i", {"className": "fa fa-close"}))));
            };
            var createScoreRow = function (category, index) {
                return React.createElement(SevenWonders.ScoreboardRow, {"players": _this.props.players, "category": category});
            };
            return (React.createElement("table", {"className": "table score-table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Category"), this.props.players.map(createPlayerHeader))), React.createElement("tbody", null, this.props.categories.map(createScoreRow), React.createElement(SevenWonders.ScoreboardTotalRow, {"players": this.props.players}))));
        };
        return ScoreboardContainer;
    })(React.Component);
    SevenWonders.ScoreboardContainer = ScoreboardContainer;
})(SevenWonders || (SevenWonders = {}));
var SevenWonders;
(function (SevenWonders) {
    var ScoreboardRow = (function (_super) {
        __extends(ScoreboardRow, _super);
        function ScoreboardRow(props) {
            _super.call(this, props);
        }
        ScoreboardRow.prototype.render = function () {
            var _this = this;
            var createCell = function (player, index) {
                return React.createElement(SevenWonders.ScoreboardCell, {"isEditable": true, "player": player, "category": _this.props.category});
            };
            return (React.createElement("tr", {"className": this.props.category.categoryClass + ' category-row'}, React.createElement(SevenWonders.ScoreboardCell, {"isEditable": false, "value": this.props.category.displayName}), this.props.players.map(createCell)));
        };
        return ScoreboardRow;
    })(React.Component);
    SevenWonders.ScoreboardRow = ScoreboardRow;
})(SevenWonders || (SevenWonders = {}));
var SevenWonders;
(function (SevenWonders) {
    var ScoreboardTotalRow = (function (_super) {
        __extends(ScoreboardTotalRow, _super);
        function ScoreboardTotalRow(props) {
            _super.call(this, props);
        }
        ScoreboardTotalRow.prototype.render = function () {
            var _this = this;
            var createCell = function (player, index) {
                // not how this should be done.
                player.onUpdate = function () {
                    _this.forceUpdate();
                };
                return React.createElement(SevenWonders.ScoreboardCell, {"isEditable": false, "value": player.scores.total().toString()});
            };
            return (React.createElement("tr", {"className": 'total category-row'}, React.createElement(SevenWonders.ScoreboardCell, {"isEditable": false, "value": 'Total'}), this.props.players.map(createCell)));
        };
        return ScoreboardTotalRow;
    })(React.Component);
    SevenWonders.ScoreboardTotalRow = ScoreboardTotalRow;
})(SevenWonders || (SevenWonders = {}));
/// <reference path="../Keys" />
var SevenWonders;
(function (SevenWonders) {
    var ScoreboardCell = (function (_super) {
        __extends(ScoreboardCell, _super);
        function ScoreboardCell(props) {
            var _this = this;
            _super.call(this, props);
            this.onFocus = function (ev) {
                _this.setState({
                    isEditing: true
                });
            };
            this.onBlur = function (ev) {
                _this.setState({
                    isEditing: false
                });
                var cellValue = parseInt($(_this.refs['cellInput']).val(), 10);
                if (!isNaN(cellValue)) {
                    _this.props.player.scores[_this.props.category.category] = cellValue;
                    _this.props.player.onUpdate();
                }
            };
            this.onKeyDown = function (ev) {
                if (ev.which === SevenWonders.Key.UpArrow) {
                    console.log('up arrow');
                }
                else if (ev.which === SevenWonders.Key.DownArrow) {
                    console.log('down arrow');
                }
                else if (ev.which === SevenWonders.Key.LeftArrow) {
                    console.log('left arrow');
                }
                else if (ev.which === SevenWonders.Key.RightArrow) {
                    console.log('right arrow');
                }
                else if (ev.which === SevenWonders.Key.Enter) {
                    console.log('enter');
                }
                else if (ev.which === SevenWonders.Key.Escape) {
                    console.log('escape');
                    $(ev.target).blur();
                }
            };
            this.componentDidUpdate = function (prevProps, prevState) {
                $(_this.refs["cellInput"]).focus();
            };
            this.state = {
                isEditing: false
            };
        }
        ScoreboardCell.prototype.render = function () {
            if (this.props.isEditable) {
                if (this.state.isEditing) {
                    return (React.createElement("td", null, React.createElement("input", {"ref": "cellInput", "onBlur": this.onBlur, "onKeyDown": this.onKeyDown})));
                }
                else {
                    return (React.createElement("td", {"tabIndex": 0, "onFocus": this.onFocus}, this.props.player.scores[this.props.category.category]));
                }
            }
            else {
                return (React.createElement("td", null, this.props.value));
            }
        };
        return ScoreboardCell;
    })(React.Component);
    SevenWonders.ScoreboardCell = ScoreboardCell;
})(SevenWonders || (SevenWonders = {}));
/// <reference path="../typings/react/react" />
/// <reference path="../typings/react-dom/react-dom" />
/// <reference path="../typings/jquery/jquery" />
/// <reference path="./components/SevenWondersContainer" />
/// <reference path="./components/SevenWondersHeader" />
/// <reference path="./components/ScoreboardContainer" />
/// <reference path="./components/ScoreboardRow" />
/// <reference path="./components/ScoreboardTotalRow" />
/// <reference path="./components/ScoreboardCell" />
var SevenWonders;
(function (SevenWonders) {
    ReactDOM.render(React.createElement(SevenWonders.SevenWondersContainer, null), document.getElementById('react-container'));
})(SevenWonders || (SevenWonders = {}));
//# sourceMappingURL=7-wonders-scoreboard.js.map