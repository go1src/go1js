"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class OneNav extends React.Component {
    constructor(props) {
        super(props);
        this.model = props.model;
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "In Navigation",
                this.model)));
    }
}
exports.default = OneNav;
