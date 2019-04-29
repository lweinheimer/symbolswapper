/*
  Symbol Swapper Adobe XD Extension
  main Module for getting the command from XD
  See license.md for license information
  Written by Larry Weinheimer (aKnownGlitch)
*/
const { error } = require("./lib/dialogs.js");
const { processReplace } = require("./replacer.js");
const { processSwap } = require("./swapper.js");

async function swapperError() {
  error("Symbol Swapper", "Select two symbols to be changed.  Select object(s) to be changed, or the entire document will be swapped.");
}

async function replacerError() {
  error("Symbol Replacer", "Select the symbol to be changed, then the symbol to replace it with.  Select objects to be searched or the entire document will be searched.");
}

function replacerCommand(selection, root) {
  if (selection.items.length >= 2) {
    const node1 = selection.items[0];
    const node2 = selection.items[1];
    if (node1 && node2) {
      if (
        node1.constructor.name == "SymbolInstance" &&
        node2.constructor.name == "SymbolInstance"
      ) {
        processReplacer(node1, node2, selection, root);
      } else {
        replacerError();
      }
    } else {
      replacerError();
    }
  } else {
    replacerError();
  }
}


function swapperCommand(selection, root) {
  if (selection.items.length >= 2) {
    const node1 = selection.items[0];
    const node2 = selection.items[1];
    if (node1 && node2) {
      if (
        node1.constructor.name == "SymbolInstance" &&
        node2.constructor.name == "SymbolInstance"
      ) {
        processSwap(node1, node2, selection, root);
      } else {
        swapperError();
      }
    } else {
      swapperError();
    }
  } else {
    swapperError();
  }
}

module.exports = {
  commands: {
    swapperCommand: swapperCommand,
    replacerCommand: replacerCommand
  }
};
