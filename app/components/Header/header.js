import React, {Component} from 'react';
import './Header.less';

/**
 * Header Stateless Component
 */
const Header = ({title, back, option}) => {

  const backHandler = () => {
    history.back()
  }

  return <div className="ost-header">
    <div className="ost-header-left" onClick={ back || backHandler }>返回</div>
    <div className="ost-header-main">{title}</div>
    <div className="ost-header-right"
      onClick={ option && option.handler ? option.handler : '' }>{ option && option.text ? option.text : '' }
    </div>
  </div>

}

Header.propTypes = {
  title: React.PropTypes.string,
  back: React.PropTypes.func,
  option: React.PropTypes.object,
}

export default Header;
