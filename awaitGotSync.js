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

    console.log('This will be executed in sync - one by one');

    const start = new Date();
    const a = await get(1)
    const b = await get(2)
    const c = await get(3)

    console.log(`sleeping done - got ${a} ${b} ${c} in ${new Date()-start}`);
})();
