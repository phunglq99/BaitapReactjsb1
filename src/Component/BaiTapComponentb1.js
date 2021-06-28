import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Banner from './Banner';
import Items from './Items';
import Footer from './Footer';
export default class BaiTapComponentb1 extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <div className="banner py-5">
                    <Banner />
                </div>
                <div className="item pt-4">
                    <Items />
                </div>
                <div className="footer py-5 bg-dark">
                    <Footer />
                </div>
            </div>
        )
    }
}
