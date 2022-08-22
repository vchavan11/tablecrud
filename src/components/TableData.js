import React from 'react'

const TableData = ({table,handleEditClick,handleDelete}) => {
  return (   
    <tr>
              <td>{table.ConfigurationId}</td>
              <td>{table.SelectedDeviceType}</td>
              <td>{table.IPAddress}</td>
              <td>{table.PortNumber}</td>
              <td>{table.FolderPath}</td>
              <td><button id='editButton' type='button' onClick={(event)=>handleEditClick(event,table)}>Edit</button></td>
              <td><button id='DeleteButton' type='button' onClick={()=>handleDelete(table.ConfigurationId)}>Delete</button></td>
    </tr>
  );
};

export default TableData