import GlassSurface from './GlassSurface'

// Camada de vidro (GlassSurface) que se encaixa atrás do conteúdo de qualquer
// elemento com a classe "has-glass" — sem mudar o layout de cards, botões e barras.
export default function Glass({ radius = 20, ...props }) {
  return (
    <GlassSurface
      className="glass-layer"
      width="100%"
      height="100%"
      borderRadius={radius}
      distortionScale={-180}
      displace={0.5}
      backgroundOpacity={0.1}
      {...props}
    />
  )
}
