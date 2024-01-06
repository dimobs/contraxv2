
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SignatureCanvas from 'react-signature-canvas';
import { useState } from 'react';
import './StyleFile.css';
import { Container } from 'react-bootstrap';


function Home() {
const [sign, setSign] = useState();

const handleClear = (e) => {
  e.preventDefault();
  sign.clear();
}

  return (

     <Container style={{ border: '2px black', width: '100%', maxWidth: '500px', margin: 'auto', marginBottom: '20px' }}>
    <Form  >
      <Row  className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2} className='col-form-label'>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>


        <div style={{ border: '2px solid black', width: '100%', maxWidth: '500px', margin: 'auto', marginBottom: '20px' }}>
        <SignatureCanvas  penColor='green'
    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} 
    ref={data=> setSign(data)}
    
    />
       <Button 
       variant="secondary" 
       type="submit"
       onClick={handleClear}
       >
        clear
      </Button>
    </div>
      </fieldset>
      <div>
              <div className="flex items-center">
                  <input
                    id="terms-and-privacy"
                    name="terms-and-privacy"
                    type="checkbox"
                    style={{marginRight:'10px'}}
                  />
                  <label
                    htmlFor="terms-and-privacy"
                    className="ml-2 block text-sm text-gray-900 dark:text-green-100"
                  >
                    I agree to the
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 dark:text-green-300">
                      Terms
                    </a>
                    and
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 dark:text-green-300">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
</div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Home;