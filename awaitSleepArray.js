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

    console.log('This will be executed in parallel - thanks to putting promises in the array');

    const start = new Date();
    const aPromise = sleep(2000);
    const bPromise = sleep(500);
    const cPromise = sleep(5);

    const [a, b, c] = [await aPromise, await bPromise, await cPromise];

    console.log(`sleeping done - got ${a} ${b} ${c} in ${new Date()-start}`);
})();
