import React from 'react'
import './Contact.css'

const Contact = () => {
    
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ad2c413d-73a5-41d2-8b4a-f9aab4e853c3");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
    };
        
  return (
    <>
        <div className='container contact' id='contact'>
            
                <div className='card card0 border-0'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-6'>
                            <div className='card1'>
                                <div className='row'>
                                    <img src='https://ticketgenie.in/Image/ContactUs/contact.svg' 
                                    alt='ocontact' className='contactImg'/>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 fill-line'>
                            <div className='card2 d-flex card border-0 px-2 py-3'>
                                <div className='row contactme'>
                                    <h6>Contact me with 
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png' className='mx-1' alt='linkedin'/>
                                        <img src='https://www.svgrepo.com/show/361181/github.svg' className='mx-1' alt='github'/>
                                        <img src='https://www.svgrepo.com/show/13671/youtube.svg' className='mx-1' alt='youtube'/>
                                    </h6>
                                    <div className='lorl column px-0 d-flex align-items-center justify-content-center'>
                                        <div className='line border-line flex-grow-1' />
                                        <small className='or text-center mx-2'>OR</small>
                                        <div className='line border-line flex-grow-1' />
                                    </div>
                                    <form onSubmit={onSubmit}>
                                        <div className='row'>
                                            <input type='text' name='name' placeholder='Enter your Name' className='mb-3' />
                                            <input type='email' name='email' placeholder='Enter your Email Address' className='mb-3' />
                                            <textarea type='text' name='msg' placeholder='Write your message' rows={3} />
                                        </div>
                                        <div className='row'>
                                            <button className='button' type='submit'>SEND MESSAGE</button>
                                        </div>
                                    </form>
                                    <span>{result}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    </>
  )
}

export default Contact