import React from 'react'
import Heading from "../Reusable/Heading"

export default function contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form method="POST" action="https://formspree.io/mlepzwwo">
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="mobile" id="mobile" placeholder="Your Contact"/>
                    </div>
                    <div className="form-group">
                        <textarea type="text" className="form-control" name="description" id="description" placeholder="Your Message"/>
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>
        </section>
    )
}
