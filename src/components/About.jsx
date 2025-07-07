import React, { useState } from 'react'

const About = (props) => {

    let myStyle={
        
        color: props.mode==='light'?"#808080":"white",
        backgroundColor: props.mode==='light'?"white":"#808080"
    }
    
    
    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne" style={myStyle}
                        >
                            <strong>What is TextUtils?</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample" style={myStyle}
                    >
                        <div className="accordion-body">
                            TextUtils is a simple and efficient text manipulation tool that helps users format and analyze their text quickly. It is designed to improve productivity, especially when working with a large amount of text data.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={myStyle}
                        >
                            <strong>Why Use TextUtils?</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        style={myStyle}
                    >
                        <div className="accordion-body">
                            TextUtils is fast and easy to use, making it an ideal tool for anyone who regularly works with text. It greatly simplifies formatting tasks such as writing emails, creating blog posts, or preparing documents. The app is completely free and accessible online, with no installation required. Its user-friendly interface and helpful features make it a perfect choice for students, writers, developers, and content creators who need a quick and reliable way to format and analyze text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={myStyle}
                        >
                            <strong>Compatibility</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                        style={myStyle}
                    >
                        <div className="accordion-body">
                            TextUtils works smoothly on modern browsers and is responsive for both desktop and mobile devices.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
