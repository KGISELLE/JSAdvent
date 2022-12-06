const packOfGifts = ["book", "doll", "ball"];

const reindeers = ["dasher", "dancer"];


function distributeGifts(packOfGifts) {

    const giftWeight = packOfGifts.map((gift) => {
        return gift.length;
    });

    const totalWeight = giftWeight.reduce((a, b) => a + b);
    console.log('%creto3.js line:13 totalWeight', 'color: #007acc;', totalWeight);

    const reindeersCanCarry = reindeers.map((carryName) => {
        return carryName.length * 2;
    });

    const reindeersCarryTotal = reindeersCanCarry.reduce((a, b) => a + b);
    console.log('%creto3.js line:20 reindeersCarryTotal', 'color: #007acc;', reindeersCarryTotal);

    const giftToDeliver = Math.floor(reindeersCarryTotal / totalWeight);

    console.log('%creto3.js line:22 giftToDeliver', 'color: #007acc;', giftToDeliver);

    return giftToDeliver;
}

distributeGifts(packOfGifts);