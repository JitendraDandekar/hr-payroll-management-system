import React, { useState } from 'react';

export const Context = React.createContext();

function ContextProvider(props) {
	const login = localStorage.getItem("loggedIn") ? true : false;
	const [loggedIn, setLoggedIn] = useState(login);
	const [employees, setEmployees] = useState([]);
	const [empId, setEmpId] = useState();

	const value = {
		loggedIn: loggedIn,
		setLoggedIn: setLoggedIn,
		employees: employees,
		setEmployees: setEmployees,
		empId: empId,
		setEmpId: setEmpId,
	}

	return(
		<Context.Provider value={value}>
			{props.children}
		</Context.Provider>
		);
}
export default ContextProvider;