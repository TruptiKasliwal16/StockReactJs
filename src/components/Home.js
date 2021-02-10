import React from 'react';
import './Home.css';
import Images  from './Images/Stockholding Button.svg';
import Logo   from './Images/Stock Usage Button.svg';
import Image from './Images/Faded Environmental Button.svg';
const Home = () =>{
    return(
        <div>

        <div className="sidenav">
        <a href="#">
            <i class="fa fa-home"></i>DASHBOARD</a>
        <a href="#"><i class="fas fa-bars" ></i>
            CATALOGUE</a>
        <a href="#"><i class="fas fa-list" ></i>
            ORDERS</a>
        <a href="#"><i class="fa fa-line-chart" ></i>
            REPORTS</a>
    </div>
    
    <div class="main">
        
    <ul class="nav">
        <h3>IN-TRADE
        <li class="list" ><button>Logout</button></li>
        <li class="list"><i class="fa fa-shopping-cart" ></i></li>
        <li class="list"><i class="fa fa-bell" ></i></li>
        <li class="list"><i class="fa fa-circle" ></i></li>  </h3>
    </ul>
    </div>

    <div class="main1">
        <h2 class="hh2">Reports</h2>
    </div>

    <div class="row">
        <div class="column">
            <img src={Images}></img>
            <h2 class="h">Stockholding Reports</h2>
            <p>What can I do here?
            <ul>
                <li class="l">View current stock levels</li>
                <li class="l">View locations of stock held on site</li>
                <li class="l">View/amend minimun stock quantity</li>
                <li class="l">Review low stock alerts</li>
                <li class="l">Place oreders for low stock items</li>
            </ul>
        </p>

        </div>
        <div class="column">
        <img src={Logo}></img>
            <h2 class="h">Stock Usage Reports</h2>
            <p>What can I do here?
                <ul>
                    <li class="l">View stock usage by units or by spend</li>
                    <li class="l">Compare usage by category or by product</li>
                    <li class="l" >Compare usage over different periods</li>
                </ul>
            </p>
        </div>
        <div class="column">
        <img src={Image}></img>
            <h2 class="h">Environmental Reports</h2>

        </div>
    </div>
    </div>
    )
}
export default Home;