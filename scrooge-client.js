"use strict";

const Client = require("spartan-gold/client");

module.exports = class ScroogeClient extends Client {
  receiveBlock(block) {
    let blockNum = this.lastBlock.chainLength;
    let b = super.receiveBlock(block);
    
    // If the block is null, it is invalid, so we return early.
    if (!b) return;
    
    // If the chainLength has not changed, then this block
    // is not the longest chain that the client knows about.
    if (blockNum === this.lastBlock.chainLength) return;

    b.transactions.forEach((tx, txID) => {
      console.log(`******Block has transaction ${txID}`);
      //
      // ***TODO**
      // Need to check for transactions where:
      // 1) there is a tx.data field.
      // 2) tx.data.nearMissID has sufficient leading zeroes (and is not undefined)
      // 3) tx.data.nearMissBlock is a valid block.
      //
      // We can ignore #3 for now, but we need to at least note in a comment
      // that we are deliberately ignoring the validity of the block.
    });
  }
}