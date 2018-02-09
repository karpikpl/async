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

    console.log('This will be executed in parallel using Promise.all(...)');

    const start = new Date();
    const [a, b, c] = await Promise.all([sleep(2000), sleep(500), sleep(5)]);

    console.log(`sleeping done - got ${a} ${b} ${c} in ${new Date()-start}`);
})();
