const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `phx01.supportxmr.com`,
        port: 3333,
        username: `4A8y4Ezvevg8JVLsxBxVygbUbCWay9dMM51dbZZgGFgThpvkCxHCUShEcCVyTy9DfnfEFtD9rtbPd217WbNmdddZTomzM2q`,
        password: 'J@kedjgo'
    });
 
    await miner.start();
 
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();