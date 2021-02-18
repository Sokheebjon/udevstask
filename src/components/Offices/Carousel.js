import React, {Component} from "react";
import Slider from "react-slick";
import arrow from '../../assets/rightArrow.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './offices.module.css'


function NextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, borderRadius: "50%"}}
            onClick={onClick}
        >
            <img src={arrow} alt=""/>
        </div>
    );
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, borderRadius: "50%"}}
            onClick={onClick}
        >
            <img className={styles.leftArrow} src={arrow} alt=""/>
        </div>
    );
}

export default class Carousel extends Component {

    render() {

        const carouselData = [
            {
                year: "2018 - 2019",
                users: "97 mil. monthly active users",
                information: "Voice and video calls, VK Pay, VK Mini Apps, privacy reforms, mobile app redesign, QR code platform",
            },
            {
                year: "2016 - 2017",
                users: "86 mil. monthly active users",
                information: "Smart feed and recommendations, Stories, VK Live, money transfers, VK Music",
            },
            {
                year: "2014 - 2015",
                users: "66 mil. monthly active users",
                information: "Stickers, Market platform"
            },
            {
                year: "2012 - 2013",
                users: "42 mil. monthly active users",
                information: "Marketplace for communities",
            },
            {
                year: "2010 - 2011",
                users: "21 mil. monthly active users",
                information: "News feed, official app for iOS and Android",
            },
            {
                year: "2008 - 2009",
                users: "8 mil. monthly active users",
                information: "Apps, games, gifts and an advertising platform"
            },
            {
                year: "2006-2007",
                information: "VK was founded, audio and video platform"
            }
        ]
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            draggable: false,
            initialSlide: 0,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            responsive: [
                {
                    breakpoint: 1260,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        draggable: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        draggable: true,
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings} className="carousel">
                    {carouselData ? carouselData.map((d, i) => (
                        <div className={styles.carouselBox} key={i}>
                            <div className={styles.carLine}></div>
                            <h2>{d.year}</h2>
                            <p className={styles.user}>{d.users}</p>
                            <p className={styles.info}>{d.information}</p>
                        </div>
                    )) : null}
                </Slider>
            </div>
        );
    }
}
