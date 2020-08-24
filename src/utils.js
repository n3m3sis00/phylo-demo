let seq = "";

function ensemblToStock(currentNode) {
    var i, currentChild;
    for (i = 0; i < 2; i += 1) {
        if(currentNode.children){
            currentChild = currentNode.children[i];
            findSequences(currentChild);
        }else{
            seq += currentNode.sequence.id.accession + " " + currentNode.sequence.mol_seq.seq;
            return;
        }

    }
}

const json = require('./ENSGT00390000003602.json');
findSequences(json.tree)
console.log(seq)