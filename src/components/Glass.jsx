import GlassSurface from './GlassSurface'

// Só desktop com mouse e sem "reduzir movimento" recebe a refração real.
const canRefract =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine) and (min-width: 900px)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Camada de vidro (GlassSurface) atrás do conteúdo de elementos com a classe "has-glass".
// - refract: refração real (cara: recalcula o fundo animado a cada quadro) — usada só
//   em poucos elementos pequenos (barra do menu e botões).
// - sem refract: versão "leve", com o mesmo brilho e borda de vidro, sem custo por quadro.
export default function Glass({ radius = 20, refract = false, className = '', ...props }) {
  const real = refract && canRefract
  return (
    <GlassSurface
      className={`glass-layer ${real ? '' : 'glass-lite'} ${className}`}
      width="100%"
      height="100%"
      borderRadius={radius}
      distortionScale={-180}
      displace={0.5}
      backgroundOpacity={0.1}
      refraction={real}
      {...props}
    />
  )
}
