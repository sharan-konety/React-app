import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const UserForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address1: '',
        address2: '',
        state: '',
        city: '',
        zipCode: '',
        dob: '',
    });
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState([]);

    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
        "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
        "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ]; // Replace with actual state names

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        let tempErrors = {};
        let formIsValid = true;

        if (!form.firstName || form.firstName.length > 20) {
            formIsValid = false;
            tempErrors['firstName'] = 'First name is required and should not exceed 20 characters.';
        }

        if (!form.lastName || form.lastName.length > 20) {
            formIsValid = false;
            tempErrors['lastName'] = 'Last name is required and should not exceed 20 characters.';
        }

        if (!form.phoneNumber || form.phoneNumber.length !== 10) {
            formIsValid = false;
            tempErrors['phoneNumber'] = 'Phone number is required and should be exactly 10 digits.';
        }

        if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
            formIsValid = false;
            tempErrors['email'] = 'A valid email is required.';
        }

        if (!form.address1 || form.address1.length > 50) {
            formIsValid = false;
            tempErrors['address1'] = 'Address 1 is required and should not exceed 50 characters.';
        }

        if (!form.state) {
            formIsValid = false;
            tempErrors['state'] = 'State is required.';
        }

        if (!form.city || form.city.length > 50) {
            formIsValid = false;
            tempErrors['city'] = 'City is required and should not exceed 50 characters.';
        }

        if (!form.zipCode || form.zipCode.length > 5) {
            formIsValid = false;
            tempErrors['zipCode'] = 'Zip code is required and should not exceed 8 digits.';
        }

        if (!form.dob || new Date().getFullYear() - new Date(form.dob).getFullYear() < 18) {
            formIsValid = false;
            tempErrors['dob'] = 'Date of birth is required and user should be at least 18 years old.';
        }

        setErrors(tempErrors);
        return formIsValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setSubmittedData([...submittedData, form]);
            setForm({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                address1: '',
                address2: '',
                state: '',
                city: '',
                zipCode: '',
                dob: '',
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField name="firstName" label="First Name" value={form.firstName} onChange={handleInputChange} error={errors.firstName ? true : false} helperText={errors.firstName} />
                <TextField name="lastName" label="Last Name" value={form.lastName} onChange={handleInputChange} error={errors.lastName ? true : false} helperText={errors.lastName} />
                <TextField name="phoneNumber" label="Phone Number" value={form.phoneNumber} onChange={handleInputChange} error={errors.phoneNumber ? true : false} helperText={errors.phoneNumber} />
                <TextField name="email" label="Email" value={form.email} onChange={handleInputChange} error={errors.email ? true : false} helperText={errors.email} />
                <TextField name="address1" label="Address 1" value={form.address1} onChange={handleInputChange} error={errors.address1 ? true : false} helperText={errors.address1} />
                <TextField name="address2" label="Address 2" value={form.address2} onChange={handleInputChange} />
                <FormControl>
                    <InputLabel>State</InputLabel>
                    <Select name="state" value={form.state} onChange={handleInputChange} error={errors.state ? true : false}>
                        {states.map((state, index) => (
                            <MenuItem key={index} value={state}>
                                {state}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField name="city" label="City" value={form.city} onChange={handleInputChange} error={errors.city ? true : false} helperText={errors.city} />
                <TextField name="zipCode" label="Zip Code" value={form.zipCode} onChange={handleInputChange} error={errors.zipCode ? true : false} helperText={errors.zipCode} />
                <TextField name="dob" label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} value={form.dob} onChange={handleInputChange} error={errors.dob ? true : false} helperText={errors.dob} />
                <Button type="submit" variant="contained" color="primary"></Button>
            </form>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address 1</TableCell>
                            <TableCell>Address 2</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Zip Code</TableCell>
                            <TableCell>Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {submittedData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{data.firstName}</TableCell>
                                <TableCell>{data.lastName}</TableCell>
                                <TableCell>{data.phoneNumber}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.address1}</TableCell>
                                <TableCell>{data.address2}</TableCell>
                                <TableCell>{data.state}</TableCell>
                                <TableCell>{data.city}</TableCell>
                                <TableCell>{data.zipCode}</TableCell>
                                <TableCell>{data.dob}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default UserForm;