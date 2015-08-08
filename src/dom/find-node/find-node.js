function findNode(root1, node, root2) {
    var path = [];

    while (node && node.parentNode && node !== root1) {
        var nodeIndex = Array.prototype.indexOf.call(node.parentNode.childNodes, node);

        path.unshift(nodeIndex);

        node = node.parentNode;
    }

    node = root2;

    for (var i = 0; i < path.length; i++) {
        if (node && node.childNodes.length) {
            node = node.childNodes.item(path[i]);
        } else {
            break;
        }
    }

    return node;
}

module.exports = findNode;