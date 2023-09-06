// import def from "ajv/dist/vocabularies/discriminator"
import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/rectangle.png)" }}>
    <div>
        <a href="https://www.aluracursos.com/">\
            <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.aluracursos.com/">\
            <img src="/img/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.aluracursos.com/">\
            <img src="/img/instagram.png" alt="Instagram" />
        </a>
    </div>
    <img src="/img/logo.png" alt="org" />
    <strong>Desarrollado por Fenix Corp MX</strong>
    </footer>
}

export default Footer