(function () {
    'use strict';

    class BeforeAfterImageSlider {

        /**
         * @param {Element} element 
         * @param {Object} settings 
         */
        constructor(element, settings = {}) {
            this.settings = { ...{
                verticalMode: element.dataset.verticalMode || false
            }, ...settings };
            
            this.container = element;
            this._initContainer();

            this.images = [];

            this._replaceImagesWithDivs();
            this._createSplitElement();

            this._registerEventListeners();
            this._applySplit(50);
        }

        _createSplitElement() {
            this.split = document.createElement('div');
            this.split.classList.add('split');
            this.container.append(this.split);
        }

        _registerEventListeners() {
            this.container.addEventListener("mousedown", this._handleMouseEvent);
            document.addEventListener("mouseup", this._handleMouseEvent);

            this.container.addEventListener('touchstart', this._handleTouchEvent);
            document.addEventListener('touchend', this._handleTouchEvent);
        }

        /**
         * @param {MouseEvent} event 
         */
        _handleMouseEvent = (event) => {
            switch(event.type) {
                case 'mouseup':
                    this.container.removeEventListener("mousemove", this._handleMouseEvent);
                    break;
                case 'mousedown':
                    this.container.addEventListener("mousemove", this._handleMouseEvent);
                default:
                    this._calculateSplitLocation(event.clientX, event.clientY);
            }
        }

        /**
         * @param {TouchEvent} event 
         */
        _handleTouchEvent = (event) => {
            switch(event.type) {
                case 'touchend':
                    this.container.removeEventListener("touchmove", this._handleTouchEvent);
                    break;
                case 'touchstart':
                    this.container.addEventListener("touchmove", this._handleTouchEvent);
                default:
                    let touch = event.touches[0] || event.changedTouches[0];
                    this._calculateSplitLocation(touch.pageX, touch.pageY);
            }
        }

        _calculateSplitLocation(x = null, y = null) {
            let boundingRect = this.container.getBoundingClientRect();
            this._applySplit(
                this.settings.verticalMode ? 
                (y - boundingRect.y) / this.container.offsetHeight * 100 :
                (x - boundingRect.x) / this.container.offsetWidth * 100
            );
        }

        _applySplit(percent) {
            this.container.style.setProperty('--split', `${percent}%`);
        }

        _initContainer() {
            this.container.classList.add(this.settings.verticalMode ? 'vertical' : 'horizontal');
            this.container.style.setProperty('--horizontal', this.settings.verticalMode ? '0' : '1');
            if (!this.container.style.height) {
                this.container.querySelector('img').addEventListener('load', (event) => { 
                    this.container.style.height = event.target.height;
                }, { once: true });
            }
        }    

        _replaceImagesWithDivs() {
            this.container.querySelectorAll('img').forEach(image => {
                //let div = document.createElement('div');
                //div.style.backgroundImage = `url(${image.src})`;
                //image.replaceWith(div);
                //this.images.push(div);
                image.style.backgroundImage = `url(${image.src})`;
                this.images.push(image);
            });
        }
    }

    document.addEventListener('DOMContentLoaded', event => {
      document.querySelectorAll(".before-after-image-slider").forEach((element) => {
        new BeforeAfterImageSlider(element, {});
      });  
    });

}());
