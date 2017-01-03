/**********************************************************************/
/*************************Pager 自动分页组件*****************************/
/**********************************************************************/
;(function(Pager) {

    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(Pager);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Pager();
    } else {
        window.Pager = Pager();
    }

})(function() {

    function Pager(selector, option) {

        this.el = this.queryElements(selector);

        this.isLoading = false;
        this.hasMore = false;
        this.pageNo = 1;

        // 元素在可视区位置，符合其中一个条件就会触发加载机制
        this.option = option || {};
        this.top = this.option.top || 0; //元素在顶部伸出的距离才加载
        this.right = this.option.right || 0; //元素在右边伸出的距离才加载
        this.bottom = this.option.bottom || 0; //元素在底部伸出的距离才加载
        this.left = this.option.left || 0; //元素在左边伸出的距离才加载
        // 获取数据列表
        this.fetchData = this.option.callback || function() { console.log('fetchData:::::::::::::::::::::::::::::::'); };
        // listen
        this.monitorEvents = [
            'DOMContentLoaded', 'load', 'click',
            'touchstart', 'touchend', 'haschange',
            'online', 'pageshow', 'popstate',
            'resize', 'storage', 'mousewheel',
            'scroll'
        ];

        this.init();

    }

    Pager.prototype.init = function() {
        var self = this;
        self.eachDOM = self.eachDOM.bind(this);
        self.addEventsListener(self.monitorEvents);
    }

    Pager.prototype.addEventsListener = function(events) {
        var self = this;
        for (var i = 0, len = events.length; i < len; i++) {
            window.addEventListener(events[i], self.eachDOM, false);
        }
        self.eachDOM();
    };

    Pager.prototype.removeEventsListener = function() {
        var eventList = this.monitorEvent;
        for (let i = 0; i < eventList.length; i++) {
            window.removeEventListener(eventList[i], this.eachDOM, false);
        }
    };

    /**
     * 遍历DOM是否符合加载条件
     * @return {[type]} [description]
     */
    Pager.prototype.eachDOM = function() {
        if (this.isLoading) return;

        for (var i = 0, len = this.el.length; i < len; i++) {
            if (this.isInCurrentScreen(this.el[i])) {
                // console.log('getNextPage:::::::::::::::::::::::::::::::::::::::');
                this.execute();
                return;
            }
        }

    }

    Pager.prototype.execute = function() {
        var self = this;

        self.isLoading = true; // 开始执行execute
console.log('SELF PageNo in:::'  + self.pageNo);
        self.fetchData(self.pageNo, function(pageNo) {
          self.pageNo = pageNo;

          self.isLoading = false;

console.log('SELF PageNo out:::'  + self.pageNo);
        });
    };


    /**
     * 判断元素是否在可视区
     * @param  {[type]} el [description]
     * @return {[type]}    [description]
     */
    Pager.prototype.isInCurrentScreen = function(el) {

        let bcr = el.getBoundingClientRect(); //取得元素在可视区的位置
        let mw = el.offsetWidth; //元素自身宽度
        let mh = el.offsetHeight; //元素自身的高度
        let w = window.innerWidth; //视窗的宽度
        let h = window.innerHeight; //视窗的高度
        let boolX = (!((bcr.right - this.left) <= 0 && ((bcr.left + mw) - this.left) <= 0) && !((bcr.left + this.right) >= w && (bcr.right + this.right) >= (mw + w))); //上下符合条件
        let boolY = (!((bcr.bottom - this.top) <= 0 && ((bcr.top + mh) - this.top) <= 0) && !((bcr.top + this.bottom) >= h && (bcr.bottom + this.bottom) >= (mh + h))); //上下符合条件

        return !!(el.width != 0 && el.height != 0 && boolX && boolY);

    }

    Pager.prototype.queryElements = function(selector) {
        if (!selector) {
            new Error('Selector not found...');
            return;
        }
        // console.log('selector', selector);
        switch (typeof selector) {
            case 'string':
                return document.querySelectorAll(selector);
            case 'object':
                if (Object.prototype.toString.call(selector) === '[object Array]') {
                    return selector;
                } else {
                    return [selector];
                }
        }
    }

    return Pager;

})
