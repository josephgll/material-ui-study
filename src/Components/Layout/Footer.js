import React, {Fragment} from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default ({muscles, onSelect, category}) =>
{
  const index = category ? muscles.findIndex(group=>group===category)+1 : 0

  const onIndexSelect = (e, index) =>
  onSelect(index === 0 ? '' : muscles[index-1])

  return <Paper>
    <Tabs
      value={index}
      indicatorColor="primary"
      textColor="primary"
      centered
      onChange={onIndexSelect}
    >

      <Tab label="All" />
      {muscles.map(group=>
        <Tab label={group} />
      )}


    </Tabs>
  </Paper>
}
