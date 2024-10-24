// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function changeRotation(data) {
    return data.sort((a, b) => a.health > b.health ? -1 : 1)
};