import React from "react";
import styles from "./Rodape.module.scss";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import instagram from "./instagram.svg";

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a 
                href="https://github.com/Luscabap"
                target="_blank"
                rel="noreferrer"
                >
                    <img src={github} alt="Ícone do GitHub" />
                </a>
                <a 
                href="https://www.linkedin.com/in/lucas-baptista-da-silva-133779233/"
                target="_blank"
                rel="noreferrer"
                >
                    <img src={linkedin} alt="ícone do Linkedin" />
                </a>
                <a 
                href="https://www.instagram.com/lucass_bap/"
                target="_blank"
                rel="noreferrer"
                >
                    <img src={instagram} alt="ícone do Instagram" />
                </a>
            </div>
            <p>Desenvolvido por Lucas Baptista &copy; | 2023</p>
        </footer>
    )
}