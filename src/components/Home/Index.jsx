
import { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate, Link } from 'react-router-dom'

import Logo from '../../assets/img/logo.jpg'

const HomePage = () => {

    return (
        <Fragment>
            <div className='py-4 custom-margin'>
                <div className="container py-4 mx-auto">
                    <section className='custom-menu'>
                        <div className='header-menu'>
                            <div className="grid lg:grid-cols-12 md:grid-cols-12 p-4">
                                <div className='flex items-center justify-center lg:col-span-2 md:col-span-12'>
                                    {/* <h1 className=''>FINOS</h1> */}
                                    <h1 className='custom-h1'>FINOS</h1>
                                </div>
                                <div className='lg:col-span-8 mx-auto'>
                                    <div className="flex navbar-center my-menu">
                                        <ul className="">
                                            <li>Home</li>
                                            <li>Features </li>
                                            <li>Services</li>
                                            <li>Price</li>
                                            <li>Info</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='lg:col-span-2 py-2'>
                                    <div className="flex items-center justify-center col-end">
                                        <button className='btn btn-sm custom-h1'> Login</button>
                                        <button className='ml-2 btn btn-sm signup-button custom-h1'> Sign up</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                    <section className='hero-section'>
                        <div className='grid grid-cols-1 text-center'>
                            <div className='heading'>
                                <h1>Get a trip On your Business <br />
                                    Future with FINIOS CRM
                                </h1>
                                <div className='py-2 mx-auto description lg:w-140'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='clients'>
                        <div className='heading'>
                                <h1>Integrate with the tools <br />
                                    Already used
                                </h1>
                                <div className='py-2 mx-auto description lg:w-140'>
                                    <p>Get more done a day by connecting capsule to all your software </p>
                                        
                                </div>
                            </div>
                            <div className='client-slider'>
                                <div className='grid grid-cols-5 gap-4'>
                                <div className='mx-auto text-center'><img src={Logo}   alt='' width='150' /></div>
                                <div className='mx-auto text-center'><img src={Logo}   alt='' width='150' /></div>
                                <div className='mx-auto text-center'><img src={Logo}   alt='' width='150' /></div>
                                <div className='mx-auto text-center'><img src={Logo}   alt='' width='150' /></div>
                                <div className='mx-auto text-center'><img src={Logo}   alt='' width='150' /></div>
                                </div>
                                
                            </div>
                    </section>
                </div>
            </div>
        </Fragment>

    );
}

export default HomePage;