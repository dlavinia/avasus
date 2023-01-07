<template>
    <footer>
        <section class="footer-1">
            <h1>Realização</h1>
            <div>
                <img src="@/assets/logo-lais.svg" alt="Lais">
                <img src="@/assets/logo-ufrn.svg" alt="UFRN">
            </div>
        </section>

        <section class="footer-2">
            <div class="col20">
                <img src="@/assets/logo-lais.svg" id="logo-footer" alt="Lais">
                <p>Laboratório de Inovação <br> Tecnológica em Saúde.</p>
            </div>
            <div class="col20">
                <h1>Links Úteis</h1>
                <nav>
                    <ul>
                        <li><a href="#">Início </a></li>
                        <li><a href="#">Sobre Nós </a> </li>
                        <li><a href="#">Módulos </a></li>
                        <li><a href="#">Parceiros </a></li>
                        <li><a href="#">Transparência </a></li>
                    </ul>
                </nav>
            </div>
            <div class="col20" id="socialmedia">
                <h1>Redes sociais</h1>
                <ul>
                    <li><a href="#"> <img src="@/assets/icons/facebook.svg" alt="facebook"> </a></li>
                    <li><a href="#"><img src="@/assets/icons/twitter.svg" alt="twitter"></a> </li>
                    <li><a href="#"><img src="@/assets/icons/instagram.svg" alt="instagram"></a></li>
                </ul>
            </div>


        </section>

        <section class="copyright">
            <p> 2022 © LAIS (HUOL). Todos os direitos reservados</p>
        </section>
    </footer>
</template>
<script>
export default {
    name: 'FooterApp'
}
</script>

<style scoped>
footer,
footer a {
    color: #fff;
}

footer h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 1rem;
}

footer section {
    display: flex;
    padding: 2rem;
}

.footer-1 {
    background-color: var(--main-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.footer-1 div img {
    margin: 36px;
}

.footer-2 {
    background-color: var(--footer-dark);
    justify-content: center;
}

.footer-2 ul li {
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
}

#logo-footer {
    width: 120px;
}

#socialmedia ul {
    display: flex;
}

#socialmedia ul li {
    margin: 20px 16px;
}

.col20 {
    width: 20%;
}

.copyright {
    background-color: var(--footer-color);
    justify-content: center;
    font-weight: 400;
    font-size: 18px;
}

@media only screen and (max-width: 600px) {
    .footer-1 div img {
        margin: 15px;
        width: 40%;
    }
    .col20 {
    width: 100%;
}
.footer-2 {
    flex-direction: column;
}
footer h1 {
    margin: 1rem 0;
}
}
</style>

