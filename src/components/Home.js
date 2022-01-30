import { useState, useEffect } from "react";
import axios from 'axios'; 
import { Line, LineChart,  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label} from 'recharts'; 
import { Container, Row, Col, Button } from 'react-bootstrap'; 

const Home = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [graphData, setGraphData] = useState([]); 

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        await axios.get(`https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=USD&symbols=USD,EUR`)
        .then((response) => {
            // data times from response specific to rates object 
            let items = response.data.rates; 

            //  separating the values I need from items object 
            let dateRanges = Object.keys(items);
            let rates = Object.values(items);

            // setting my USD/EUR rates into separate variables 
            let usdRates = rates.map(x => x.USD); 
            let eurRates = rates.map(x => x.EUR); 

            // empty data object to use to set my graph data
            let data = []; 
            
            // looping through each of my variables to add into my data array
            for(let i = 0; i < dateRanges.length; i++) {
                data.push({ date: dateRanges[i], USD: usdRates[i], EUR: eurRates[i] })
            }

            setGraphData(data); 
        })
        .catch((err) => console.log(err)); 
    }
   
    return (
        <Container>
             <Row>
                <Col xs={12} s={12} m={3} lg={3}> 
                    <section className='startDate'>
                        <span>Start Date</span>
                        <input type="date" id="start" onChange={e => setStartDate(e.target.value)}/>
                    </section>
                </Col>
                <Col xs={12} s={12} m={3} lg={3}>
                    <section className='endDate'>
                        <span>End Date</span>
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
                    { graphData ? (
                        <LineChart 
                            width={800} 
                            height={500} 
                            data={graphData}
                            margin={{ 
                                top: 5, 
                                right: 5, 
                                bottom: 20, 
                                left: 5 }}
                            >
                            <Line 
                                type="monotone" 
                                dataKey="USD" 
                                stroke="#206ba4" 
                            />
                            <Line 
                                type="monotone" 
                                dataKey="EUR" 
                                stroke="#dc3644" 
                            />
                            <XAxis dataKey="date">
                                <Label value="Date" offset={0} position="bottom"/>
                            </XAxis>
                            <YAxis ticks={[0.5, 1, 1.50, 2]} label={{ value: 'Rates', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36}/>
                            <ResponsiveContainer/>
                        </LineChart>) : null }
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
