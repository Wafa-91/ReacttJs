
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Container} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
       <h1 >Welcome </h1>
       <Container>
       <Form className="frm">
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
</div> 
   
  );
}

export default App;
