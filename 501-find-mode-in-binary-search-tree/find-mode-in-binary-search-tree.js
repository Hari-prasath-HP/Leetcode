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
 * @return {number[]}
 */
var findMode = function(root) {
    let map = new Map()
    function inorder(node){
        if(node === null)return
        inorder(node.left)
        map.set(node.val,(map.get(node.val)||0)+1)
        inorder(node.right)
    }inorder(root)
    let max = 0
    for(let value of map.values()){
        if(value > max){
            max = value
        }
    }
    let mode = []
    for(let [key,value] of map.entries()){
        if(value === max){
            mode.push(key)
        }
    }return mode
};