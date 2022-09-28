import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import './App.css';
import Lists from './components/Lists';
import AddUser from './components/AddUser';

function App() {
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    useEffect(() => {
        _fetchData();
    }, [])

    const _fetchData = async () => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
            setUsers(data);
            setFilteredUsers(data);
        } catch (e) {
            console.log(e);
        }
    }

    const _filterData = (text) => {
        if (text == '') {
            setFilteredUsers(users);
        } else {
            let temp = users?.filter(el => el?.name?.toLowerCase().includes(text?.toLowerCase()));
            setFilteredUsers(temp);
        }
    }
    return (
        <Container>
            <div className='header'>
                <h2>YellowPages</h2>
            </div>
            <div className='search-section'>
                <Row>
                    <Col lg={8} md={8} sm={8}>
                        <input type={'text'} placeholder='Search' className='form-control mb-2' onChange={e => _filterData(e.target.value)} />
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <Button variant='primary' onClick={() => setShowModal(true)}>Add Users</Button>
                    </Col>
                </Row>
            </div>
            <div className='main-section'>
                <Row>
                    <Lists data={filteredUsers} />
                </Row>
            </div>
            {
                showModal && (
                    <AddUser show={showModal} setShow={setShowModal} setUsers={setUsers} setFilteredUsers={setFilteredUsers} />
                )
            }
            <div style={{ height: 40 }}></div>
        </Container>
    );
}

export default App;
