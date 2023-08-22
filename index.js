// Code your solution in this file!
function distanceFromHqInBlocks(current) {
    return Math. abs(current - 42)
}

function distanceFromHqInFeet(current) {
 return Math. abs(current - 42) * 264
}

function distanceTravelledInFeet(ini,end) {
    return Math.abs(end - ini)*264
}

function calculatesFarePrice(start, destination) {

    if (Math.abs(start - destination) <= 1) {
        return 0
    } else if (Math.abs(start - destination) *264 <= 2000) {
        return (((Math.abs(start - destination) *264) - 400) * 0.02)
    } else if (Math.abs(start - destination) *264 <= 2500) {
        return 25
    }
    else {
    return 'cannot travel that far'
    }
}