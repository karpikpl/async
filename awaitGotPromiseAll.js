const got = require('got');

function get(id) {
    console.log(`starting ${id}`);
    const start = new Date();
    return got('https://data.raleighnc.gov/resource/3bhm-we7a.json')
        .then(() => {
            console.log(`done ${id} in ${new Date()-start}`);
            return id;
        })
}

(async () => {

    console.log('This will be executed in parallel using Promise.all(...)');

    const start = new Date();
    const [a, b, c] = await Promise.all([get(1), get(2), get(3)]);

    console.log(`sleeping done - got ${a} ${b} ${c} in ${new Date()-start}`);
})();
