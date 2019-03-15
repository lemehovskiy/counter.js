export const easings = {
    'back': (progress) => {
        const x = 1.5;
        return Math.pow(progress, 2) * ((x + 1) * progress - x)
    },
    'circ': (progress) => {
        return 1 - Math.sin(Math.acos(progress))
    },
    'quad': (progress) => {
        return Math.pow(progress, 2)
    }
}