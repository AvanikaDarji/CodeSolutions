let garden = [1, 0, 0, 0, 1];

function canPlant(garden, value) {

    let unplanted = 0;
    for (let i = 0; i < garden.length; i++) {
        if ((garden[i] === 0 && i == 0 && garden[i + 1] === 0) || (garden[i - 1] == 0 && garden[i] === 0 && garden[i + 1] === 0) || (i == garden.length - 1 && garden[i] == 0 && garden[i - 1] == 0)) {
            garden[i] = 1;
            unplanted++;
        }

        if (unplanted === value) {
            return true;
        }
    }
    return false;

}

console.log(canPlant([1, 0, 0, 0, 1], 1));
console.log(canPlant([1, 0, 0, 0, 1], 4));