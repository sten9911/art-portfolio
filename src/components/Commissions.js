import React, { useState } from 'react';
import Arrow from './misc-images/arrow.svg';
import "../App.scss";
import { CSSTransition } from 'react-transition-group';

const Commissions = () => {

    const [showContract, setShowContract] = useState(true);
    const [sendButton, setSendButton] = useState("Submit")
    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
      });
    
    const switchHandler = () =>{
        setShowContract(!showContract);
    };

    function handleStateChange(e) {
    setMailerState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
    }

    const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });

    // eslint-disable-next-line no-unused-vars
    const response = await fetch("https://gerdalekstein.com/send", {
        method: "POST",
        headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify({ mailerState }),
    })
        .then((res) => res.json())
        .then(() => {
            setSendButton("Sent!")
        })
        .then(() => {
        setMailerState({
            email: "",
            name: "",
            message: "",
        });
        });
    };


    return (
        <div className="commissions">

            <CSSTransition in={showContract} timeout={500} classNames='slide' unmountOnExit={true}>
                <div className="com-contract" key="contract">
                    <div className="com-contract-container">
                        <h1 className="noselect">Rules</h1>
                        <p className="contract-text">The commission price is paid upfront</p><hr className="hor-line"/>
                        <p className="contract-text">I will provide a sketch or a preview if requested</p><hr className="hor-line"/>
                        <p className="contract-text">I keep the right right to refuse to do any commission</p><hr className="hor-line"/>
                        <p className="contract-text">I will refund a commission if you haven't recieved it in 2 months</p>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition in={showContract} timeout={500} classNames="slideAway" unmountOnExit={false}>
            <div className={showContract ? "com-form com-form-active" : "com-form"}>
                <img alt="arrow" src={Arrow} className={showContract ? "contract-btn noselect" : "contract-btn-active noselect"} onClick={switchHandler} />
                <form onSubmit={submitEmail} encType="multipart/form-data" method="post">

                    <h1 className="com-title noselect">Commission request</h1>

                    <div className="form-item">
                        <label htmlFor="name" className="noselect">Name:</label><br/>
                        <input type="text" id="name" name="name" className="name" onChange={handleStateChange} value={mailerState.name}/><br/>
                    </div>

                    <div className="form-item">
                        <label htmlFor="email" className="noselect">Email:</label><br/>
                        <input type="email" id="email" name="email" className="email" onChange={handleStateChange} value={mailerState.email} required/><br/>
                    </div>

                    <div className="form-item">
                        <label htmlFor="message" className="noselect">Describe your request:</label><br/>
                        <textarea type="text" id="message" name="message" rows="6" className="request" onChange={handleStateChange} value={mailerState.message} required/><br/>
                    </div>    

                    <input type="submit" name="submit" value={sendButton} className="submit noselect"/>

                </form>
            </div>
            </CSSTransition>

        </div>
    )
}

export default Commissions
