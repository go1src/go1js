import * as React from 'react';

class OneNav extends React.Component {
  public model: any;
  constructor(props) {
    super(props);
    this.model = props.model;
  }

  public render() {
    return (
      <div>
        <h1>In Navigation{this.model}</h1>
      </div>
    );
  }
}

export default OneNav;