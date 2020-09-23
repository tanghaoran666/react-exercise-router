import React from "react";
import {Link} from 'react-router-dom';
import './AboutUs.css'
class AboutUs extends React.Component{
    render(){
        return <div>
            <div className='left'>
            <div>Company:ThoughtWorks Local</div>
            <br />
            <div>Location: Xi'an</div>
            <br />
            <div>For more information,please</div>
            <br />
            <div>view our</div>
            <Link to="/">website</Link>
            </div>
            <div className='tips'>
                点击website跳转到<br />
                Home页面
            </div>
        </div>
    }
}

export default AboutUs;