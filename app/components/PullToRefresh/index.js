import React, { Component } from 'react';
import WebPullToRefresh from '../../utils/wptr.1.1';

export default class PullToRefresh extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialized: false
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh() {
    return new Promise((resolve, reject) => {
      this.props.onRefresh(resolve, reject);
    });
  }

  init() {
    if (!this.state.initialized) {
      WebPullToRefresh().init({
        contentEl: this.refs.refresh,
        ptrEl: this.refs.ptr,
        bodyEl: this.refs.body,
        distanceToRefresh: this.props.distanceToRefresh || undefined,
        loadingFunction: this.handleRefresh,
        resistance: this.props.resistance || undefined,
        hammerOptions: this.props.hammerOptions || undefined
      });
      this.setState({
        initialized: true
      });
    }
  }

  componentDidMount() {
    if (!this.props.disabled) {
      this.init();
    }
  }

  componentDidUpdate() {
    if (!this.props.disabled) {
      this.init();
    }
  }

  render() {
    const {
      children,
      disabled,
      distanceToRefresh,
      hammerOptions,
      icon,
      loading,
      onRefresh,
      resistance,
      ...rest
    } = this.props;

    if (disabled) {
      return (
        <div {...rest}>
          {children}
        </div>
      );
    }

    return (
      <div ref="body" {...rest}>
        <div ref="ptr" className="ptr-element">
          {icon || <span className="genericon genericon-next"></span>}
          {loading ||
            <div className="loading">
              <span className="loading-ptr-1"></span>
              <span className="loading-ptr-2"></span>
              <span className="loading-ptr-3"></span>
           </div>}
        </div>
        <div ref="refresh" className="refresh-view">
          {children}
        </div>
      </div>
    );
  }
}

PullToRefresh.propTypes = {
  onRefresh: React.PropTypes.func.isRequired,
  icon: React.PropTypes.element,
  loading: React.PropTypes.element,
  disabled: React.PropTypes.bool,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  distanceToRefresh: React.PropTypes.number,
  resistance: React.PropTypes.number,
  hammerOptions: React.PropTypes.object
};
