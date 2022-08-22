import React, { useState } from 'react';
import './App.css';
import TableData from './components/TableData';
import data from './table_data.json';
import EditRow from './components/EditRow';
function App() {

  const [tableData, setTableData] = useState(data);
  const [addFormData, setAddFormData] = useState({
    ConfigurationId:'',
    Device: '',
    ipAddress: '',
    portNumber: '',
    folderPath: ''

  });

  const [editRowData, setEditRowData] = useState({
    ConfigurationId:'',
    Device: '',
    ipAddress: '',
    portNumber: '',
    folderPath: ''
  })
  const [editRowId, setEditRowId] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    const fNames = e.target.getAttribute('name');
    const Fvalue = e.target.value;

    const newformData = { ...addFormData };
    newformData[fNames] = Fvalue;
    setAddFormData(newformData);
  }

  const handleEditRow = (e) => {
    e.preventDefault();
    const Rname = e.target.getAttribute('name');
    const Rvalue = e.target.value;

    const newRowData = { ...editRowData };
    newRowData[Rname] = Rvalue;
    setEditRowData(newRowData);
  }

  const handleFormSubmit = (e) => {

    e.preventDefault();
    const newEntry = {
      ConfigurationId: addFormData.ConfigurationId,
      SelectedDeviceType: addFormData.Device,
      IPAddress: addFormData.ipAddress,
      PortNumber: addFormData.portNumber,
      FolderPath: addFormData.folderPath
    };

    const newTableData = [...tableData, newEntry];
    setTableData(newTableData);
  };

  const handleEditRowSubmit = (e) => {
    e.preventDefault();
    const newRow = {
      ConfigurationId:editRowData.ConfigurationId,
      SelectedDeviceType: editRowData.Device,
      IPAddress: editRowData.ipAddress,
      PortNumber: editRowData.portNumber,
      FolderPath: editRowData.folderPath
    }
    const newTableData = [...tableData];
    const rowPosition = tableData.findIndex((table)=>{
      return table.ConfigurationId === editRowId      
    });
    newTableData[rowPosition] = newRow;
    setTableData(newTableData);
    console.log(newTableData);
    setEditRowId(null);
  }

  const handleEditClick = (event, tableData) => {
    event.preventDefault();
    setEditRowId(tableData.ConfigurationId);

    const tableValues = {
      ConfigurationId:tableData.ConfigurationId,
      Device: tableData.SelectedDeviceType,
      ipAddress: tableData.IPAddress,
      portNumber: tableData.PortNumber,
      folderPath: tableData.FolderPath
    }

    setEditRowData(tableValues);
  }

  const handleDelete = (rowid)=>{
const newdata = [...tableData];
const deleteRow = tableData.findIndex((table)=> table.ConfigurationId === rowid);
newdata.splice(deleteRow,1);
setTableData(newdata);
  }

  return (
    <div className="main-container">
      <form onSubmit={handleEditRowSubmit}>
        <table>
          <thead>
            <tr>
              <th>CONFIGURATION ID</th>
              <th>SELECTED DEVICE TYPE</th>
              <th>IP ADDRESS</th>
              <th>PORT NUMBER</th>
              <th>FOLDER PATH</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((table) => {
              return <>
                {table.ConfigurationId === editRowId ? <EditRow editRowData={editRowData} handleEditRow={handleEditRow} /> : <TableData handleDelete={handleDelete} handleEditClick={handleEditClick} table={table} />}
              </>
            })}
          </tbody>
        </table>
      </form>
      <h2>Add Data</h2>
      <form onSubmit={handleFormSubmit} id='myform'>

      <input type='text' name='ConfigurationId' placeholder='Enter id' onChange={handleForm} required />
        
        <select name="Device" id="device" required onChange={handleForm}>
          <option value="none" selected disabled>Choose device type</option>
          <option value="Android">Android</option>
          <option value="Apple">Apple</option>
        </select>
        <input type='text' name='ipAddress' placeholder='Enter ip address' onChange={handleForm} required />
        <input type='text' name='portNumber' placeholder='Enter Port Number' onChange={handleForm} required />
        <input type='text' name='folderPath' placeholder='Enter Folder Path' onChange={handleForm} required />
        <button type='submit' id='add'>Add</button>
      </form>
    </div>
  );
}

export default App;
