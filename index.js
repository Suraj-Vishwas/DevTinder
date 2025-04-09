const crypto = require('crypto');

function findHashPrifix(prfix){
    let input = 0;
    while(true){
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prfix)){
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

const result = findHashPrifix('11111');
console.log(`input : ${result.input}`);
console.log(`hash : ${result.hash}`);
