import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1 style={{ fontSize: 28, fontWeight: 700 }}>QuimiResumos</h1>
            <p style={{ color: "#475569" }}>
                Escolha um dos conteúdos abaixo para estudar:
            </p>

            <ul style={{ lineHeight: "2" }}>
                <li><Link to="/tabela-periodica">Tabela Periódica</Link></li>
                <li><Link to="/estequiometria">Estequiometria</Link></li>
                <li><Link to="/ligacoes-quimicas">Ligações Químicas</Link></li>
                <li><Link to="/solucoes-ph">Soluções & pH</Link></li>
                <li><Link to="/termoquimica">Termoquímica</Link></li>
                <li><Link to="/eletroquimica">Eletroquímica</Link></li>
                <li><Link to="/organica">Química Orgânica</Link></li>
                <li><Link to="/gerador">Gerador de Exercícios</Link></li>
            </ul>
        </div>
    );
}