import React from 'react';

import whatsappIcon  from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/62650643?s=460&u=aee3096780f7cadc0bd25c6afe677b438ee4a722&v=4" alt="Leonardo Freedy" />
                <div>
                    <strong>Leonardo Freedy</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vída das
                pessoas através de experiÇencias. Mais de 2000.000 pessoas já passaram por
                uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;