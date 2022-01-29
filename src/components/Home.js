import { useState } from "react";
import axios from 'axios'; 
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
import { Container, Row, Col, Button } from 'react-bootstrap'; 


const Home = () => {
    const [items, setItems] = useState([]); 
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const getData = () => {
        axios.get(`https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=USD&symbols=USD,EUR`)
        .then((response) => {
            setItems(response.data.rates); 
            console.log(response.data.rates)
        })
        .catch((err) => console.log(err)); 
    }

    const graphData = [{"date": '01-23-2020', "usd": 100, "eur": 400, "rate": 500}, {"date": '01-22-2020', "usd": 300, "eur": 200, "rate": 400}]


    console.log(startDate, "start", endDate, "end")

    return (
        <Container>
             <Row>
                <Col xs={12} s={12} m={3} lg={3}> 
                    <section className='startDate'>
                        <label for="startDate">Start Date</label>
                        <input type="date" id="start" value={startDate} onChange={e => setStartDate(e.target.value)}/>
                    </section>
                </Col>
                <Col xs={12} s={12} m={3} lg={3}>
                    <section className='endDate'>
                        <label for="endDate">End Date</label>
                        <input type="date" id="endDate" onChange={e => setEndDate(e.target.value)}/>
                    </section>
                </Col>
                <Col xs={12} s={12} m={3} lg={3}>
                    <Button 
                        variant="primary"
                        onClick={() => getData()}>Submit
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>         
                    <section className='lineGraph'>
                        <LineChart 
                            width={500} 
                            height={300} 
                            data={graphData} 
                            margin={{ 
                                top: 5, 
                                right: 20, 
                                bottom: 5, 
                                left: 0 }}
                            >
                            <Line 
                                type="monotone" 
                                dataKey="usd" 
                                stroke="#206ba4" 
                            />
                            <Line 
                                type="monotone" 
                                dataKey="eur" 
                                stroke="#dc3644" 
                            />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend/>
                            <ResponsiveContainer/>
                        </LineChart>
                    </section>
                </Col>
            </Row>
   
            
        </Container>
    )
}

export default Home;

// example data

// const data = [
//     {
//       "date": "Page A",
//       "USD": 4000,
//       "EUR": 2400,
//       "rate": 2400
//     }
// ]