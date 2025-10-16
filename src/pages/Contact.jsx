'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Cona() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ekako97',       // e.g. service_xxx
                'template_zjr40pa',      // e.g. template_yyy
                form.current,
                't3rPYjEZLB2J1W3zV'        // e.g. iZAbcd123...
            )
            .then(
                (result) => {
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    alert('Something went wrong: ' + error.text);
                }
            );
    };

    return (
        <>
            {/* Contact Section */}
            <section className="contact-section-12 fix section-padding">
                <div className="container">
                    <div className="contact-wrapper-12">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                {/* Address, Phone, Email, Map */}
                                {/* (unchanged from your code) */}
                            </div>

                            <div className="col-lg-6">
                                <div className="contact-box">
                                    <div className="section-title mb-0">
                                        <h2>Get In Touch</h2>
                                    </div>
                                    <form ref={form} onSubmit={sendEmail} className="contact-form-items">
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="user_name" placeholder="Your Name" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="email" name="user_email" placeholder="Email" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <select name="service" className="single-select w-100" required>
                                                        <option value="">Select Service</option>
                                                        <option value="Service 01">Service 01</option>
                                                        <option value="Service 02">Service 02</option>
                                                        <option value="Service 03">Service 03</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="appointment_date" placeholder="mm/dd/yyyy" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="appointment_time" placeholder="Time" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <textarea name="message" placeholder="Type Here" required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="theme-btn">
                                                    <span>Send Now <i className="icon-arrow-right"></i></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-banner-section">
            <div class="container">
                <div class="cta-banner-wrapper">
                    <div class="row g-4 align-items-end">
                        <div class="col-lg-6">
                            <h2>
                                Technology is rapidly evolving to the field
                            </h2>
                        </div>
                        <div class="col-lg-6">
                            <div class="cta-list-items">
                                <ul>
                                    <li>
                                        <i class="fa-regular fa-chevrons-right"></i>
                                        TechSavvy Solutions
                                    </li>
                                    <li>
                                        <i class="fa-regular fa-chevrons-right"></i>
                                        NetworkNinja Services
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <i class="fa-regular fa-chevrons-right"></i>
                                        TechSavvy Solutions
                                    </li>
                                    <li>
                                        <i class="fa-regular fa-chevrons-right"></i>
                                        NetworkNinja Services
                                    </li>
                                </ul>
                            </div>
                            <div class="main-button wow fadeInUp" data-wow-delay=".3s">
                                <a href="about.html"> <span class="theme-btn"> Contact Us </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
