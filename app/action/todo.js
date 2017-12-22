export const increment = {
    type: 'INCREMENT',
    text: 'count+1'
};
export const decrement = {
    type: 'DECREMENT',
    text: 'count-1'
};
export function show(number) {
    return {
        type: 'SHOW',
        number: number
    }
}
export function hide(number) {
    return {
        type: 'HIDE',
        number: number
    }
}