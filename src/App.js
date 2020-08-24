import React, { useState } from "react";
import { TreeMSA, TreeMSAB } from "./TreeMSA";
import  EnsembleDemo from "./Ensembl";
import {Lysine_treeNewickformat, Lysine_msaStockformat} from './sampleData'


function App() {
  const [draw, setDraw] = useState('none');
  const [showBranchLength] = useState(true);
  return (
    <div>
        <h1>Phylo React</h1> 
        <div className="App">
        <button onClick={() => setDraw('fixed')}>Attach hacky fixed Tree MSA</button>
        <button onClick={() => setDraw('buggy')}>Attach Tree MSA</button> 
        <button onClick={() => setDraw('ensem')}>EnsembleDemo</button>
        {draw === 'none' ? <h3>Click on any button above</h3> : null}
        {draw === 'buggy' ? <TreeMSAB treedata={Lysine_treeNewickformat} msadata = {Lysine_msaStockformat} showBranchLength={showBranchLength} layout={"linear"}/> : null}
        {draw === 'fixed' ? <TreeMSA treedata={Lysine_treeNewickformat} msadata = {Lysine_msaStockformat} showBranchLength={showBranchLength} layout={"linear"}/> : null}
        {draw === 'ensem' ? <EnsembleDemo/> : null}
        </div>
    </div>
  );
}

export default App;