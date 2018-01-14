const point = 361527

// 1. Find the row number where the data point is located
const getMax = (x, target) => {
    const res = 4 * x * (x + 1) + 1

    return (res >= target) ? [res, x] : getMax(x+1, target)
}

const bottomRight = max => max
const bottomLeft = max => max-Math.sqrt(max)+1
const topLeft = max => max-(Math.sqrt(max)*2)+2
const topRight = max => max-(Math.sqrt(max)*3)+3

const middleBottom = max => bottomLeft(max) + Math.floor(Math.sqrt(max)/2)
const middleTop = max => topLeft(max) - Math.floor(Math.sqrt(max)/2)
const middleLeft = max => topLeft(max) + Math.floor(Math.sqrt(max)/2)
const middleRight = max => topRight(max) - Math.floor(Math.sqrt(max)/2)

const valueAt = (max, coord) => coord(max)

const coords = [bottomRight, bottomLeft, topLeft, topRight]
const coordValues = (max) => coords.map(c => c(max))
const middles = [middleBottom, middleTop, middleLeft, middleRight]
const middleValues = max => middles.map(m => Math.abs(point - m(max)))
const minMiddleValue = max => middleValues(max).reduce((p, c) => Math.min(p,c))

const [max, x] = getMax(0, point)

// min steps to middle
const minSteps = coordValues(max).map(v => Math.abs(v - point))

console.log(minMiddleValue(max) + x)


// get max point
// 2. on what line is it situated.
// calc coordinates
// bottom x: mellan maxPoint-sqrt(Max-point) och Max-point
// top x: mellan maxPoint-sqrt(Max-point) och Max-point (men y = MaxPoint-sqrt(MaxPoint))