import React, {Component} from 'react';
import './style.less';

/**
 * Header Stateless Component
 */
const Header = ({title, back, option, type}) => {

  const backHandler = () => {
    history.back()
  }

  return <div className={"ost-header " + type}>
      <div className="hd-top"></div>
      <div className="hd-cnt">
        <div className="ost-header-left" onClick={ back || backHandler }>返回</div>
        <div className="ost-header-main">{title}</div>
        <div className="ost-header-right"
          onClick={ option && option.handler ? option.handler : '' }>{ option && option.text ? option.text : '' }
        </div>
     </div>
  </div>

}

Header.propTypes = {
  title: React.PropTypes.string,
  back: React.PropTypes.func,
  option: React.PropTypes.object,
}

export default Header;
