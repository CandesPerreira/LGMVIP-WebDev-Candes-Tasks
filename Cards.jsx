import React from 'react';



function Cards(  ){
    return(
        <>

        <h1 id="heading"><strong>CLIENTS NAME</strong></h1>
        <div className="cards">
            <div className="card">
                <img src="https://reqres.in/img/faces/1-image.jpg" alt="" className="card_img" />
                <div className="card_info">
                    <h2 id="name">George Bluth</h2>
                    <h4  id="email">george.bluth@reqres.in</h4>
                </div>
            </div>
        </div>
        
        <div className="cards">
            <div className="card">
                <img src="https://reqres.in/img/faces/2-image.jpg" alt="" className="card_img" />
                <div className="card_info">
                    <h2 id="name">Janet Weaver</h2>
                    <h4 id="email">anet.weaver@reqres.in</h4>
                </div>
            </div>
        </div>
        
        <div className="cards">
            <div className="card">
                <img src="https://reqres.in/img/faces/3-image.jpg" alt="" className="card_img" />
                <div className="card_info">
                    <h2 id="name">Emma Wong</h2>
                    <h4 id="email">emma.wong@reqres.in</h4>
                </div>
            </div>
        </div>

        <div className="cards">
            <div className="card">
                <img src="https://reqres.in/img/faces/4-image.jpg" alt="" className="card_img" />
                <div className="card_info">
                    <h2 id="name">Eve Holt</h2>
                    <h4 id="email">eve.holt@reqres.in</h4>
                </div>
            </div>
        </div>

        <div className="cards">
            <div className="card">
                <img src="https://reqres.in/img/faces/5-image.jpg" alt="" className="card_img" />
                <div className="card_info">
                    <h2 id="name">Charles Morris</h2>
                    <h4 id="email">charles.morris@reqres.in</h4>
                </div>
            </div>
        </div>

        <div className="cards">
            <div className="card">
                <img src="https://reqres.in/img/faces/6-image.jpg" alt="" className="card_img" />
                <div className="card_info">
                    <h2 id="name">Tracey Ramos</h2>
                    <h4 id="email">tracey.ramos@reqres.in</h4>
                </div>
            </div>
        </div>

        
        </>
    );
};


export default Cards;