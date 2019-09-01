"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const Search_1 = __importDefault(require("@material-ui/icons/Search"));
const react_1 = __importDefault(require("react"));
const styles = (theme) => core_1.createStyles({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            backgroundColor: styles_1.fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '120',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '120',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
                placeholder: 'Search topics, courses and resources…',
            },
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
class SearchInput extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (react_1.default.createElement("div", { className: classes.search },
            react_1.default.createElement("div", { className: classes.searchIcon },
                react_1.default.createElement(Search_1.default, null)),
            react_1.default.createElement(core_1.InputBase, { placeholder: 'Search\u2026', classes: {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }, inputProps: { 'aria-label': 'search' } })));
    }
}
SearchInput.propTypes = {};
exports.default = core_1.withStyles(styles)(SearchInput);
