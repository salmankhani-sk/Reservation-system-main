import React from 'react';

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>Do you even enjoy checking these bloody projects? I honestly do not understand you...</p>
                </div>
                <div>
                    <h3>
                        Links
                    </h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservation</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>
                        Contact
                    </h3>
                    <ul>
                        <li> Address: <br/> 18 Petersburg, USA</li>
                        <li> Phone: <br/> 613 179 4908, USA</li>
                        <li> Address: <br/> Iamtired@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>
                        Social Media Links
                    </h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>X</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    );
};

export default Footer;