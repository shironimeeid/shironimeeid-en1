import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {


  const instagramUrl = () => {
    window.open('https://www.instagram.com/sora.azami/')
  }
  
  return (
    <div className="footer">
      <h1>
        <span className="white">Anime</span>Trix
      </h1>
      <p className="footer-about">
        AnimeTrix.SH is not affiliated with or endorsed by any of the anime studios
        behind the creation of the anime presented on this site. This website is
        only an user interface presenting/linking various self-hosted files
        across the internet by other third-party providers for easy access.
        AnimeTrix never downloads the video from any source provider, link will
        be returned from the response hence it is completely not subjected to
        DMCA compliant.
      </p>
      <div className="footer-social">
        <button onClick={() => instagramUrl()}>
          <InstagramIcon />
        </button>
      </div>
    </div>
  );
}
export default Footer;