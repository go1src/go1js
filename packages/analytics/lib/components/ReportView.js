"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dx_react_chart_material_ui_1 = require("@devexpress/dx-react-chart-material-ui");
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const react_1 = __importDefault(require("react"));
const generateData = (start, end, step) => {
    const data = [];
    for (let i = start; i < end; i += step) {
        data.push({ splineValue: Math.sin(i) / i, lineValue: ((i / 15) ** 2.718) - 0.2, argument: i });
    }
    return data;
};
class ReportView extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: generateData(2.5, 12, 0.5),
        };
    }
    render() {
        const { data: chartData } = this.state;
        return (react_1.default.createElement(Paper_1.default, null,
            react_1.default.createElement("h1", null, "Report"),
            react_1.default.createElement(dx_react_chart_material_ui_1.Chart, { data: chartData },
                react_1.default.createElement(dx_react_chart_material_ui_1.ArgumentAxis, null),
                react_1.default.createElement(dx_react_chart_material_ui_1.ValueAxis, null),
                react_1.default.createElement(dx_react_chart_material_ui_1.LineSeries, { name: "line", valueField: "lineValue", argumentField: "argument" }),
                react_1.default.createElement(dx_react_chart_material_ui_1.SplineSeries, { name: "spline", valueField: "splineValue", argumentField: "argument" }))));
    }
}
exports.default = ReportView;
