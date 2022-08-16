/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/
// Write a recursive function `makeTree(categories, parent)` that takes an array of
// categories objects, each of which have an id property, and a parent property and
// returns a nested tree of those objects using the parent properties to construct
// the tree.

// A parent value of null means you are at the bottom of the tree and the category
// has no parent, so the default value parent is be null if no parent is
// provided.

//write a recursive function `makeTree(categories, parent)` that takes an array of objects
//each of which have an id property, and a parent property
//should return a nested tree of those objects using the parent properties to construct the tree
//if no parent is provided, the default value parent is be null




function makeTree(categories, parent) {
  if (categories.length === 0) { // base case
    return {};
  }
  if (categories[0].parent === parent) { // if the first element's parent is the same as the parent, return a tree with the first element's id and the rest of the categories
    return {[categories[0].id]: makeTree(categories.slice(1), categories[0].id)};
  }
  return makeTree(categories.slice(1), parent); // recursive call with the next element in the array removed from the array
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
