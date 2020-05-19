import React, { Component } from 'react';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: undefined
    };
  }

  componentDidMount() {
    this.countDown()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  supplyTime = (n) => {
    return n < 10 ? '0' + n : n;
  }

  countDown = () => {
    let that = this
    that.time = setInterval(() => {
      //当前时间
      let startTime = new Date();
      let { endTime } = that.props
      //算出中间差，以毫秒数返回.
      let countDownTime = (new Date(endTime).getTime() - startTime.getTime());
      if (countDownTime < 1000) {
        clearTimeout(that.timer);
        let formatTime = ''
        that.setData({
          time: formatTime
        })
      } else {
        //获取天数
        let oDay = parseInt(countDownTime / 1000 / 60 / 60 / 24);
        //获取小时数
        let oHour = parseInt(countDownTime / 1000 / 60 / 60 % 24);
        //获取分钟数
        let oMinute = parseInt(countDownTime / 1000 / 60 % 60);
        //获取秒数
        let oSecond = parseInt(countDownTime / 1000 % 60);
        //输出时间
        let formatTime = that.supplyTime(oDay) + '天' + that.supplyTime(oHour) + '时' + that.supplyTime(oMinute) + '分' + that.supplyTime(oSecond) + '秒';
        that.setState({
          time: formatTime
        })
      }
    }, 1000)
  }

  render() {
    let { endTime, ...restProps } = this.props
    return (
      <div {...restProps}>
        {this.state.time}
      </div>
    )
  }
}