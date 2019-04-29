/*
  Symbol Swapper Adobe XD Extension
  symbolcloner is the module for creating a new object in the document based on an existing object
  See license.md for license information
  Written by Larry Weinheimer (aKnownGlitch)
*/

let commands = require("commands");

function cloneSymbol(oldNode, newNode, selection) {
    let parent = oldNode.parent;
    selection.items = [newNode];
    console.log(`Duplicate...`);
    commands.duplicate();
    console.log(`Select...`);
    let cloned = selection.items[0];
    // Create new node from old node
    // parent.children.add(newNode);
    // node.removeFromParent(); // Deletes the instance
}

module.exports = {
    cloneSymbol
}
  