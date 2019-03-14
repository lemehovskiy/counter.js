/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/a
 */

'use strict';

(function ($) {

    class Counter {
        constructor(element, options) {
            let self = this;

            //extend by function call
            self.settings = $.extend(true, {
                target: {},
                duration: 1
            }, options);

            self.$element = $(element);

            //extend by data options
            self.data_options = self.$element.data('counter');
            self.settings = $.extend(true, self.settings, self.data_options);

            this.state = {
                isCounting: false,
                startTime: 0,
                now: 0
            }
            self.init();
        }

        init() {
            let self = this;

            self.saveInitTarget();
            self.animate();
        }

        saveInitTarget(){
            this.state.initTarget = {...this.settings.target};
        }

        setStartTime() {
            this.state.startTime = performance.now();
        }

        onUpdate(progress) {
            console.log(this.state.initTarget.value + (this.settings.value - this.state.initTarget.value) / 100 *  progress);

            this.settings.onUpdate.call(this, progress);
        }

        animate() {
            let self = this;
            const duration = self.settings.duration * 1000;

            self.setStartTime();

            requestAnimationFrame(function tick(time) {
                self.state.now = time;

                let timePassed = self.state.now - self.state.startTime;

                if (timePassed > duration) {
                    timePassed = duration;
                    cancelAnimationFrame(self.raf)
                }

                const progressInPercent = (timePassed / duration) * 100;
                self.onUpdate(progressInPercent);

                if (timePassed < duration) {
                    self.raf = requestAnimationFrame(tick.bind(this));
                }
            })
        }
    }

    $.fn.counter = function () {
        let $this = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            length = $this.length,
            i,
            ret;
        for (i = 0; i < length; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                $this[i].a = new Counter($this[i], opt);
            else
                ret = $this[i].counter[opt].apply($this[i].counter, args);
            if (typeof ret != 'undefined') return ret;
        }
        return $this;
    };

})(jQuery);