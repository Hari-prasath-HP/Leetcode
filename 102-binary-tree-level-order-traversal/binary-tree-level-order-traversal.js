/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
        let result = []
        let queue = []
        if(root)queue.push(root)
        while(queue.length){
            let levelsize = queue.length
            let level = []
            for(let i=0;i<levelsize;i++){
                let node = queue.shift()
                level.push(node.val)
                if(node.left)queue.push(node.left)
                if(node.right)queue.push(node.right)
            }result.push(level)
        }return result
};