import "../Footer/Footer.css"

function Footer() {
    return(
        <footer className="footer">
            <h3>Hotel Mirabell</h3>
  
            <div className="socialIcons">
                <a href="https://instagram.com"></a>
                <a href="https://facebook.com"></a>
                <a href="https://twitter.com" ></a>
                <a href="https://linkedin.com"></a>
            </div>
    
            <p className="copyright">
            Todos los derechos reservados <span>©</span> 2023
            </p>
      </footer>
    );
}

export default Footer;