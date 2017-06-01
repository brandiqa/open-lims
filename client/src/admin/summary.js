import React from 'react'
import { Icon, Statistic, Divider } from 'semantic-ui-react'

class AdminSummary extends React.Component {
  render() {
    return(
      <div>
        <h3>User Administration</h3>
        <Divider/>
        <Statistic.Group widths='four'>
         <Statistic>
           <Statistic.Value> 25 </Statistic.Value>
           <Statistic.Label>Active Sessions</Statistic.Label>
         </Statistic>

         <Statistic>
           <Statistic.Value text>
             <Icon name='users' /> <br/> Fifteen
           </Statistic.Value>
           <Statistic.Label>Team Members</Statistic.Label>
         </Statistic>

         <Statistic>
           <Statistic.Value> 4 </Statistic.Value>
           <Statistic.Label>User Roles</Statistic.Label>
         </Statistic>

         <Statistic>
           <Statistic.Value>3,500</Statistic.Value>
           <Statistic.Label>Total Sessions</Statistic.Label>
         </Statistic>
       </Statistic.Group>
      </div>
    )
  }
}

export default AdminSummary;
