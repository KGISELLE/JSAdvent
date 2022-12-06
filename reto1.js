const gift = ['cat', 'game', 'socks'];

const wrapped = wrapping(gift);

function wrapping(gifts) {
    const view = gifts.map((item) => {
        const lenghtString = item.length;
        
        const asterix = "*";

        const countAsterix = asterix.repeat(lenghtString + 2);
     
        const show = countAsterix + "\n*" + item + "*\n" + countAsterix;
        
        return console.log(show);
    })
    return view;
}

wrapping(gift);