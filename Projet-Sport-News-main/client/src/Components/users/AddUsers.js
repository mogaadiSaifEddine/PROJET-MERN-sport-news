import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {Link} from 'react-router-dom'
import { registerUser } from "../../Redux/actions/sportAction";
import NavBar from "../NavBar/navBar";
const AddUsers = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [cancel, setCancel] = useState(false);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(registerUser({name,lastName,email, password,role }));
    setCancel(!cancel);
  };
  return (
    <>
    <NavBar/>
    <Card>
<CardHeader title="WELCOME TO THE ADMINISTRATION" />
 
 <Link to="/listusers">
          {" "}
          <Button outline color="success">List Users</Button>
        </Link>
        <Link to="/adduser">
          {" "}
          <Button outline color="success">Create user</Button>
        </Link>
      
        </Card>
      {cancel ? (
        <Redirect to="/listusers" />
      ) : (
        <div style={{ margin: "100px" }}>
            <Form>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="Enter name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Last Name</Label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="Enter Last Name"
              />
            </FormGroup>
           
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">password</Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Role</Label>
              <Input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="Enter Role"
              />
            </FormGroup>
            <Button onClick={add}  outline color="success">Add contact</Button>
            <Button  outline color="success" onClick={() => setCancel(!cancel)}>cancel</Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default AddUsers;