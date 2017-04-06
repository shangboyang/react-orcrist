import React, { Component } from 'react'
import style from './style.css'

/*
	子组件向父组件传值
*/
export default class Flight extends Component{

	constructor(props) {
		super(props)
	}

	state = {
		price: 0
	}

	getCarsHandler = (price) => {

		this.setState({
			price: price
		})

	}

  render() {
		return (
		  <div>
		    <Item getCarsHandler={this.getCarsHandler}/>
		    <div className={style.item}>父Component: {this.state.price}</div>
		  </div>
		)
  }
}

class Item extends Component {

	constructor(props) {
    super(props);
  }

  state = {
		options: [
			{ name: '请选择车型', value: 0 },
			{ name: '兰博基尼', value: 5600 },
			{ name: '法拉利', value: 3300 },
			{ name: '玛莎拉蒂', value: 12000 },
			{ name: '蝙蝠车', value: 99999 },
		],
		selectedValue: 5600, // default 1
    prices: 0
  }

  changePriceHandler = (e) => {

    let value = e.target.value;
		let price = 0;

    if (e.target.name != '蝙蝠车') {
			price = 9 * value
		} else {
			price = 1 * value
		}

		this.setState({
			selectedValue: value, // single value
      prices: price
    })

		// call the Parents handler
    this.props.getCarsHandler(price)
  }

  render() {

    const options = this.state.options;

    return (
      <div className={style.item}>
          <select className={style.select} onChange={this.changePriceHandler}>
          {
						options.map((item, idx) => {
						 	return (
								<option key={item.value} value={item.value}>{item.name}</option>
							)
						})
				 	}
          </select>
					<div>子Component: {this.state.selectedValue}</div>
      </div>
    )
  }
}
