import React from 'react'

const EditRow = ({editRowData,handleEditRow}) => (
    <tr>
        <td>
        <input type='text' name='ConfigurationId' placeholder='Enter config id' value={editRowData.ConfigurationId} onChange={handleEditRow} required />
        </td>
        <td><select name="Device" id="device"  value ={editRowData.Device} onChange={handleEditRow}required >
            <option value="null" selected disabled>Choose device type</option>
            <option value="Android">Android</option>
            <option value="Apple">Apple</option>
        </select></td>
        <td>
            <input type='text' name='ipAddress' placeholder='Enter ip address' value={editRowData.ipAddress} onChange={handleEditRow} required />
        </td>
        <td>
            <input type='text' name='portNumber' placeholder='Enter Port Number'value={editRowData.portNumber} onChange={handleEditRow} required />
        </td>
        <td>
            <input type='text' name='folderPath' placeholder='Enter Folder Path'value={editRowData.folderPath} onChange={handleEditRow}  required />
        </td>
        <td><button type='submit'>Save</button></td>
    </tr>
)

export default EditRow