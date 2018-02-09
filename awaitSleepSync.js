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

    console.log('This will be executed in sync - one by one');

    const start = new Date();
    const a = await sleep(2000)
    const b = await sleep(500)
    const c = await sleep(5)

    console.log(`sleeping done - got ${a} ${b} ${c} in ${new Date()-start}`);
})();
