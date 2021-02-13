import React, { useState } from 'react';
import './App.css';
import Icon from './components/icons';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const itemArray = new Array(9).fill("empty");


const App = () => {

  const [isCross, setIsCross] = useState('false');
  const [winMessage, setWinMessge] = useState('');

  const reloadGame = () => {
    // itemArray.fill('empty')
  };

  const checkIsWinner = () => {
    // if ()
  };

  const changeItem = () => {
    // 
  };



  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-6">
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card>
                <CardBody className="Box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
