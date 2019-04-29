/*
  Symbol Swapper Adobe XD Extension
  swapper is the module for controlling the swap of symbols in the document
  See license.md for license information
  Written by Larry Weinheimer (aKnownGlitch)
*/
const { cloneSymbol } = require('./symbolcloner.js');

function Swap(node, node1, node2, selection) {
    if (node.constructor.name == "SymbolInstance") {
      if (node.symbolId == node1.symbolId) {
        console.log("Swapping to 2");
        cloneSymbol(node, node2, selection);
      } else {
        if (node.symbolId == node2.symbolId) {
          console.log("Swapping to 1");
          cloneSymbol(node, node1, selection);
        }
      }
    }
    if(node.children) {
        node.children.forEach(child => {
        Swap(selection, child, node1, node2);
        });
    }
  }
  
function processSwap(node1, node2, selection, root) {
    console.log('swapper');
    var list = new Array;   // The selection will be destroyed by the symbolcloner, so we have to build our own list
    if(selection.items.length > 2) {
        list = selection.items.slice(2);
    } else {
        list = root.children.slice(0);
    }

    list.forEach(child => {
        if((child != node1) && (child != node2)) {
            Swap(child, node1, node2, selection);
        }
    });
    // Now swap the actuals
}

module.exports = {
    processSwap
}