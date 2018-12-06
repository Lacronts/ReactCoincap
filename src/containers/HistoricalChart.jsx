import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { formatCurrency } from '../utils';
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  Hint} from 'react-vis';

const style = {
  tooltip: {
    color: '#222',
  },
  chart: {
    touchAction: 'none',
    marginLeft: '5px',
  },
  nodata: {
    display: 'flex',
    justifyContent: 'center',
  }
}

class HistoricalChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: true,
      coords: [],
      crosshairValues: {x:0, y:0},
      width: 0,
      tickTotal: 0,
    };
    this.updateWindowDimension = this.updateWindowDimension.bind(this);
  }

  static getDerivedStateFromProps(nextProp){
    return nextProp;
  }

  componentDidUpdate(prevProps, prevState){
    if (!compareArray(this.state.data, prevState.data)) {
      this.setState({
        coords: getCoordsFromData(this.state.data)
      })
    }
  }

  componentDidMount(){
    this.updateWindowDimension();
    window.addEventListener('resize', this.updateWindowDimension);

    const { coords, data } = this.state;

    if (!coords.length) {
      this.setState({
        coords: getCoordsFromData(data)
      })
    }
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimension);
  }

  updateWindowDimension(){
    const width = window.innerWidth;
    const tickTotal = getTickTotal(width);

    this.setState({
      width: width,
      tickTotal: tickTotal,
    })
  }

  renderChart(){
    const { coords, width, crosshairValues, tickTotal } = this.state;

    return (
      <div>
        <XYPlot
          width={width-30}
          height={500}
          style={style.chart}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis
            tickTotal={tickTotal}
            tickFormat={v => getReadableDate(v)}
            tickLabelAngle={-20}
            tickSize={10}
            tickSizeOuter={0}
          />
        <YAxis
          left={30}
          tickFormat={v => formatCurrency(v)}
          tickSize={2}
          tickPadding={20}
          hideLine
        />
          <LineSeries
            curve="curveBasis"
            strokeStyle="solid"
            data={coords}
            onNearestX={(value) => {
              this.setState({crosshairValues: value});
            }
          }
          />
        {
        }
        <Hint value={crosshairValues}>
          <div style = {style.tooltip}>
            Date: <strong>{getReadableDate(crosshairValues.x)}</strong><br/>
            Price: <strong>{formatCurrency(crosshairValues.y)}</strong>
          </div>
        </Hint>
      </XYPlot>
      </div>
    )
  }

  render(){
    const { data } = this.state;
    if (data.length) return this.renderChart();
    return (
      <div style={style.nodata}>
        No historical Data...
      </div>
    )
  }
}

function getCoordsFromData(data){
  return data.map((day) => ({
    x: day.time,
    y: day.close,
  }));
};

function getReadableDate(date){
  return new Date(date*1000).toDateString();
};

function getTickTotal(width){
  if (width >= 1300) return 10;
  if (width >= 600 && width < 1300) return 6;
  if (width >= 200 && width < 600) return 2;
  return 10;
}

function compareArray(a1, a2){
    return a1.length === a2.length && a1.every((v,i)=>v === a2[i]);
}

export default HistoricalChart;
