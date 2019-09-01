import {
  ArgumentAxis,
  Chart,
  LineSeries,
  SplineSeries,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({ splineValue: Math.sin(i) / i, lineValue: ((i / 15) ** 2.718) - 0.2, argument: i });
  }

  return data;
};

interface ReportState {
  data: any;
}

class ReportView extends React.PureComponent<{}, ReportState> {
  constructor(props) {
    super(props);
    this.state = {
      data: generateData(2.5, 12, 0.5),
    };
  }

  public render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <h1>Report</h1>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="line"
            valueField="lineValue"
            argumentField="argument"
          />
          <SplineSeries
            name="spline"
            valueField="splineValue"
            argumentField="argument"
          />
        </Chart>
      </Paper>
    );
  }
}

export default ReportView;
