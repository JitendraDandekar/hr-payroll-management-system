import React, { useState, useEffect } from 'react';
import ProfilePic from './profile-picture.png';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';

function AddEmployeeDetails({ dataHandle, data }) {
	return(
		<div>
			<h4>Personal Details</h4>
				<div className="row">
					<div className="profile-picture col-3">
						<img src={ProfilePic} alt="ProfilePic" className="profile-pic" />
						<div>
							<div className="input-file">
								<input type="file" name="profilePic" id="profilePic" />
								<label htmlFor="profilePic"><PublishIcon className="input-file-label" /></label>
							</div>
							<DeleteIcon className="delete-icon" />
						</div>
					</div>
					<div className="col-9">
						<div className="row">
							<div className="mb-1 col-md-6">
								<span className="form-lebel">First Name</span>
								<input type="text" name="firstname" className="form-control" value={data.firstname} onChange={dataHandle} />
							</div>
							<div className="mb-1 col-md-6">
								<span className="form-lebel">Last Name</span>
								<input type="text" name="lastname" className="form-control" value={data.lastname} onChange={dataHandle} />
							</div>
						</div>
						<div className="row">
							<div className="mb-1 col">
								<span className="form-lebel">Email</span>
								<input type="text" name="email" className="form-control" value={data.email}  onChange={dataHandle} />
							</div>
						</div>
						<div className="row">
							<div className="mb-1 col-md-6">
								<span className="form-lebel">Contact</span>
								<input type="text" name="contact" className="form-control" value={data.contact} onChange={dataHandle} />
							</div>
							<div className="mb-1 col-md-6">
								<span className="form-lebel">Alternate Contact</span>
								<input type="text" name="altContact" className="form-control" value={data.altContact} onChange={dataHandle} />
							</div>
						</div>
						<div className="row mb-1">
							<span className="form-check-lebel col-md-3">Gender :</span>
							<div className="form-check col-md-3">
								<input type="radio" name="gender" value="male" className="form-check-input" onChange={dataHandle} />
								<span className="form-check-lebel">Male</span>
							</div>
							<div className="form-check col-md-3">
								<input type="radio" name="gender" value="female" className="form-check-input" onChange={dataHandle} />
								<span className="form-check-lebel">Female</span>
							</div>
							<div className="form-check col-md-3">
								<input type="radio" name="gender" value="trangender" className="form-check-input" onChange={dataHandle} />
								<span className="form-check-lebel">Trangender</span>
							</div>
						</div>
						<div className="row">
							<div className="mb-1 col-md-6">
								<span className="form-lebel">Date Of Birth</span>
								<input type="date" name="dob" className="form-control" value={data.dob} onChange={dataHandle} />
							</div>
							<div className="mb-2 col-md-6">
								<span className="form-lebel">Blood Group</span>
								<input type="text" name="bloodGroup" className="form-control" value={data.bloodGroup} onChange={dataHandle} />
							</div>
						</div>
					</div>
				</div>
		</div>
		);
}
export default AddEmployeeDetails;

export function AddEmployeeAddress({ dataHandle }) {
	return(
		<div>
			<h4>Address Details</h4>
			<div className="row">
			{/*	<div className="mb-1 col-md-6">
								<span className="form-lebel">House No</span>
								<input type="text" name="houseNo" className="form-control" onChange={dataHandle}  />
								<span className="form-lebel">State</span>
								<input type="text" name="state" className="form-control" onChange={dataHandle}  />
								<span className="form-lebel">Country</span>
								<input type="text" name="country" className="form-control" onChange={dataHandle}  />
							</div>*/}
				<div className="mb-1 col-md-6">
					<span className="form-lebel">Address</span>
					<textarea name="address" className="form-control" onChange={dataHandle}  rows="3" />
					{/*<span className="form-lebel">Pin Code</span>
										<input type="text" name="pinCode" className="form-control" onChange={dataHandle}  />*/}
				</div>
			</div>
		</div>
		);
}

export function AddEmployeeCorporateDetails({ dataHandle }) {
	return(
		<div>
			<h4>Corporate Details</h4>
			<div className="row">
				<div className="mb-1 col-md-6">
					<span className="form-lebel">Department</span>
					<input type="text" name="department" className="form-control" onChange={dataHandle}  />
				</div>
				<div className="mb-1 col-md-6">
					<span className="form-lebel">Designation</span>
					<input type="text" name="designation" className="form-control" onChange={dataHandle}  />
				</div>
				<div className="mb-1 col-md-6">
					<span className="form-lebel">Job Title</span>
					<input type="text" name="jobTitle" className="form-control" onChange={dataHandle}  />
				</div>
				<div className="mb-1 col-md-6">
					<span className="form-lebel">Salary</span>
					<input type="text" name="salary" className="form-control" onChange={dataHandle}  />
				</div>
				<div className="mb-1 col-md-6">
					<span className="form-lebel">Date Of Hired</span>
					<input type="date" name="dateOfHired" className="form-control" onChange={dataHandle}  />
				</div>
				<div className="mb-1 col-md-6">
					<span className="form-lebel">Date Of Joined</span>
					<input type="date" name="dateOfJoined" className="form-control" onChange={dataHandle}  />
				</div>			
			</div>
		</div>
		);
}

export function AddEmployeeDocuments({ dataHandle }) {
	return(
		<div>
			<h5>Documents</h5>
			<div className="document-container">
					<div className="input-group mb-2">
						<span className="input-group-text w-25">Pan Card</span>
						<input type="file" className="form-control" onChange={dataHandle}  name="panCard"/>
					</div>
					<div className="input-group mb-2">
						<span className="input-group-text w-25">Aadhar Card</span>
						<input type="file" className="form-control" onChange={dataHandle}  name="aadharCard"/>
					</div>
					<div className="input-group mb-2">
						<span className="input-group-text w-25">Passbook</span>
						<input type="file" className="form-control" onChange={dataHandle}  name="passbook"/>
					</div>
					<div className="input-group mb-2">
						<span className="input-group-text w-25">Passport</span>
						<input type="file" className="form-control" onChange={dataHandle}  name="passport"/>
					</div>
			</div>
		</div>
		);
}