import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, SiGreensock, SiThreedotjs,
  SiTailwindcss, SiFigma, SiWordpress, SiShopify, SiVercel, SiGoogleanalytics, SiSupabase,
} from 'react-icons/si'
import LogoLoop from '../components/LogoLoop'

// Tecnologias que utilizo — ícone + nome, acendendo em roxo no hover
const HOVER = '#a78bfa'
const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org' },
  { node: <SiGreensock />, title: 'GSAP', href: 'https://gsap.com' },
  { node: <SiThreedotjs />, title: 'Three.js', href: 'https://threejs.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiFigma />, title: 'Figma', href: 'https://figma.com' },
  { node: <SiWordpress />, title: 'WordPress', href: 'https://wordpress.org' },
  { node: <SiShopify />, title: 'Shopify', href: 'https://shopify.com' },
  { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com' },
  { node: <SiSupabase />, title: 'Supabase', href: 'https://supabase.com' },
  { node: <SiGoogleanalytics />, title: 'Analytics', href: 'https://analytics.google.com' },
].map(logo => ({ ...logo, hoverColor: HOVER }))

export default function Marquee() {
  return (
    <div className="marquee">
      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="left"
        logoHeight={30}
        gap={64}
        hoverSpeed={0}
        scaleOnHover
        labels="inline"
        muted={0.35}
        fadeOut
        fadeOutWidth={0.12}
        draggable
        intro
        ariaLabel="Tecnologias que utilizo"
      />
    </div>
  )
}
