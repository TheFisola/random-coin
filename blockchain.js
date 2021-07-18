const Block = require('./block');

class Blockchain {
    constructor(){
        this.blockchainData = [this.generateGenesisBlock()]
    }

    generateGenesisBlock(){
        const transaction = this.generateTransactionPayload("Mr A", "Mr B", 1, "Genesis Block on the Chain");
        return new Block(0, [transaction], new Date(), null);
    }

    getPreviousBlock(){
        return this.blockchainData[this.blockchainData.length - 1];
    }

    addNewBlock(transaction){
        const previousBlock = this.getPreviousBlock();
        this.blockchainData.push(new Block(previousBlock.index + 1, transaction, new Date(), previousBlock.hash));
    }

    generateTransactionPayload(from, to, amount, narration){
        return {from, to, amount, narration};
    }
}

module.exports = Blockchain;