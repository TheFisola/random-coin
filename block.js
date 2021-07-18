const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, transactions, timestamp, previousBlockHash){
        this.index = index;
        this.transactions = transactions;
        this.timestamp = timestamp;
        this.previousBlockHash = previousBlockHash;
        this.hash = this.generateBlockHash();
    }

    generateBlockHash(){
       return SHA256(this.index + JSON.stringify(this.transactions) + this.timestamp + this.previousBlockHash).toString()
    }
}

module.exports = Block;