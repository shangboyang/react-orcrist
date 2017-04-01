import React, { Component } from 'react' 
import styles from './style.less'

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

	handleChange = (price) => {
		this.setState({
			price: price
		})
	}

  render() {
		return (
		  <div>
		    <Item changePrice={this.handleChange}/>
		    <div className='item'>{this.state.price}</div>
		  </div>
		)
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
  }

  state = {
  	names: ["Tom","Li Lei","Han Meimei"],
    values: ["1","2","3"],
    selectName: '',
    prices: '0'
  }

  handleChange = (e) => {

    let value = e.target.value;
    let price = 800;
    
    if (value == "1"){
      price = 0
    } else {
      price = (value - 1) * price
    }
    
    this.setState({
      selectName: value,
      prices: price
    })
    
    this.props.changePrice(price)
  }

  render() {
    
    let options = [];
    
    for (let option in this.state.names) {
      options.push(
        <option key={this.state.values[option]} value={this.state.values[option]}> {this.state.names[option]}</option>
      )
    };

    return (
      <div className={styles.item}>
          <select className={styles.select} onChange={this.handleChange.bind(this)}> 
           {options}
          </select>
      </div>
    )
  }
}