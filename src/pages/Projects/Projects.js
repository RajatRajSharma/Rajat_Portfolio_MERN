import './Projects.css'

const Projects = () => {
  return (
    <>
        <div className='container project' id='project'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'><em>Endeavors Gallery</em></h2>
            <hr />
            <p className='col-12 text-center'>
                👉 Explore my recent projects with source code, YouTube explanations, and links—a concise showcase of my innovative work.
            </p>
            {/* Project's Card */}
            <div className='row' id='ads'>
                
                    <div className='col-lg-4 col-sm-6 mb-5'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>Django Network_twitter</span>
                                <img src='https://raw.githubusercontent.com/RajatRajSharma/Network_twitter/main/project4/CS50W_P4_home.png' alt="Project1" />
                            </div>
                            <div className='card-image-overly m-auto mt-2' style={{height:'fit-content'}}>
                                <span className='card-detail-badge'>Django</span>
                                <span className='card-detail-badge'>Python</span>
                                <span className='card-detail-badge'>HTML-CSS-JavaScript</span>
                            </div>
                            <div className='card-body p-2' style={{height:'fit-content'}}>
                                <div className='ad-title m-auto p-0'>
                                    <h6>It's a Django website similar to Twitter, with features like Like/Dislike ,Blog writting, Follower/Following, Personal account etc.</h6>
                                </div>
                            </div>
                            <div className='column mx-2' style={{height:'65px'}}>
                                <a className='ad-btn btn-git mx-2' href='https://github.com/RajatRajSharma/Network_twitter'>Github</a>
                                <a className='ad-btn btn-yt mx-2' href='https://youtu.be/WOWzp7vTf3U'>Youtube</a>
                            </div>
                        </div>
                    </div>
                
               
                    <div className='col-lg-4 col-sm-6 mb-5'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>On_Campus_Recruitment</span>
                                <img src='https://raw.githubusercontent.com/RajatRajSharma/On_Campus_Recruitment-Flask/main/static/CS50X_home.png' alt="Project2" />
                            </div>
                            <div className='card-image-overly m-auto mt-2' style={{height:'fit-content'}}>
                                <span className='card-detail-badge'>Flask</span>
                                <span className='card-detail-badge'>Python</span>
                                <span className='card-detail-badge'>SQLite</span>
                                <span className='card-detail-badge'>HTML-CSS-JavaScript</span>
                            </div>
                            <div className='card-body p-2' style={{height:'fit-content'}}>
                                <div className='ad-title m-auto p-0'>
                                    <h6>It's a Flask website which uses 5 tables to store data which ultimately helps in On Campus recruitment process for both users i.e students and companies.</h6>
                                </div>
                            </div>
                            <div className='column mx-2' style={{height:'65px'}}>
                                <a className='ad-btn btn-git mx-2' href='https://github.com/RajatRajSharma/On_Campus_Recruitment-Flask'>Github</a>
                                <a className='ad-btn btn-yt mx-2' href='https://youtu.be/J4MSydfFP9U'>Youtube</a>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-4 col-sm-6 mb-5'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>Multi-website Web Scraping</span>
                                <img src='https://d1pnnwteuly8z3.cloudfront.net/images/4d5bf260-c3d0-4f21-b718-8ede8d4ca716/febf9de6-8a5a-4055-b274-e685485496f5.jpeg' alt="Project3" />
                            </div>
                            <div className='card-image-overly m-auto mt-2' style={{height:'fit-content'}}>
                                <span className='card-detail-badge'>Python</span>
                                <span className='card-detail-badge'>BeautifulSoup</span>
                            </div>
                            <div className='card-body p-2' style={{height:'fit-content'}}>
                                <div className='ad-title m-auto p-0'>
                                    <h6>Compact Python web scraping code with BeautifulSoup. Extracts data from diverse websites like Kshitij Jalori, PapaDontPreach, and Pryka, ensuring efficiency and scalability.</h6>
                                </div>
                            </div>
                            <div className='column mx-2' style={{height:'65px'}}>
                                <a className='ad-btn btn-git mx-2' href='https://github.com/RajatRajSharma/Web_scraping_BeautifulSoup'>Github</a>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-4 col-sm-6 mb-5'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>CRUD_MERN</span>
                                <img src='https://raw.githubusercontent.com/RajatRajSharma/CRUD_MERN/main/client/CRUD_form.png' alt="Project4" />
                            </div>
                            <div className='card-image-overly m-auto mt-2' style={{height:'fit-content'}}>
                                <span className='card-detail-badge'>MongoDB</span>
                                <span className='card-detail-badge'>Express</span>
                                <span className='card-detail-badge'>React</span>
                                <span className='card-detail-badge'>NodeJS</span>
                                <span className='card-detail-badge'>HTML-CSS-JavaScript</span>
                            </div>
                            <div className='card-body p-2' style={{height:'fit-content'}}>
                                <div className='ad-title m-auto p-0'>
                                    <h6>This is a website that provides basic CRUD operation using MERN.</h6>
                                </div>
                            </div>
                            <div className='column mx-2' style={{height:'65px'}}>
                                <a className='ad-btn btn-git mx-2' href='https://github.com/RajatRajSharma/CRUD_MERN'>Github</a>
                                <a className='ad-btn btn-link mx-2' href='https://teal-sable-66bf14.netlify.app/'>LINK</a>
                            </div>
                        </div>
                    </div>
                
               
                    <div className='col-lg-4 col-sm-6 mb-5'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>Text Converter</span>
                                <img src='https://raw.githubusercontent.com/RajatRajSharma/ReactConverter/master/ReactConverter_ll.png' alt="Project5" />
                            </div>
                            <div className='card-image-overly m-auto mt-2' style={{height:'fit-content'}}>
                                <span className='card-detail-badge'>MongoDB</span>
                                <span className='card-detail-badge'>Express</span>
                                <span className='card-detail-badge'>React</span>
                                <span className='card-detail-badge'>NodeJS</span>
                                <span className='card-detail-badge'>HTML-CSS-JavaScript</span>
                            </div>
                            <div className='card-body p-2' style={{height:'fit-content'}}>
                                <div className='ad-title m-auto p-0'>
                                    <h6>It's a MERN wensite which uses basic logic to convert a given text based on button clicked with features like Read time, char and word count.</h6>
                                </div>
                            </div>
                            <div className='column mx-2' style={{height:'65px'}}>
                                <a className='ad-btn btn-git mx-2' href='https://github.com/RajatRajSharma/ReactConverter'>Github</a>
                                <a className='ad-btn btn-link mx-2' href='https://rajatrajsharma.github.io/ReactConverter/'>LINK</a>
                            </div>
                        </div>
                    </div>
                
                   
                    <div className='col-lg-4 col-sm-6 mb-5'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>Mail_gmail</span>
                                <img src='https://raw.githubusercontent.com/RajatRajSharma/Mail_gmail/main/mail/CS50W_P3_home.png' alt="Project1" />
                            </div>
                            <div className='card-image-overly m-auto mt-2' style={{height:'fit-content'}}>
                                <span className='card-detail-badge'>Django</span>
                                <span className='card-detail-badge'>Python</span>
                                <span className='card-detail-badge'>HTML-CSS-JavaScript</span>
                            </div>
                            <div className='card-body p-2' style={{height:'fit-content'}}>
                                <div className='ad-title m-auto p-0'>
                                    <h6>Explore a Django-powered email client with Inbox, Compose, Sent, Archive, and Admin pages. Elevate your web dev skills with seamless email actions and API calls!</h6>
                                </div>
                            </div>
                            <div className='column mx-2' style={{height:'65px'}}>
                                <a className='ad-btn btn-git mx-2' href='https://github.com/RajatRajSharma/Mail_gmail'>Github</a>
                                <a className='ad-btn btn-yt mx-2' href='https://youtu.be/1aOlTk_MKL4'>Youtube</a>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </>
  )
}

export default Projects