## react-damon-countdown
###Installation
	npm i -S react-damon-countdown
react component
		
	import React, { Component } from 'react'
	import Countdown from 'react-damon-countdown'
	class Welcome extends Component {
	  constructor(props){
	    super(props)
	    this.state = {}
	  }
		render() {
			return(
				<Countdown endTime={'2020/5/20 24:00:00'} />
			)
		}
	}