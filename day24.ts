type Tree = {
  value: string;
  left?: Tree;
  right?: Tree;
};

function isTreesSynchronized(
  tree1: Tree | undefined,
  tree2: Tree | undefined
): [boolean, string] {
    function areMirrors(node1: Tree | undefined, node2: Tree | undefined): boolean {
    // If both nodes are null, they are mirrors
    if (!node1 && !node2) return true;
    // If only one is null, they are not mirrors
    if (!node1 || !node2) return false;
    // Check if the values are the same and their subtrees are mirrors
    return (
        node1.value === node2.value &&
        areMirrors(node1.left, node2.right) &&
        areMirrors(node1.right, node2.left)
    );
  }

  const synchronized = areMirrors(tree1, tree2);
  return [synchronized, tree1?.value ?? ''];
}