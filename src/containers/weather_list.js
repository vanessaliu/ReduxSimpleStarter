import React, {Component} from "react";
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
    renderWeather(cityData) {
        const {name, country} = cityData.city;
        const CelsiusTemps =  cityData.list.map(weather => (weather.main.temp - 273));
        const humiditys =  cityData.list.map(weather => weather.main.humidity);
        const pressures =  cityData.list.map(weather => weather.main.pressure);

        const {lon, lat} = cityData.city.coord;
        return (
            <tr key={name} classrName='row'>
                <td className="col-xs-3"><GoogleMap lon={lon} lat={lat}/> <span>{name}, {country}</span></td>
                <td className="col-xs-3"><Chart data={CelsiusTemps} color='orange' units='°C'/></td >
                <td className="col-xs-3"><Chart data={humiditys} color='green' units='pHa'/></td>
                <td className="col-xs-3"><Chart data={pressures} color='black' units='%'/></td>
            </tr>
        );
    }
    render(){
        return(
            <table className='table table-hover'>
                <thead>
                    <tr classrName='row'>
                        <th className="col-xs-3">City</th>
                        <th className="col-xs-3">Temperature (°C)</th>
                        <th className="col-xs-3">Pressure (hPa)</th>
                        <th className="col-xs-3">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );

    }
}

function mapDispatchToProps(state) {
    return {weather: state.weather};
}

export default connect(mapDispatchToProps)(WeatherList);