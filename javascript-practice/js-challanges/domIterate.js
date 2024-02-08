const domIterator = (parent, result = {}, prefix = "") => {
  for (const node of parent.children) {
    const key = prefix ? `${prefix}>${node.tagName}` : node.tagName;

    if (node.children.length > 0) {
      domIterator(node, result, key);
    } else {
      result[key] = node.textContent;
    }
  }

  return result;
};

const data = domIterator(document.getElementById("container"));
console.log("data", data);

const findEquivalentNode = (rootA, rootB, targetNode) => {
  if (rootA === targetNode) return rootB;
  const rootAChildren = rootA.children;
  const rootBChildren = rootB.children;

  for (let i = 0; i < rootAChildren.length; i++) {
    if (rootAChildren[i]?.children) {
      const result = findEquivalentNode(
        rootAChildren[i],
        rootBChildren[i],
        targetNode
      );
      if (result) return result;
    }
  }

  return null;
};

const data1 = findEquivalentNode(
  document.getElementById("container"),
  document.getElementById("container1"),
  document.getElementById("span-by-id")
);

console.log("data1:", data1);
