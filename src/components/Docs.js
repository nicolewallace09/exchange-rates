import Container from 'react-bootstrap/Container'

const Docs = () => {
    return (
        <Container>
            <h3 className='implementation-info'>Implementation of Exchange Rate Application</h3>
                <ul className='implementation-list'>
                    <li>The date pickers were used to get start and end dates then used 'onChange' event handler on the selected picker to set the startDate and endState state.</li>
                    <li>Those values were used as URL parameters using the 'Time-Series data' API endpoints from <a href='https://exchangerate.host/#/docs'>exchangerate.host</a>.</li>
                    <li>The 'Time-Series data' endpoint allows daily historical rates between two dates. The base parameter was set as USD since the purpose of this application is for the currency to be converted from USD. In addition, the symbols parameter was set to USD and EUR because those are the points of comparison.</li>
                    <li>Axios was used to get the API data utilizing async/await so that the function is executed after the data is received.</li>
                    <li>A function was created to get the data from the URL and custom parameters, which was then used the 'onClick' event handler on the Submit button.</li>
                    <li>The getData function received the API which was then broken down to receive the rates object. From there it was broken down further to get separate arrays for USD rates, EUR rates, and dates.</li>
                    <li>Those separate arrays were then pushed into a data object and set the data used for graphing.</li>
                    <li>Components are separated in a simple structure - Header, Docs, Home.</li>
                    <li>The navigation lives in the the Header component which will render the Docs and Home components into separate pages.</li>
                    <li>The Home component contains datepicker and line graph along with fetching the API data and managing state.</li>
                    <li>The Docs component contains information on how this application was implemented and reasoning for chosen components/modules.</li>
                    <li>The Header component is imported to the main App component for rendering.</li>
                    <li>Please view my README for more information about usage of my application.</li>
                </ul>
            <h3 className='reasoning-info'>Choosing of OpenSource components/module</h3>
                <ul className='reasoning-list'>
                    <li>Date Picker: A standard input with type date was used for the datepicker. The date format allowed to for it to be interpolated into the URL without any additional formatting. A component/module was not used for this element.</li>
                    <li>Line Chart: For the line chart, the <a href='https://recharts.org/en-US/api/LineChart'>Recharts</a> library was used. It is easy to plug in data with an object and is very customizable.</li> 
                    <li>CSS Framework (Bootstrap): Although the criteria for this assessment is not based on styling of the UI, a CSS framework was chosen to be used to make the application look clean. Bootstrap makes styling applications easy and fast.</li>
                    <li>Routing: React-router-dom was used to route the components to be used my Header component. It allows ease of customizing routes which is also compatible with Bootstap's Nav component.</li>
                </ul>
        </Container>
    )
}

export default Docs;