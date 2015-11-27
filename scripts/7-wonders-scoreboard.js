var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SevenWonders;
(function (SevenWonders) {
    var SevenWondersContainer = (function (_super) {
        __extends(SevenWondersContainer, _super);
        function SevenWondersContainer(props) {
            _super.call(this, props);
            this.players = ['Nathan', 'Derek', 'Emily', 'Jill', 'Terry'];
        }
        SevenWondersContainer.prototype.render = function () {
            return (React.createElement("div", {"className": "container"}, React.createElement(SevenWonders.SevenWondersHeader, null), React.createElement("hr", null), React.createElement(SevenWonders.ScoreboardContainer, {"players": this.players})));
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
            this.state = {
                currentUrl: null
            };
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
            };
        }
        ScoreboardContainer.prototype.render = function () {
            var _this = this;
            var createPlayerHeader = function (playerName, index) {
                return React.createElement("th", {"key": playerName}, playerName);
            };
            var createScoreRow = function (category, index) {
                return React.createElement(SevenWonders.ScoreboardRow, {"players": _this.props.players, "category": category});
            };
            return (React.createElement("table", {"className": "table score-table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Category"), this.props.players.map(createPlayerHeader))), React.createElement("tbody", null, this.state.categories.map(createScoreRow))));
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
            var createCell = function (playerName, index) {
                return React.createElement(SevenWonders.ScoreboardCell, {"isEditable": true, "value": 73});
            };
            return (React.createElement("tr", {"className": this.props.category.categoryClass + ' category-row'}, React.createElement(SevenWonders.ScoreboardCell, {"isEditable": false, "value": this.props.category.name}), this.props.players.map(createCell)));
        };
        return ScoreboardRow;
    })(React.Component);
    SevenWonders.ScoreboardRow = ScoreboardRow;
})(SevenWonders || (SevenWonders = {}));
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
                    return (React.createElement("td", {"tabIndex": 0, "onFocus": this.onFocus}, this.props.value));
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
/// <reference path="./components/ScoreboardCell" />
var SevenWonders;
(function (SevenWonders) {
    ReactDOM.render(React.createElement(SevenWonders.SevenWondersContainer, null), document.getElementById('react-container'));
})(SevenWonders || (SevenWonders = {}));
//# sourceMappingURL=7-wonders-scoreboard.js.map