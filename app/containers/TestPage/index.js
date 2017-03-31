import React, { Component } from 'react' 
import './style.less'

export default class Flight extends Component{
	constructor(props) {
		super(props)
	}

  render() {
		return (
		  <div>
		    <Item />
		  </div>
		)
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["（1）免费行李","2","3"],
      values: ["1","2","3"],
      selectName: '',
      prices: '0'
    }
  }

  handleChange = (e) => {
    
    var value = e.target.value;
    var price = 800;
    if(value == "1"){
      price = 0
    }else{
      price = (value - 1) * price
    }
    this.setState({
      selectName: value,
      prices: price
    })
    //这个值怎么传给父组件
    console.log(price)
  }

  render() {
    var options = [];
    var prices = this.state.prices;
    for (var option in this.state.names) {
      options.push(
        <option key={this.state.values[option]} value={this.state.values[option]}> {this.state.names[option]}</option>
      )
    };
    return (

          <div className={styles.item}>
              <select className={styles.select} onChange={this.handleChange.bind(this)}> 
               {options}
              </select>
             <p>{prices}</p>
          </div>
        )
  }
}