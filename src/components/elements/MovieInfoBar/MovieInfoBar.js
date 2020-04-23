import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { calcTime, convertMoney } from '../../../helpers.js';
import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
    return (
        <div className="rmdb-movieinfobar">
            <div className="rmdb-movieinfobar-content">
                <div className="rmdb-movieinfobar-content-col">
                    <FontAwesomeIcon className="fa-time" icon="clock" size="2x" />
                    <span className="rmdb-movieinfobar-info">Runnig TIme: {calcTime(props.time)}</span>
                </div>
                <div className="rmdb-movieinfobar-content-col">
                    <FontAwesomeIcon className="fa-budget" icon="money-bill" size="2x" />
                    <span className="rmdb-movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
                </div>
                <div className="rmdb-movieinfobar-content-col">
                    <FontAwesomeIcon className="fa-revenue" icon="ticket-alt" size="2x" />
                    <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieInfoBar;
