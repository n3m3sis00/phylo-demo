import React, { useState } from "react";
import { TreeMSA, TreeMSAB, TreeMSABULKY } from "./TreeMSA";
import  EnsembleDemo from "./Ensembl";
import  EnsembleDemoNoColor from "./Ensembl_Nocolor";
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
        <button onClick={() => setDraw('ensemnocolor')}>EnsembleDemo No Color</button>
        <button onClick={() => setDraw('treemsa')}>Tree MSA</button>
        {draw === 'none' ? <h3>Click on any button above</h3> : null}
        {draw === 'buggy' ? <TreeMSAB treedata={Lysine_treeNewickformat} msadata = {Lysine_msaStockformat} showBranchLength={showBranchLength} layout={"linear"}/> : null}
        {draw === 'fixed' ? <TreeMSA treedata={Lysine_treeNewickformat} msadata = {Lysine_msaStockformat} showBranchLength={showBranchLength} layout={"linear"}/> : null}
        {draw === 'ensem' ? <EnsembleDemo/> : null}
        {draw === 'ensemnocolor' ? <EnsembleDemoNoColor/> : null}
        {draw === 'treemsa' ? <TreeMSABULKY treedata={Lysine_treeNewickformat} msadata = {Lysine_msaStockformat} showBranchLength={showBranchLength} layout={"linear"}/> : null}
        </div>
    </div>
  );
}

export default App;