export const onUpdate = (initTarget, target, progress, vars, callbacks) => {
    // console.log('onUpdate');
    for (var propertyName in vars) {
        const fromValue = initTarget[propertyName];
        const toValue = vars[propertyName];

        target[propertyName] = fromValue + (toValue - fromValue) * progress;
    }

    callbacks.onUpdate.call(this, progress);
}

export const addCounterByHash = (countersByHash, payload) => {
    return {
        ...countersByHash,
        [payload.id]: {...payload}
    }
}