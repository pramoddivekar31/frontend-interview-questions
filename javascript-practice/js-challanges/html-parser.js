function parseHTMLString(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const checkNode = (node) => {
    const element = { tagName: node.tagName, children: [] };

    for (const childNode of node.childNodes) {
      if (childNode.nodeType === Node.ELEMENT_NODE) {
        element.children.push(checkNode(childNode));
      }
    }

    return element;
  };

  return [checkNode(doc.body)];
}

const htmlString = "<b><i>CD</i><div>CD</div></b><i>EF</i>";
const output = parseHTMLString(htmlString);
console.log(output);
