import React, { Component } from 'react'
import style from './style.less'

/*
	父子组件通信
*/
export default class SelectBox extends Component{

	constructor(props) {
		super(props) // es6 super关键字
	}

	state = {
		content: ''
	}
	// callback
	getCarsHandler = (price) => {

		const content = price >= 99999 ? '“我是布鲁斯韦恩老爷, 只有我的车是最棒的，其它车都是玩具！”' : '”这辆不错”'

		this.setState({
			content: content
		})

	}

	showMoreDetailHandler = () => {

		console.log('克里弗兰贝尔的蝙蝠侠最帅');

	}

  render() {

		return (
		  <div>
				<Item getCarsHandler={this.getCarsHandler} />
				<div className={style.parent} onClick={this.showMoreDetailHandler}>【父组件里的广告】：{this.state.content}</div>
		  </div>
		)
  }
}

class Item extends Component {

	constructor(props) {
    super(props);

		console.log('props', props);
  }

  state = {
		options: [
			{ name: '哪款车最酷', value: 0 },
			{ name: '兰博基尼', value: 5600 },
			{ name: '法拉利', value: 3300 },
			{ name: '玛莎拉蒂', value: 12000 },
			{ name: '蝙蝠车', value: 99999 },
		],
		selectedValue: 0, // default 1
  }

  changePriceHandler = (e) => {

    let value = e.target.value;

		this.setState({
			selectedValue: value, // single value
    })

		// call the Parents handler
   this.props.getCarsHandler(value)
  }

  render() {


    const options = this.state.options;

    return (
      <div className={style.item}>
          <select className={style.select} onChange={this.changePriceHandler}>
          {
						options.map((item, idx) => {
						 	return (
								<option key={idx} value={item.value}>{item.name}</option>
							)
						})
				 	}
          </select>
					<div className={style.child}>【子组件里的单价】：{this.state.selectedValue}</div>
      </div>
    )
  }
}
