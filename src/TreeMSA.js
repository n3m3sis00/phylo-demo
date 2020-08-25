import React, { useState } from "react";
import { Tree, MSA } from "phylo-react";
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import MSATest from './MSA_NoColor'

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

let counter = 0;

export function TreeMSA(props){
  const {treedata, msadata, layout} = props
  const [treeresponse, setTreeresponse] = useState(null)
  const classes = useStyles()
  counter += 1;
  
  console.log(counter + ": getConfig Response", treeresponse)
  return (
      <Grid key={1} item>
        <div className={classes.tree_div}>
          <Box width="50%">
            <Tree 
              data = {treedata}
              layout = {layout}
              getConfig={treeresponse === null ? setTreeresponse : d => {}}/>
          </Box>
          <Box width="50%" style={{ overflowX: 'scroll' }}>
          {treeresponse !== null ? <MSA data={msadata} heigtoftree={treeresponse.treeheight} dataToShow={treeresponse.leafloc}/> : null}
          </Box>
        </div>
      </Grid>
  )
}

export function TreeMSAB(props){
  const {treedata, msadata, layout} = props
  const [treeresponse, setTreeresponse] = useState(null)
  const classes = useStyles()

  counter += 1;
  
  console.log(counter + ": getConfig Response", treeresponse)
  return (
      <Grid key={1} item>
        <div className={classes.tree_div}>
          <Box width="50%">
            <Tree 
              data = {treedata}
              layout = {layout}
              getConfig={setTreeresponse}/>
          </Box>
          <Box width="50%" style={{ overflowX: 'scroll' }}>
          {treeresponse !== null ? <MSA data={msadata} heigtoftree={treeresponse.treeheight} dataToShow={treeresponse.leafloc}/> : null}
          </Box>
        </div>
      </Grid>
  )
}

export function TreeMSABULKY(props){
  const {treedata, msadata, layout} = props
  const [treeresponse, setTreeresponse] = useState(null)
  const classes = useStyles()
  counter += 1;
  
  console.log(counter + ": getConfig Response", treeresponse)
  return (
      <Grid key={1} item>
        <div className={classes.tree_div}>
          <Box width="20%">
            <Tree 
              data = {treedata}
              layout = {layout}
              getConfig={treeresponse === null ? setTreeresponse : d => {}}/>
          </Box>
          <Box width="80%" style={{ overflowX: 'scroll' }}>
          {treeresponse !== null ? <MSATest data={msadata} heightoftree={treeresponse.treeheight} dataToShow={treeresponse.leafloc}/> : null}
          </Box>
        </div>
      </Grid>
  )
}
