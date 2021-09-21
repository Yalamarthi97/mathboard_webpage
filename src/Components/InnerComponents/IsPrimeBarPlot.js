import React from 'react'
import * as echarts from 'echarts';

export default function IsPrimeBarPlot() {


    let option;

    option = {
      title: {
        text: 'Prime Number??',
        subtext: 'Is the number a prime or not',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

let newPromise = new Promise((resolve) => {
    resolve()
})
// then asynchronously execute the initialization function of echarts
newPromise.then(() => {
    // This dom is the echarts icon display dom
    var chartDom = document.getElementById('main');

var myChart = echarts.init(chartDom);

option && myChart.setOption(option);
    
})
    return (
        <div>
            <div id="main" style={{width:'100%',height:'400px',paddingTop:'10px',paddingLeft:'25px'}}/>
        </div>
    )
}
