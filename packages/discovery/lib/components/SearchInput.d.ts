import { Theme, WithStyles } from '@material-ui/core';
import React from 'react';
declare const styles: (theme: Theme) => Record<"search" | "inputRoot" | "inputInput" | "searchIcon", import("@material-ui/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles/withStyles").CreateCSSProperties<{}>)>;
export interface SearchProps extends WithStyles<typeof styles> {
}
declare const _default: React.ComponentType<Pick<Pick<SearchProps, "classes"> & Pick<import("prop-types").InferProps<{}>, never>, never> & import("@material-ui/core").StyledComponentProps<"search" | "inputRoot" | "inputInput" | "searchIcon">>;
export default _default;
