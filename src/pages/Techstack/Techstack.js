import React from 'react'
import './Techstack.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faE } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faEnvira, faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const Techstack = () => {
  return (
    <>
        <div className='container techstack' id='tech_stack'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Skill Repertoire</h2>
            <hr />
            <p className='col-12 text-center'>
                👉 including programming Languages, frameworks, databases, front-end and back-end tools, and APIs
            </p>
            <div className='row d-flex justify-content-center'>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-4 col-6'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><FontAwesomeIcon icon={faHtml5} style={{color: "#ed7707", fontSize: '3em'}} /></div>
                                        <div className='media-body'><h5 className='skill_name'>HTML</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-4 col-6'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><FontAwesomeIcon icon={faCss3Alt} style={{color: "#1669d4", fontSize: '3em'}} /></div>
                                        <div className='media-body'><h5 className='skill_name'>CSS</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-4 col-6'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><FontAwesomeIcon icon={faJs} style={{color: "#f2df18", fontSize: '3em'}} /></div>
                                        <div className='media-body'><h5 className='skill_name'>Javascript</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                        <div className='card my-2 mx-0 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'>
                                            <FontAwesomeIcon icon={faEnvira} rotation={90} style={{color: "#1c6e2c", fontSize: '2.1em'}} />
                                            <FontAwesomeIcon icon={faE} style={{color: "#000000", fontSize: '2.1em'}} />
                                            <FontAwesomeIcon icon={faReact} style={{color: "#1595d5", fontSize: '2.1em'}} />
                                            <FontAwesomeIcon icon={faNodeJs} style={{color: "#2cd416", fontSize: '2.1em'}} />
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-3 col-md-5 col-sm-6 col-12'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://www.multirecruit.com/wp-content/uploads/2022/05/web-development-1-1.png' style={{ height: "3em", width: "4em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Web development</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-3 col-md-4 col-sm-6 col-10'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://www.promptcloud.com/wp-content/uploads/2023/09/QK76lEe.png' style={{ height: "3em", width: "4em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Web Scraping</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-6 col-6'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://www.svgrepo.com/show/353657/django-icon.svg' style={{ height: "2.25em", width: "2.25em", borderRadius: "0.3em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Django</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-2 col-sm-4 col-6'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://assets-global.website-files.com/63894f0e251e567f6e443bfa/64a25628612c9db05d4c7f56_63c10c7b6f20f424c72490bf_flask.png' style={{ height: "2.5em", width: "1.7em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Flask</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-2 col-sm-4 col-5'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/182px-Python-logo-notext.svg.png' style={{ height: "2.5em", width: "2.25em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Python</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-3 col-md-3 col-sm-4 col-7'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><FontAwesomeIcon icon={faBootstrap} style={{color: "#782ec2", fontSize: '2.6em'}} /></div>
                                        <div className='media-body'><h5 className='skill_name'>Bootstrap</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-2 col-sm-4 col-6'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/570px-C_Programming_Language.svg.png?20201031132917' style={{ height: "2.75em", width: "2.5em", marginRight: "0.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>C</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-2 col-sm-4 col-6'>
                        <div className='card my-2 d-flex justify-content-center mx-1'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/180px-ISO_C%2B%2B_Logo.svg.png' style={{ height: "2.75em", width: "2.5em", marginRight: "0.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>C++</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png' style={{ height: "2.5em", width: "2.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>MongoDB</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://www.domeniclabbate.com/_next/static/media/express.27b48634.png' style={{ height: "2em", width: "2em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>ExpressJS</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-4 col-5'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' style={{ height: "2.25em", width: "2.25em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>ReactJS</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-3 col-md-3 col-sm-4 col-7'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' style={{ height: "2.5em", width: "4em", marginRight: "0.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>NodeJS</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-2 col-sm-4 col-6'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://i.pngimg.me/thumb/f/720/4899479756996608.jpg' style={{ height: "2.25sem", width: "2.25em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>MySQL</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-2 col-sm-4 col-6'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png' style={{ height: "2.25em", width: "2.25em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>NextJS</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-2 col-sm-4 col-5'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0' style={{padding:"0.45em 0em"}}>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center py-2'><img src='https://qph.cf2.quoracdn.net/main-qimg-48b7a3d8958565e7aa3ad4dbf2312770' style={{ height: "2.75em", width: "2.75em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name' style={{padding:"0.6em 0em"}}>Java</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-3 col-md-3 col-sm-4 col-7'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631' style={{ height: "2.5em", width: "2.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Snowflake</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-4 col-6'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg' style={{ height: "2.5em", width: "2.5em", marginRight: "0.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Github</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-4 col-6'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0' style={{padding:"0.6em 1em"}}>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://cdn-icons-png.flaticon.com/512/10169/10169724.png' style={{ height: "2.5em", width: "2.5em", marginTop: "0.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name' style={{padding:"0.4em 0em"}}>RestAPI</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-5 col-sm-6 col-12'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0' style={{padding:"0.45em 1em"}}>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center mt-2'><img src='https://cdn-icons-png.flaticon.com/512/4215/4215831.png' style={{ height: "2.75em", width: "2.75em", marginRight: "0.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Cloud computing</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-4 col-6'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/docker_plain_logo_icon_146554.png' style={{ height: "3em", width: "3.25em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Docker</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-4 col-7'>
                        <div className='card m-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png' style={{ height: "2.5em", width: "2.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name'>Wordpress</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='col-lg-2 col-md-3 col-sm-4 col-5'>
                        <div className='card my-2 d-flex justify-content-center'>
                            <div className='card-content'>
                                <div className='card-body d-flex justify-content-center py-0' style={{padding:"0.5em 1em"}}>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='alig-self-center'><img src='https://www.lawnandlandscape.com/fileuploads/publications/1/issues/103620/articles/images/SEO_MAIN_IMAGE_fmt.png' style={{ height: "3.75em", width: "3.75em", marginRight: "0.5em"}} alt='skill-logo'></img></div>
                                        <div className='media-body'><h5 className='skill_name' style={{padding:"0.5em 0em"}}>SEO</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </>
  )
}

export default Techstack
