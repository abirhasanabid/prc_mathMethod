/**
 * Write a program that calculates the square root of a number. Test it with numbers like 25, 36, and 49. Use Math.sqrt to find the square root.
 */


function findingRootNumber(number) {
    let root =[];
    for (const num of number) {
        // root = Math.sqrt(num);
        root.push(Math.sqrt(num));
    }
    return root;
}
const numbers = [25, 36, 49];
const result = findingRootNumber(numbers);

console.log(result);
