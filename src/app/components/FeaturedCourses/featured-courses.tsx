import React from 'react';
import "./featured-courses.css";
import Image from 'next/image'
import courseone from '/public/courseone.svg'
import coursetwo from '/public/coursetwo.svg'
import coursethree from '/public/coursethree.svg'
import coursefour from '/public/coursefour.svg'
import kevin from '/public/kevin.svg'
import star from '/public/star.svg'
import user from '/public/user.svg'
import barchat from '/public/barchat.svg'
import clock from '/public/clock.svg'

function FeaturedCourses() {
    return (
        <div className='featured-section'>
            <div className='our-featured-box'>
                <h2>Our featured courses</h2>
                <p>Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius purus et eleifend porta.</p>
            </div>
            <div className='featured-section-box'>
                <div className='featured-section-box-product'>
                    <Image
                        src={courseone}
                        alt="Picture of the author"
                    />
                    <div className='featured-section-information'>
                        <div className='featured-section-information-section'>
                            <div className='featured-section-information-box'>
                                <p className='featured-section-information-box-p-one'>Health & Fitness</p>
                                <div className='featured-section-information-box-many'>
                                    <p>$14.00</p>
                                    <p className='featured-section-information-box-many-p'>$26.00</p>
                                </div>
                            </div>
                            <div>
                                <p>Investing In Stocks The Complete Course!</p>
                            </div>
                            <div className='featured-section-person'>
                                <div className='featured-section-person-box'>
                                    <Image
                                        src={kevin}
                                        alt="Picture of the author"
                                    />
                                    <p>Kevin Gilbert</p>
                                </div>
                                <div className='featured-section-person-box-number'>
                                    <Image
                                        src={star}
                                        alt="Picture of the author"
                                    />
                                    <p>5.0</p>
                                    <p className='featured-section-person-box-number-p'>(357,914)</p>
                                </div>
                            </div>
                            <div className='featured-section-user-section'>
                                <div className='featured-section-user-box-one'>
                                    <Image
                                        src={user}
                                        alt="Picture of the author" />
                                    <p>265.7.K</p>
                                    <p>students</p>
                                </div>
                                <div className='featured-section-user-box-two'>
                                    <Image
                                        src={barchat}
                                        alt="Picture of the author" />
                                    <p>beginner</p>
                                </div>
                                <div className='featured-section-user-box-three'>
                                    <Image
                                        src={clock}
                                        alt="Picture of the author" />
                                    <p>6 hour</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='featured-section-box-product'>
                    <Image
                        src={coursetwo}
                        alt="Picture of the author"
                    />
                    <div className='featured-section-information'>
                        <div className='featured-section-information-section'>
                            <div className='featured-section-information-box'>
                                <p className='featured-section-information-box-p-two'>Personal Development</p>
                                <div className='featured-section-information-box-many'>
                                    <p>$14.00</p>
                                    <p className='featured-section-information-box-many-p'>$26.00</p>
                                </div>
                            </div>
                            <div>
                                <p>Google Analytics Certification - Learn How To...</p>
                            </div>
                            <div className='featured-section-person'>
                                <div className='featured-section-person-box'>
                                    <Image
                                        src={kevin}
                                        alt="Picture of the author"
                                    />
                                    <p>Kevin Gilbert</p>
                                </div>
                                <div className='featured-section-person-box-number'>
                                    <Image
                                        src={star}
                                        alt="Picture of the author"
                                    />
                                    <p>5.0</p>
                                    <p className='featured-section-person-box-number-p'>(357,914)</p>
                                </div>
                            </div>
                            <div className='featured-section-user-section'>
                                <div className='featured-section-user-box-one'>
                                    <Image
                                        src={user}
                                        alt="Picture of the author" />
                                    <p>265.7.K</p>
                                    <p>students</p>
                                </div>
                                <div className='featured-section-user-box-two'>
                                    <Image
                                        src={barchat}
                                        alt="Picture of the author" />
                                    <p>beginner</p>
                                </div>
                                <div className='featured-section-user-box-three'>
                                    <Image
                                        src={clock}
                                        alt="Picture of the author" />
                                    <p>6 hour</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='featured-section-box-product'>
                    <Image
                        src={coursethree}
                        alt="Picture of the author"
                    />
                    <div className='featured-section-information'>
                        <div className='featured-section-information-section'>
                            <div className='featured-section-information-box'>
                                <p className='featured-section-information-box-p-three'>Productivity</p>
                                <div className='featured-section-information-box-many'>
                                    <p>$14.00</p>
                                    <p className='featured-section-information-box-many-p'>$26.00</p>
                                </div>
                            </div>
                            <div>
                                <p>Adobe XD for Web Design: Essential Principles</p>
                            </div>
                            <div className='featured-section-person'>
                                <div className='featured-section-person-box'>
                                    <Image
                                        src={kevin}
                                        alt="Picture of the author"
                                    />
                                    <p>Kevin Gilbert</p>
                                </div>
                                <div className='featured-section-person-box-number'>
                                    <Image
                                        src={star}
                                        alt="Picture of the author"
                                    />
                                    <p>5.0</p>
                                    <p className='featured-section-person-box-number-p'>(357,914)</p>
                                </div>
                            </div>
                            <div className='featured-section-user-section'>
                                <div className='featured-section-user-box-one'>
                                    <Image
                                        src={user}
                                        alt="Picture of the author" />
                                    <p>265.7.K</p>
                                    <p>students</p>
                                </div>
                                <div className='featured-section-user-box-two'>
                                    <Image
                                        src={barchat}
                                        alt="Picture of the author" />
                                    <p>beginner</p>
                                </div>
                                <div className='featured-section-user-box-three'>
                                    <Image
                                        src={clock}
                                        alt="Picture of the author" />
                                    <p>6 hour</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='featured-section-box-product'>
                    <Image
                        src={coursefour}
                        alt="Picture of the author"
                    />
                    <div>
                        <div className='featured-section-information'>
                            <div className='featured-section-information-section'>
                                <div className='featured-section-information-box'>
                                    <p className='featured-section-information-box-p-four'>Music</p>
                                    <div className='featured-section-information-box-many'>
                                        <p>$14.00</p>
                                        <p className='featured-section-information-box-many-p'>$26.00</p>
                                    </div>
                                </div>
                                <div>
                                    <p>The Python Mega Course: Build 10 Real World ...</p>
                                </div>
                                <div className='featured-section-person'>
                                    <div className='featured-section-person-box'>
                                        <Image
                                            src={kevin}
                                            alt="Picture of the author"
                                        />
                                        <p>Kevin Gilbert</p>
                                    </div>
                                    <div className='featured-section-person-box-number'>
                                        <Image
                                            src={star}
                                            alt="Picture of the author"
                                        />
                                        <p>5.0</p>
                                        <p className='featured-section-person-box-number-p'>(357,914)</p>
                                    </div>
                                </div>
                                <div className='featured-section-user-section'>
                                    <div className='featured-section-user-box-one'>
                                        <Image
                                            src={user}
                                            alt="Picture of the author" />
                                        <p>265.7.K</p>
                                        <p>students</p>
                                    </div>
                                    <div className='featured-section-user-box-two'>
                                        <Image
                                            src={barchat}
                                            alt="Picture of the author" />
                                        <p>beginner</p>
                                    </div>
                                    <div className='featured-section-user-box-three'>
                                        <Image
                                            src={clock}
                                            alt="Picture of the author" />
                                        <p>6 hour</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCourses;