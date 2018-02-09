function sleep(ms) {
    return new Promise(resolve => {
        console.log(`starting ${ms}`);
        setTimeout(() => {
            console.log(`done ${ms}`);
            resolve(ms);
        }, ms);
    });
}

(async () => {

    console.log('This will be executed in sync - 2000 - 500 - 5');

    const start = new Date();
    const [a, b, c] = [await sleep(2000), await sleep(500), await sleep(5)];

    console.log(`sleeping done - got ${a} ${b} ${c} in ${new Date()-start}`);
})();
