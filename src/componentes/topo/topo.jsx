import estilo from "./topo.module.css"
import Logo from "../Logo/logo"
export default function Topo(){
    return (
    <header className={estilo.header}>
        <div className={estilo.caixa_menu}>
            <div className={estilo.topo_logo}>
                <Logo/>
            </div>
            <div className={estilo.linha}></div>
            <nav className={estilo.nav_menu}>
                <a href="/Sorveteria">Home</a>
                <a href="/Sorveteria/sabores">Sabores</a>
                <a href="/Sorveteria/sobre">Sobre</a>
            </nav>
        </div>

    </header>
    )
}
