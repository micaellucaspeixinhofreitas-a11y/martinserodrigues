import FadeContent from './FadeContent'

export default function App() {
  return (
    <main>
      <section>
        <p>Role para baixo ↓</p>
      </section>

      <section>
        <FadeContent
          effect="mist"
          duration={1.8}
          ease="power2.out"
          stagger={0.1}
          threshold={0.1}
        >
          <h2>Slow light over the bay</h2>
          <p>Every child fades in turn.</p>
        </FadeContent>
      </section>
    </main>
  )
}
