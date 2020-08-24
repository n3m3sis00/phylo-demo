let seq = "";

function ensemblToStock(currentNode) {
    var i, currentChild;
    for (i = 0; i < 2; i += 1) {
        if(currentNode.children){
            currentChild = currentNode.children[i];
            ensemblToStock(currentChild);
        }else{
            console.log(currentNode);
            seq += currentNode.sequence.id[0].accession + " " + currentNode.sequence.mol_seq.seq + "\n";
            process.exit();
            return; 
        }

    }
}

const json = require('./ENSGT00390000003602.json');
ensemblToStock(json.tree)
console.log(seq)