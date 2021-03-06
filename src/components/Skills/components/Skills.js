import React from 'react'

import { Grid, Cell } from 'react-mdl'
import { browserHistory } from 'react-router'

import './Skills.scss'

import Highcharts from 'highcharts'
require('highcharts/highcharts-more.js')(Highcharts)

const ReactHighcharts = require('react-highcharts')

class Skills extends React.Component {
  componentDidMount () {
    let chart = this.refs.chart.getChart()
    let container = this.refs.container

    // I'm so sorry for that but ...
    setTimeout(() => chart.setSize(container.offsetWidth), 0)
  }

  render () {
    var config = {
      chart: {
        type: 'bubble',
        backgroundColor: null
      },
      exporting: {
        enabled: false
      },
      title: {
        text: '',
        style: {
          display: 'none'
        }
      },
      subtitle: {
        text: '',
        style: {
          display: 'none'
        }
      },
      xAxis: {
        lineColor: 'transparent',
        labels: {
          enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        labels: {
          enabled: false
        },
        title: {
          text: ''
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        bubble: {
          minSize: '20%',
          maxSize: '40%',
          dataLabels: {
            enabled: true,
            formatter: function () {
              return this.point.bubbleText
            }
          },
          marker: {
            lineWidth: 0
          }
        },
        series: {
          states: {
            hover: {
              enabled: false
            }
          }
        }
      },
      series: [
        {
          data: [
            { bubbleText: 'Docker', x: 1.5, y: 10, z: 0.8, marker: { fillColor: 'rgba(124, 181, 236, 0.498039)' } },
            { bubbleText: 'React.js', x: 1.65, y: 20, z: 0.9, marker: { fillColor: 'rgba(67, 67, 72, 0.498039)' } },
            { bubbleText: 'Django', x: 1.6, y: 40, z: 0.65, marker: { fillColor: 'rgba(144, 237, 125, 0.498039)' } },
            { bubbleText: 'Bash', x: 1.55, y: 20, z: 0.5, marker: { fillColor: 'rgba(247, 163, 92, 0.498039)' } },
            { bubbleText: 'Git', x: 1.81, y: 30, z: 0.6, marker: { fillColor: 'rgba(128, 133, 233, 0.498039)' } },
            {
              bubbleText: 'React Native',
              x: 1.68,
              y: 50,
              z: 0.7,
              marker: { fillColor: 'rgba(241, 92, 128, 0.498039)' }
            },
            { bubbleText: 'Redux', x: 1.75, y: 30, z: 0.6, marker: { fillColor: 'rgba(228, 211, 84, 0.498039)' } },
            { bubbleText: 'AWS', x: 1.8, y: 17, z: 0.4, marker: { fillColor: 'rgba(127, 140, 141,1.0)' } },
            { bubbleText: 'Node.js', x: 1.71, y: 15, z: 0.9, marker: { fillColor: 'rgba(155, 89, 182,1.0)' } },
            { bubbleText: 'CSS', x: 1.59, y: 15, z: 0.6, marker: { fillColor: 'rgba(145, 232, 225, 0.498039)' } },
            { bubbleText: 'TDD', x: 1.72, y: 37, z: 0.4, marker: { fillColor: 'rgba(236, 240, 241,1.0)' } },
            { bubbleText: 'REST API', x: 1.5, y: 35, z: 0.6, marker: { fillColor: 'rgba(241, 196, 15,1.0)' } },
            { bubbleText: 'Groovy', x: 1.55, y: 37, z: 0.4, marker: { fillColor: 'rgba(39, 174, 96,1.0)' } },
            { bubbleText: 'DevOps', x: 1.65, y: 37, z: 0.5, marker: { fillColor: 'rgba(247, 163, 92, 0.498039)' } }
          ],
          marker: {
            fillOpacity: 0.6
          }
        }
      ]
    }

    return (
      <Grid id='skills' className='skills' noSpacing>
        <Cell col={4} tablet={3} phone={4} className='left-skills'>
          <div className='section-title'>
            <div className='sliding'>Skills</div>
          </div>
        </Cell>

        <Cell col={8} tablet={5} phone={4} className='right-skills'>
          <div className='container' ref='container'>
            <ReactHighcharts config={config} ref='chart' />
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills
