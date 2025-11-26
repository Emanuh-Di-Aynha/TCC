export default function Estequiometria() {
    return (
        <div>
            <h1 style={{ fontSize: 24, fontWeight: 700 }}>Estequiometria</h1>
            <p style={{ color: '#475569' }}>Relações quantitativas entre reagentes e produtos.</p>
            <h3>Passos:</h3>
            <ol>
                <li>Balancear a equação.</li>
                <li>Calcular massas molares (M).</li>
                <li>Converter massa ↔ mol e aplicar proporções molares.</li>
            </ol>
            <pre style={{ background: '#f1f5f9', padding: 12, borderRadius: 8 }}>
                C₂H₆ + O₂ → CO₂ + H₂O
                Balanceada: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O
            </pre>
        </div>
    );
}