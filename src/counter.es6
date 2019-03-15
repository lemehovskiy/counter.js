/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/a
 */


class Counter {
    constructor(target, duration, vars, callbacks) {
        let self = this;

        self.state = {
            isCounting: false,
            startTime: 0,
            now: 0
        }
        self.init(target, duration, vars, callbacks);
    }

    static to(target, duration, vars, callbacks){
        return new Counter(target, duration, vars, callbacks);
    }

    init(target, duration, vars, callbacks) {
        let self = this;

        self.saveInitTarget(target);
        self.animate(target, duration, vars, callbacks);
    }

    saveInitTarget(target) {
        this.state.initTarget = {...target};
    }

    setStartTime() {
        this.state.startTime = performance.now();
    }

    onUpdate(target, progress, vars, callbacks) {
        for(var propertyName in vars) {
            const fromValue = this.state.initTarget[propertyName];
            const toValue = vars[propertyName];

            target[propertyName] = fromValue + (toValue - fromValue) / 100 * progress;
        }

        callbacks.onUpdate.call(this, progress);
    }

    animate(target, duration, vars, callbacks) {
        let self = this;
        const durationMS = duration * 1000;
        
        self.setStartTime();

        requestAnimationFrame(function tick(time) {

            self.state.now = time;

            let timePassed = self.state.now - self.state.startTime;

            if (timePassed > durationMS) {
                timePassed = durationMS;
                cancelAnimationFrame(self.raf)
            }

            const progressInPercent = (timePassed / durationMS) * 100;
            self.onUpdate(target, progressInPercent, vars, callbacks);

            if (timePassed < durationMS) {
                self.raf = requestAnimationFrame(tick.bind(this));
            }
        })
    }
}

export default Counter;