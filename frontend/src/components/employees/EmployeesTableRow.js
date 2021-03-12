import React, { useState, useContext } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { Context } from '../API/Context';

function EmployeesTableRow({ srno, emp_id, employee_name, department, designation, gender, date_of_hired, date_of_joined }) {
	const value = useContext(Context);

	return(
		<tr>
			<th scope="row">{srno}</th>
			<th>{emp_id}</th>
			<td>{employee_name}</td>
			<td>{department}</td>
			<td>{designation}</td>
			<td>{gender}</td>
			<td>{date_of_hired}</td>
			<td>{date_of_joined}</td>
			<td className="edit-btn" title="edit"><Link to="/update-employee" onClick={()=>{value.setEmpId(emp_id)}}><EditIcon /></Link></td>
		</tr>
		);
}
export default EmployeesTableRow;