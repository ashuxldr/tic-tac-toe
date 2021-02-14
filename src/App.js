import React, { useState } from 'react';
import Icon from './components/icons';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");


const App = () => {

  const [isCross, setIsCross] = useState('false');
  const [winMessage, setWinMessge] = useState('');

  const reloadGame = () => {
    setIsCross('false');
    setWinMessge("");
    itemArray.fill('empty', 0, 9);
  };

  const checkIsWinner = () => {
    // if ()
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: 'success' });
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross)
    }
    else {
      return toast("already filled", { type: 'error' })

    }
    checkIsWinner();
  };



  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <h1 className="text-white text-center m-4">TIC-TAC-TOE</h1>
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h2 className="text-success text-uppercase text-center" >{winMessage}</h2>
              <Button className="success" block onClick={reloadGame} >Reload the Game</Button>
            </div>
          ) : (
              <h2 className="text-center text-warning text-uppercase mt-2 mb-2">
                {isCross ? "Cross" : "Circle"} turns
              </h2>
            )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="Box ">
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
