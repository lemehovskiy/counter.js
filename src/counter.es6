/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/a
 */

import {onUpdate, addCounterByHash} from './helpers.es6';
import {easings} from './easing.es6';

class Counter {
    static targetID = 1;
    static ref = undefined;
    static countersByHash = {};
    static countersById = [];
    static engineInProgress = false;

    static addCounter(id, target, duration, vars, callbacks) {
        Counter.countersByHash = addCounterByHash(
            Counter.countersByHash,
            {
                id: id,
                target: target,
                duration: duration,
                vars: vars,
                callbacks: callbacks,
                initTarget: {...target},
                startTime: performance.now()
            })
        Counter.countersById = [...Counter.countersByHash, id]
    }

    static updateCounter(id, target, duration, vars, callbacks) {
        Counter.countersByHash = {
            ...Counter.countersByHash,
            [id]: {
                ...Counter.countersByHash[id],
                duration: duration,
                vars: vars,
                callbacks: callbacks,
                initTarget: {...target},
                startTime: performance.now()
            }
        }
    }

    static deleteCounter(id) {
        Counter.countersById = Counter.countersById.filter(item => {
            return item !== id
        });

        delete Counter.countersByHash[id];
    }

    static registerTarget(target) {
        target._counterID = Counter.targetID++;
    }

    static startEngine() {
        Counter.engineInProgress = true;
        Counter.ref = requestAnimationFrame(function tick(time) {

            if (Counter.countersById.length === 0) {
                Counter.stopEngine();
            }
            else {
                Counter.countersById.forEach((id) => {
                    const counter = Counter.countersByHash[id];
                    const durationMS = counter.duration * 1000;
                    let timePassed = time - counter.startTime;

                    let timeFraction = timePassed / durationMS;

                    if (timeFraction > 1) {
                        Counter.deleteCounter(id)
                        timeFraction = 1;
                    }

                    let progress = counter.vars.easing === 'linear' ? timeFraction : easings[counter.vars.easing](timeFraction)

                    onUpdate(counter.initTarget, counter.target, progress, counter.vars, counter.callbacks);
                })

                Counter.ref = requestAnimationFrame(tick.bind(this));
            }
        })
    }

    static stopEngine() {
        Counter.engineInProgress = false;
        cancelAnimationFrame(Counter.ref)
    }

    static to(target, duration, vars, callbacks) {
        return new Counter(target, duration, vars, callbacks);
    }

    constructor(target, duration, vars, callbacks) {
        let self = this;

        let updatedByDefaultVars = {
            easing: 'linear',
            ...vars
        }

        self.init(target, duration, updatedByDefaultVars, callbacks);
    }

    init(target, duration, vars, callbacks) {
        if (target.hasOwnProperty('_counterID')) {
            if (Counter.countersByHash[target.id]) {
                Counter.updateCounter(target._counterID, target, duration, vars, callbacks);
            }
            else {
                Counter.addCounter(target._counterID, target, duration, vars, callbacks);
            }
        }
        else {
            Counter.registerTarget(target);
            Counter.addCounter(target._counterID, target, duration, vars, callbacks);
        }

        if (!Counter.engineInProgress) {
            Counter.startEngine(Counter.counters);
        }
    }
}

export default Counter;