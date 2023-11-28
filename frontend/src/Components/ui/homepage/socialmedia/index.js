import React, { useEffect } from 'react';
import { useState } from 'react';
import { getAllSocialMediaUrl } from '../../../../services/socialmedia.service';

const SocialIcons = (props) => {
  const [close, setClose]= useState(true)
  const [socialMediaUrl,setSocialMediaUrl] = useState([]) 
  useEffect(()=>{
    socialMediaUrlGet()
  },[])
  const socialMediaUrlGet = async () => {
    let result = await getAllSocialMediaUrl()
    if(result.status) {
      setSocialMediaUrl(result.data)
    }
  }
  const handleIconClick = () => {
    setClose(!close)
    // Implement the function to show social float icons here
  };

  return (
    <div className="social-left-main">
      <div className="social-left-inner">
        <div className="float-sm">
          {/* Commented out the onclick attribute as we'll handle it using React events */}
          {/* <div onClick={handleIconClick} id="float-plus" style={{ cursor: 'pointer', position: 'fixed', zIndex: 999, left: '12.96px' }} className="fl-fl float-plus ui-draggable ui-draggable-handle">
            <img src="images/www.png" alt="target" />
          </div> */}
          <div onClick={handleIconClick} style={{ cursor: 'pointer' }} className="fl-fl float-cross soc">
            {close ? <>
              <i style={{ color: 'red' }} className="fa fa-close fa-social"></i>
           
            </>
            :
            <>
              {/* <i style={{ color: 'red' }} className="fa fa- fa-social"></i> */}
            <img src="../images/www.png" alt="target" />
            </>
}
            
          </div>
          {close && socialMediaUrl.length>0 && 
          <ul className="social-ul">
            {console.log("socialMediaUrl",socialMediaUrl[0])}
            {socialMediaUrl[0].facebook && <li>
              <a href={socialMediaUrl[0].facebook} target="_blank">
                <i style={{ color: '#4267B2' }} className="fa fa-facebook fa-social"></i>
              </a>
            </li>}
           {socialMediaUrl[0].twitter && <li>
              <a href={socialMediaUrl[0].twitter} target="_blank">
                <i style={{ color: '#00acee' }} className="fa fa-twitter fa-social"></i>
              </a>
            </li>}
           {socialMediaUrl[0].linkedin && <li>
              <a href={socialMediaUrl[0].linkedin} target="_blank">
                <i style={{ color: '#0077b5' }} className="fa fa-linkedin fa-social"></i>
              </a>
            </li>}
           {socialMediaUrl[0].instagram && <li>
              <a href={socialMediaUrl[0].instagram} target="_blank">
                <i style={{ color: '#cd486b' }} className="fa fa-instagram fa-social"></i>
              </a>
            </li>}
            {socialMediaUrl[0].youtube && <li>
              <a href={socialMediaUrl[0].youtube} target="_blank">
                <i style={{ color: 'red' }} className="fa fa-youtube-play fa-social"></i>
              </a>
            </li>}
            {socialMediaUrl[0].whatsapp && <li>
              <a href={socialMediaUrl[0].whatsapp} target="_blank">
                <i style={{ color: '#25D366' }} className="fa fa-whatsapp fa-social"></i>
              </a>
            </li>}
            {/* Commented out the Telegram icon as it's not currently used */}
            {/* <li>
              <a href={socialMediaUrl[0].facebook} target="_blank">
                <i style={{ color: '#25D366!important' }} className="fa fa-telegram" aria-hidden="true"></i>
              </a>
            </li> */}
          </ul>
}
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
