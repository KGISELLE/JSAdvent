const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 2, h: 3 },
    { l: 2, w: 2, h: 2 }
]
// // const boxes = [
// //     { l: 2, w: 2, h: 2 },
// //     { l: 1, w: 1, h: 1 }
// // ]

function fitsInOneBox(boxes) {
    
    const sortBoxes = boxes.sort((a, b) => a.l - b.l);

    // console.log('%creto4.js line:21 sortBoxes', 'color: #007acc;', sortBoxes);

    const compareEveryBox = sortBoxes.every((box, index) => {
        if (index === 0) return true;
        const prev = boxes[index - 1];
        // console.log(box.l > prev.l && box.w > prev.w && box.h > prev.h, "return");
        return box.l > prev.l && box.w > prev.w && box.h > prev.h
    })

    console.log('%creto4.js line:24 compareEveryBox', 'color: #007acc;', compareEveryBox);
    return compareEveryBox;

}

fitsInOneBox(boxes);