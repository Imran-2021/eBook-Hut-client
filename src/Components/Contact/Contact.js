import React from 'react';

const Contact = () => {
    return (
            <>
            <div className="my-5">
                <h2 className="text-center">Contact Us</h2>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <from>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="name"  placeholder="name"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email"  placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input type="tel" class="form-control" name="number"  placeholder="number"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="textmessage"  placeholder="write your message"></textarea>
                        </div>
                        <div class="col-12">
                        <button class="btn btn-primary w-100" type="submit">Submit form</button>
                    </div>
                        </from>
                    </div>
                </div>
            </div>
            </>
    );
};

export default Contact;