
export interface App {
  features: FeatureList;
  nav: Nav;
}

export interface View {

}

export interface ViewModel {

}

export interface FeatureList {
  [feature: string]: AppFeature;
}

export interface AppConfig extends FeatureList {

}

export interface NavItem {
  text: string;
  pathname: string;
  hint?: string;
}

export interface NavItemAction<ActionType> extends NavItem {
  action: ActionType;
}

export interface Nav extends NavItem {
  items: NavItem[];
}

// export interface NavList {
//   [key: string]: NavItem[];
// }

// export interface AppFeature {
//   command: CommandHandler;
//   view: View;
//   model: ViewModel;
// }
export interface AppFeature {
  component: string;
  library?: string;
  pathname: string;
}

export interface Config<T> {
  version: string;
  item: T;
}

export interface FeatureConfig extends Config<AppFeature> {

}

export interface ViewReference extends Config<View> {

}