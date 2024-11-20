function Footer() {
  return (
    <footer id="my-footer">
      <hr />
      <div className="footer-content">
        <a href="#" className="footer-icon" target="_self">
          <i className="fab fa-github"></i>{" "}
        </a>
        <a href="#" className="footer-icon" target="_self">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="footer-icon" target="_self">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div id="copy-right">
        <h5>@2024 Shyguy, All rights reserved</h5>
      </div>
    </footer>
  );
}

export default Footer;
