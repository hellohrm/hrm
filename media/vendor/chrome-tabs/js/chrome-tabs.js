'use strict';

if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) { // Skip over if undefined or null
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (window, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['draggabilly'], function (Draggabilly) {
            return factory(window, Draggabilly);
        });
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
        module.exports = factory(window, require('draggabilly'));
    } else {
        window.ChromeTabs = factory(window, window.Draggabilly);
    }
})
(window, function (window, Draggabilly) {
    var TAB_CONTENT_MARGIN = 9;
    var TAB_CONTENT_OVERLAP_DISTANCE = 1;

    var TAB_OVERLAP_DISTANCE = TAB_CONTENT_MARGIN * 2 + TAB_CONTENT_OVERLAP_DISTANCE;

    var TAB_CONTENT_MIN_WIDTH = 24;
    var TAB_CONTENT_MAX_WIDTH = 240;

    var TAB_SIZE_SMALL = 84;
    var TAB_SIZE_SMALLER = 60;
    var TAB_SIZE_MINI = 48;

    var noop = function noop(_) { };

    var closest = function closest(value, array) {
        var closest = Infinity;
        var closestIndex = -1;

        array.forEach(function (v, i) {
            if (Math.abs(value - v) < closest) {
                closest = Math.abs(value - v);
                closestIndex = i;
            }
        });

        return closestIndex;
    };

    var tabTemplate = '\n    <div class="chrome-tab">\n      <div class="chrome-tab-dividers"></div>\n      <div class="chrome-tab-background">\n        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"/></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlink:href="#chrome-tab-geometry-left"/></symbol><clipPath id="crop"><rect class="mask" width="100%" height="100%" x="0"/></clipPath></defs><svg width="52%" height="100%"><use xlink:href="#chrome-tab-geometry-left" width="214" height="36" class="chrome-tab-geometry"/></svg><g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlink:href="#chrome-tab-geometry-right" width="214" height="36" class="chrome-tab-geometry"/></svg></g></svg>\n      </div>\n      <div class="chrome-tab-content">\n        <div class="chrome-tab-favicon"></div>\n        <div class="chrome-tab-title"></div>\n        <div class="chrome-tab-drag-handle"></div>\n        <div class="chrome-tab-close"></div>\n      </div>\n    </div>\n  ';

    var defaultTapProperties = {
        title: 'New tab',
        favicon: false
    };

    var instanceId = 0;

    var ChromeTabs = function () {
        function ChromeTabs() {
            _classCallCheck(this, ChromeTabs);
            this.draggabillies = [];
        }

        _createClass(ChromeTabs, [{
            key: 'init',
            value: function init(el, resizeCB) {
                this.resizeEvt = resizeCB;

                this.el = el;

                this.instanceId = instanceId;
                this.el.setAttribute('data-chrome-tabs-instance-id', this.instanceId);
                instanceId += 1;

                this.setupCustomProperties();
                this.setupStyleEl();
                this.setupEvents();
                this.layoutTabs();
                this.setupDraggabilly();
            }
        }, {
            key: 'emit',
            value: function emit(eventName, data) {
                try {
                    this.el.dispatchEvent(new CustomEvent(eventName, { detail: data }));
                } catch (err) {
                    var event;
                    if (typeof (Event) === 'function') {
                        event = new Event(eventName, { detail: data });
                    } else {
                        //event = document.createEvent('Event', { detail: data });
                        //event.initEvent(eventName, true, true);
                        event = document.createEvent('CustomEvent');
                        event.initCustomEvent(eventName, false, false,  data);
                    };
                    this.el.dispatchEvent(event);
                };
            }
        }, {
            key: 'setupCustomProperties',
            value: function setupCustomProperties() {
                this.el.style.setProperty('--tab-content-margin', TAB_CONTENT_MARGIN + 'px');
            }
        }, {
            key: 'setupStyleEl',
            value: function setupStyleEl() {
                this.styleEl = document.createElement('style');
                this.el.appendChild(this.styleEl);
            }
        }, {
            key: 'setupEvents',
            value: function setupEvents() {
                var _this = this;

                window.addEventListener('resize', function (_) {
                    if (_this.resizeEvt) _this.resizeEvt();
                    _this.cleanUpPreviouslyDraggedTabs();
                    _this.layoutTabs();
                });

                this.el.addEventListener('dblclick', function (event) {
                    if ([_this.el, _this.tabContentEl].includes(event.target)) _this.addTab();
                });

                this.tabEls.forEach(function (tabEl) {
                    return _this.setTabCloseEventListener(tabEl);
                });
            }
        }, {
            key: 'layoutTabs',
            value: function layoutTabs() {
                var _this2 = this;

                var tabContentWidths = this.tabContentWidths;

                this.tabEls.forEach(function (tabEl, i) {
                    var contentWidth = tabContentWidths[i];
                    var width = contentWidth + 2 * TAB_CONTENT_MARGIN;

                    tabEl.style.width = width + 'px';
                    tabEl.removeAttribute('is-small');
                    tabEl.removeAttribute('is-smaller');
                    tabEl.removeAttribute('is-mini');

                    if (contentWidth < TAB_SIZE_SMALL) tabEl.setAttribute('is-small', '');
                    if (contentWidth < TAB_SIZE_SMALLER) tabEl.setAttribute('is-smaller', '');
                    if (contentWidth < TAB_SIZE_MINI) tabEl.setAttribute('is-mini', '');
                });

                var styleHTML = '';
                this.tabPositions.forEach(function (position, i) {
                    styleHTML += '\n          .chrome-tabs[data-chrome-tabs-instance-id="' + _this2.instanceId + '"] .chrome-tab:nth-child(' + (i + 1) + ') {\n            transform: translate3d(' + position + 'px, 0, 0)\n          }\n        ';
                });
                this.styleEl.innerHTML = styleHTML;
            }
        }, {
            key: 'createNewTabEl',
            value: function createNewTabEl() {
                var div = document.createElement('div');
                div.innerHTML = tabTemplate;
                return div.firstElementChild;
            }
        }, {
            key: 'addTab',
            value: function addTab(tabProperties) {
                var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                var _ref$animate = _ref.animate;
                var animate = _ref$animate === undefined ? true : _ref$animate;
                var _ref$background = _ref.background;
                var background = _ref$background === undefined ? false : _ref$background;

                var tabEl = this.createNewTabEl();

                if (animate) {
                    tabEl.classList.add('chrome-tab-was-just-added');
                    setTimeout(function () {
                        return tabEl.classList.remove('chrome-tab-was-just-added');
                    }, 500);
                }

                tabProperties = Object.assign({}, defaultTapProperties, tabProperties);
                this.tabContentEl.appendChild(tabEl);
                this.setTabCloseEventListener(tabEl);
                this.updateTab(tabEl, tabProperties);
                this.emit('tabAdd', { tabEl: tabEl });
                if (!background) this.setCurrentTab(tabEl);
                this.cleanUpPreviouslyDraggedTabs();
                this.layoutTabs();
                this.setupDraggabilly();
            }
        }, {
            key: 'setTabCloseEventListener',
            value: function setTabCloseEventListener(tabEl) {
                var _this3 = this;

                tabEl.querySelector('.chrome-tab-close').addEventListener('click', function (_) {
                    _.preventDefault();
                    _.stopPropagation();
                    return _this3.removeTab(tabEl);
                });
            }
        }, {
            key: 'hasActiveTab',
            value: function hasActiveTab() {
                return !!this.activeTabEl;
            }
        }, {
            key: 'setCurrentTab',
            value: function setCurrentTab(tabEl) {
                var activeTabEl = this.activeTabEl;
                if (activeTabEl === tabEl) return;
                if (activeTabEl) activeTabEl.removeAttribute('active');
                tabEl.setAttribute('active', '');
                this.emit('activeTabChange', { tabEl: tabEl });
            }
        }, {
            key: 'removeTab',
            value: function removeTab(tabEl) {
                if (tabEl === this.activeTabEl) {
                    if (tabEl.nextElementSibling) {
                        this.setCurrentTab(tabEl.nextElementSibling);
                    } else if (tabEl.previousElementSibling) {
                        this.setCurrentTab(tabEl.previousElementSibling);
                    }
                }
                tabEl.parentNode.removeChild(tabEl);
                this.emit('tabRemove', { tabEl: tabEl });
                this.cleanUpPreviouslyDraggedTabs();
                this.layoutTabs();
                this.setupDraggabilly();
            }
        }, {
            key: 'updateTab',
            value: function updateTab(tabEl, tabProperties) {
                tabEl.querySelector('.chrome-tab-title').textContent = tabProperties.title;

                var faviconEl = tabEl.querySelector('.chrome-tab-favicon');
                if (tabProperties.tabicon) {
                    faviconEl.innerHTML = tabProperties.tabicon;
                    faviconEl.removeAttribute('hidden', '');
                } else if (tabProperties.favicon) {
                    faviconEl.style.backgroundImage = 'url(\'' + tabProperties.favicon + '\')';
                    faviconEl.removeAttribute('hidden', '');
                } else {
                    faviconEl.setAttribute('hidden', '');
                    faviconEl.removeAttribute('style');
                }

                if (tabProperties.id) {
                    tabEl.setAttribute('data-tab-id', tabProperties.id);
                }
            }
        }, {
            key: 'cleanUpPreviouslyDraggedTabs',
            value: function cleanUpPreviouslyDraggedTabs() {
                this.tabEls.forEach(function (tabEl) {
                    return tabEl.classList.remove('chrome-tab-was-just-dragged');
                });
            }
        }, {
            key: 'setupDraggabilly',
            value: function setupDraggabilly() {
                var _this4 = this;

                var tabEls = this.tabEls;
                var tabPositions = this.tabPositions;

                if (this.isDragging) {
                    this.isDragging = false;
                    this.el.classList.remove('chrome-tabs-is-sorting');
                    this.draggabillyDragging.element.classList.remove('chrome-tab-is-dragging');
                    this.draggabillyDragging.element.style.transform = '';
                    this.draggabillyDragging.dragEnd();
                    this.draggabillyDragging.isDragging = false;
                    this.draggabillyDragging.positionDrag = noop; // Prevent Draggabilly from updating tabEl.style.transform in later frames
                    this.draggabillyDragging.destroy();
                    this.draggabillyDragging = null;
                }

                this.draggabillies.forEach(function (d) {
                    return d.destroy();
                });

                tabEls.forEach(function (tabEl, originalIndex) {
                    tabEl.onclick = function (evt) {
                        evt.preventDefault();
                        evt.stopPropagation();
                        _this4.setCurrentTab(this);
                    };
                    //tabEl[window.addEventListener ? 'addEventListener' : 'attachEvent'](window.addEventListener ? 'click' : 'onclick', function (evt) {
                    //    evt.preventDefault();
                    //    _this4.setCurrentTab(tabEl);
                    //}, false);
                    //var originalTabPositionX = tabPositions[originalIndex];
                    //var draggabilly = new Draggabilly(tabEl, {
                    //    axis: 'x',
                    //    handle: '.chrome-tab-drag-handle',
                    //    containment: _this4.tabContentEl
                    //});

                    //_this4.draggabillies.push(draggabilly);

                    //draggabilly.on('pointerDown', function (_) {
                    //    _this4.setCurrentTab(tabEl);
                    //});

                    //draggabilly.on('dragStart', function (_) {
                    //    _this4.isDragging = true;
                    //    _this4.draggabillyDragging = draggabilly;
                    //    tabEl.classList.add('chrome-tab-is-dragging');
                    //    _this4.el.classList.add('chrome-tabs-is-sorting');
                    //});

                    //draggabilly.on('dragEnd', function (_) {
                    //    _this4.isDragging = false;
                    //    var finalTranslateX = parseFloat(tabEl.style.left, 10);
                    //    tabEl.style.transform = 'translate3d(0, 0, 0)';

                    //    // Animate dragged tab back into its place
                    //    requestAnimationFrame(function (_) {
                    //        tabEl.style.left = '0';
                    //        tabEl.style.transform = 'translate3d(' + finalTranslateX + 'px, 0, 0)';

                    //        requestAnimationFrame(function (_) {
                    //            tabEl.classList.remove('chrome-tab-is-dragging');
                    //            _this4.el.classList.remove('chrome-tabs-is-sorting');

                    //            tabEl.classList.add('chrome-tab-was-just-dragged');

                    //            requestAnimationFrame(function (_) {
                    //                tabEl.style.transform = '';

                    //                _this4.layoutTabs();
                    //                _this4.setupDraggabilly();
                    //            });
                    //        });
                    //    });
                    //});

                    //draggabilly.on('dragMove', function (event, pointer, moveVector) {
                    //    // Current index be computed within the event since it can change during the dragMove
                    //    var tabEls = _this4.tabEls;
                    //    var currentIndex = tabEls.indexOf(tabEl);

                    //    var currentTabPositionX = originalTabPositionX + moveVector.x;
                    //    var destinationIndexTarget = closest(currentTabPositionX, tabPositions);
                    //    var destinationIndex = Math.max(0, Math.min(tabEls.length, destinationIndexTarget));

                    //    if (currentIndex !== destinationIndex) {
                    //        _this4.animateTabMove(tabEl, currentIndex, destinationIndex);
                    //    }
                    //});
                });
            }
        }, {
            key: 'animateTabMove',
            value: function animateTabMove(tabEl, originIndex, destinationIndex) {
                if (destinationIndex < originIndex) {
                    tabEl.parentNode.insertBefore(tabEl, this.tabEls[destinationIndex]);
                } else {
                    tabEl.parentNode.insertBefore(tabEl, this.tabEls[destinationIndex + 1]);
                }
                this.emit('tabReorder', { tabEl: tabEl, originIndex: originIndex, destinationIndex: destinationIndex });
                this.layoutTabs();
            }
        }, {
            key: 'tabEls',
            get: function get() {
                return Array.prototype.slice.call(this.el.querySelectorAll('.chrome-tab'));
            }
        }, {
            key: 'tabContentEl',
            get: function get() {
                return this.el.querySelector('.chrome-tabs-content');
            }
        }, {
            key: 'tabContentWidths',
            get: function get() {
                var numberOfTabs = this.tabEls.length;
                var tabsContentWidth = this.tabContentEl.clientWidth;
                var tabsCumulativeOverlappedWidth = (numberOfTabs - 1) * TAB_CONTENT_OVERLAP_DISTANCE;
                var targetWidth = (tabsContentWidth - 2 * TAB_CONTENT_MARGIN + tabsCumulativeOverlappedWidth) / numberOfTabs;
                var clampedTargetWidth = Math.max(TAB_CONTENT_MIN_WIDTH, Math.min(TAB_CONTENT_MAX_WIDTH, targetWidth));
                var flooredClampedTargetWidth = Math.floor(clampedTargetWidth);
                var totalTabsWidthUsingTarget = flooredClampedTargetWidth * numberOfTabs + 2 * TAB_CONTENT_MARGIN - tabsCumulativeOverlappedWidth;
                var totalExtraWidthDueToFlooring = tabsContentWidth - totalTabsWidthUsingTarget;

                // TODO - Support tabs with different widths / e.g. "pinned" tabs
                var widths = [];
                var extraWidthRemaining = totalExtraWidthDueToFlooring;
                for (var i = 0; i < numberOfTabs; i += 1) {
                    var extraWidth = flooredClampedTargetWidth < TAB_CONTENT_MAX_WIDTH && extraWidthRemaining > 0 ? 1 : 0;
                    widths.push(flooredClampedTargetWidth + extraWidth);
                    if (extraWidthRemaining > 0) extraWidthRemaining -= 1;
                }

                return widths;
            }
        }, {
            key: 'tabContentPositions',
            get: function get() {
                var positions = [];
                var tabContentWidths = this.tabContentWidths;

                var position = TAB_CONTENT_MARGIN;
                tabContentWidths.forEach(function (width, i) {
                    var offset = i * TAB_CONTENT_OVERLAP_DISTANCE;
                    positions.push(position - offset);
                    position += width;
                });

                return positions;
            }
        }, {
            key: 'tabPositions',
            get: function get() {
                var positions = [];

                this.tabContentPositions.forEach(function (contentPosition) {
                    positions.push(contentPosition - TAB_CONTENT_MARGIN);
                });

                return positions;
            }
        }, {
            key: 'activeTabEl',
            get: function get() {
                return this.el.querySelector('.chrome-tab[active]');
            }
        }]);

        return ChromeTabs;
    }();

    return ChromeTabs;
});