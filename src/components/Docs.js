import Container from 'react-bootstrap/Container'

const Docs = () => {
    return (
        <Container>
            <h3 className='implementation-info'>Implementation of Exchange Rate Application</h3>
                <ul className='implementation-list'>
                    <li>I used my date pickers to get my start and end dates. I set my dates from using 'onChange' event handler on the selected picker.</li>
                    <li>From there I plugged those values into my URL parameters using the 'Time-Series data' API endpoints from <a href='https://exchangerate.host/#/docs'>exchangerate.host</a></li>
                    <li>The 'Time-Series data' endpoint allowed me to get daily historical rates between two dates. I also added the base parameter to be USD since that is the currency we want to convert and the symbols parameter to be USD and EUR because they will be my points of data to graph and there was no use to get the rates from other countries because they were not needed. </li>
                    <li>I used Axios to get the API data. I traditionally used fetch to get data in my applications, but I've read Axios has a lot of benefits especially for React applications. Although I could have simply used fetch for this assessment's purpose I wanted to start utilizing Axios when using API data.</li>
                    <li>I created a function to that uses Axios to get the data from my URL and custom parameters, which is used for my 'onClick' event handler on my Submit button.</li>
                    <li>I separated my components in a simple structure - Header, Docs, Home.</li>
                    <li>The navigation lives in the the Header component which will render the Docs and Home components into separate pages.</li>
                    <li>The Home component contains datepicker and line graph along with fetching the API data and managing state.</li>
                    <li>The Docs component contains information on how this application was implemented and reasoning for chosen components/modules.</li>
                    <li>The Header component will be imported to the main App component for rendering.</li>
                    <li>Please view my README for more information about usage of my application.</li>
                </ul>
            <h3 className='reasoning-info'>Choosing of OpenSource components/module</h3>
                <ul className='reasoning-list'>
                    <li>Date Picker: I used a standard input with type date to use for my datepicker. It gave me back my date in the same format I needed to interpolate into my URL and was very simple to use. I created one to get my start date and end date individually.</li>
                    <li>Line Chart: For my line chart I chose to use the <a href='https://recharts.org/en-US/api/LineChart'>recharts</a> library. I perviously used recharts on another project that required me to graph data on a pie chart. I remembered how simple it was to plug in data and attributes of the charts I decided to use it again. I also found that there was an example of how to implement a line graph comparing two points of data.</li> 
                    <li>CSS Framework: I chose to use a CSS framework because it makes styling my application easy and fast. Although we are not being tested on style of our UI, I wanted my application to look clean. I like using Bootstrap specifically for React because of it's simple styling.</li>
                    <li>Routing: I used react-router-dom to route my components to be used in my Header component. React-router-dom is what I usually use for my navigation to links to pages in React, it is compatible to use with Bootstap's Nav component.</li>
                </ul>
        </Container>
    )
}

export default Docs;