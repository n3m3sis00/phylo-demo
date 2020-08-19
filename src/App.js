import React, { useState } from "react";
import { TreeMSA, TreeMSAB } from "./TreeMSA";
import {Lysine_treeNewickformat, Lysine_msaStockformat} from './sampleData'


function App() {
  const [draw, setDraw] = useState('none');
  const [showBranchLength] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setDraw('fixed')}>Attach hacky fixed Tree MSA</button>
      <button onClick={() => setDraw('buggy')}>Attach Tree MSA</button>
      {draw === 'none' ? <h3>Click on any button above</h3> : null}
      {draw === 'buggy' ? <TreeMSAB treedata={Lysine_treeNewickformat} msadata = {Lysine_msaStockformat} showBranchLength={showBranchLength} layout={"linear"}/> : null}
      {draw === 'fixed' ? <TreeMSA treedata={Lysine_treeNewickformat} msadata = {Lysine_msaStockformat} showBranchLength={showBranchLength} layout={"linear"}/> : null}
    </div>
  );
}

export default App;