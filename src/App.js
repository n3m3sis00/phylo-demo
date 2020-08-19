import React, { useState, useEffect } from "react";
import { TreeMSA, TreeMSAB } from "./TreeMSA";
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import {Lysine_treeNewickformat, Lysine_msaStockformat} from './sampleData'

const useStyles = makeStyles(theme => ({
  tree_div: {
    display: 'flex',
    flexDirection: 'row',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    width: 'calc(100vw - 32px)',
  },
}))

function App() {
  const [tree, setTree] = useState();
  const [msadata, setmsadata] = useState();
  const [draw, setDraw] = useState('none');
  const [showBranchLength, setShowBranchLength] = useState(true);
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