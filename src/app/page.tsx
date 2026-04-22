import Image from "next/image";
import ScrollObserver from "@/components/ScrollObserver";
import PetitionForm from "@/components/PetitionForm";
import { getSignatures } from "@/app/actions";

export default async function Home() {
  const { count, recent } = await getSignatures(10);

  return (
    <main>
      <ScrollObserver />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/gene-hero-bg.jpg"
            alt="Gene Anthony Ray"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">A Petition to the City of New York</p>
          <h1 className="hero-title">Every Block Has a Hero.<br /><span className="text-gold">This One Was Ours.</span></h1>
          <p className="hero-subtitle">
            Harlem&rsquo;s very own Gene Anthony Ray &mdash; Tony Ray &mdash; Leroy from <em>Fame</em>.<br />
            A global star who never stopped being a neighborhood hero.
          </p>
          <div className="hero-actions">
            <a href="#petition" className="btn btn-primary">Add Your Name</a>
          </div>
          {count >= 0 && (
            <div className="hero-counter">
              <p className="hero-counter-text">
                <strong>{count.toLocaleString()}</strong> of <strong>500</strong> signatures &mdash; <em>help us reach our goal</em>
              </p>
              <div className="progress-bar-track">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${Math.min((count / 500) * 100, 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="hero-scroll-indicator">
          <span>His Story</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* The Ask Banner */}
      <section className="ask-banner">
        <div className="container">
          <p className="ask-label">The Ask</p>
          <p className="ask-text">
            Co-name <strong>153rd Street between 8th Avenue &amp; Macombs Place</strong> as
          </p>
          <p className="ask-name">Gene Anthony Ray Way</p>
        </div>
      </section>

      {/* The Roots */}
      <section className="bio-section">
        <div className="container bio-grid">
          <div className="bio-text fade-in">
            <p className="section-label">Harlem, 1962</p>
            <h2>Born Feet First</h2>
            <p>
              Gene Anthony Ray came into this world at <strong>Harlem Hospital</strong>{" "} on May 24, 1962 &mdash; the son of Jean Elizabeth Ray and James Ray. He arrived feet first. His mother always said that meant one thing:
            </p>
            <div className="quote-block">
              &ldquo;He was born to dance.&rdquo;
            </div>
            <p>
              Gene grew up on <strong>153rd Street between 8th Avenue and Macombs Place</strong> &mdash; the very block this petition seeks to name in his honor. He attended <strong>PS 46</strong>, then graduated to <strong>IS 10</strong>{" "} on 149th and 7th Avenue. Everyone in the neighborhood knew the kid who couldn&rsquo;t stop moving. Dancing was his language, and he spoke it everywhere &mdash; on stoops, at block parties, anywhere there was a beat and enough room to spin.
            </p>
            <p>
              After winning every local dance competition he entered, Gene earned his way into the <strong>New York High School of the Performing Arts</strong> &mdash; the legendary institution that would later inspire the very film that made him famous. There, he sharpened raw street talent into disciplined artistry, learning the culture and craft of dance alongside some of the most gifted young performers in the city.
            </p>
          </div>
          <div className="bio-image fade-in">
            <Image
              src="/images/gene-stoop.jpeg"
              alt="Young Gene Anthony Ray sitting on a Harlem stoop"
              width={500}
              height={650}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* The Rise */}
      <section className="bio-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container bio-grid">
          <div className="bio-image fade-in">
            <div className="image-stack">
              <Image
                src="/images/gene-fame-still.jpg"
                alt="Gene Anthony Ray as Leroy Johnson in Fame"
                width={640}
                height={360}
                style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto' }}
              />
              <Image
                src="/images/gene-tv-guide.jpg"
                alt="Gene Anthony Ray on the cover of TV Guide, November 1982"
                width={400}
                height={540}
                style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto', marginTop: '1rem' }}
                className="tv-guide-cover"
              />
              <Image
                src="/images/fame-cast-poster.jpg"
                alt="The original Fame TV series cast with Gene Anthony Ray front and center"
                width={500}
                height={600}
                style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto', marginTop: '1rem' }}
              />
            </div>
          </div>
          <div className="bio-text fade-in">
            <p className="section-label">The Audition That Changed Everything</p>
            <h2>A Day Late. A Legend Early.</h2>
            <p>
              At 17 years old, Gene showed up to an open audition for a movie called <em>&ldquo;Hot Lunch&rdquo;</em> &mdash; a film that would later be renamed <strong><em>Fame</em></strong>. There was one problem: he was a day late. The auditions were closed. Every part had been cast.
            </p>
            <p>
              Gene did the only thing he knew how to do. He begged them to let him dance. The producers shrugged &mdash; <em>what could it hurt?</em> &mdash; and gave him the floor.
            </p>
            <p>
              When he finished, they didn&rsquo;t just offer him a job. They gave him the <strong>lead role</strong>. Gene Anthony Ray became <strong>Leroy Johnson</strong> &mdash; the raw, magnetic, unapologetically gifted street dancer who became the soul of <em>Fame</em>.
            </p>

            {/* Impact Stats */}
            <div className="impact-stats">
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Academy Awards</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Golden Globes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Seasons</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">136</span>
                <span className="stat-label">Episodes</span>
              </div>
            </div>

            <p>
              <em>Fame</em> grossed over <strong>$42 million</strong> at the box office, won two Academy Awards, and spawned a television series that ran for six seasons and 136 episodes. The show won two Golden Globe Awards, produced UK Top&nbsp;10 singles, and turned its cast into international superstars. Gene toured the world as part of <strong>&ldquo;The Kids from Fame&rdquo;</strong> &mdash; performing live concerts across Europe and beyond. The franchise pioneered the musical television drama genre, paving the way for shows like <em>Glee</em>, and its cultural influence &mdash; from legwarmers to headbands &mdash; defined 1980s youth culture worldwide.
            </p>
            <p>
              Gene&rsquo;s career extended beyond Leroy. He appeared on Broadway in <strong><em>Carrie: The Musical</em></strong>. He starred in <strong><em>Out-of-Sync</em></strong>, directed by his <em>Fame</em>{" "} co-star Debbie Allen. He choreographed and acted in <strong><em>Eddie</em></strong>{" "} alongside Whoopi Goldberg. He landed national commercials for Dr&nbsp;Pepper and Diet&nbsp;Coke. The world knew his name.
            </p>
          </div>
        </div>
      </section>

      {/* The Heart */}
      <section className="bio-section heart-section">
        <div className="container fade-in">
          <div className="heart-portrait">
            <Image
              src="/images/gene-portrait.jpg"
              alt="Gene Anthony Ray portrait"
              width={200}
              height={250}
              style={{ objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--accent-gold)' }}
            />
          </div>
          <p className="section-label text-center">The Measure of a Man</p>
          <h2 className="text-center" style={{ marginBottom: '2.5rem' }}>
            He Could Have Gone Anywhere.<br />
            <span className="text-gold">He Chose to Stay.</span>
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="body-large">
              Through all his success &mdash; the Academy Awards, the world tours, the international celebrity &mdash; Gene Anthony Ray remained exactly who he had always been: a kid from 153rd Street.
            </p>
            <p className="body-large">
              He performed at neighborhood block parties like they were Madison Square Garden. He went into his own pockets to finance programs and ventures brought to him on behalf of the kids in his community. He didn&rsquo;t write checks from a distance &mdash; he showed up. He was <em>present</em>. Always.
            </p>
            <p className="body-large">
              Gene gave up a penthouse apartment to live on the Lower East Side &mdash; closer to his childhood friends, closer to his roots. He chose stoops over spotlights. He chose Harlem over Hollywood. In doing so, he defined something that no award could ever capture:
            </p>
            <div className="quote-block" style={{ textAlign: 'center', borderLeft: 'none', borderTop: '2px solid var(--accent-gold)', borderBottom: '2px solid var(--accent-gold)', padding: '1.5rem', margin: '2.5rem auto', maxWidth: '600px' }}>
              The definition of never forgetting where you came from.
            </div>
            <p className="body-large" style={{ textAlign: 'center' }}>
              Gene Anthony Ray passed away on November 14, 2003, at the age of 41. But his legacy &mdash; on screen and on the streets of Harlem &mdash; is permanent.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Street */}
      <section className="bio-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container text-center fade-in">
          <p className="section-label">The Case for Co-Naming</p>
          <h2 style={{ marginBottom: '2rem' }}>Why 153rd Street</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="body-large">
              New York City has a proud tradition of honoring its cultural legends through honorary street co-namings. In Harlem alone, <strong>Cicely Tyson Way</strong>, <strong>Frederick Douglass Boulevard</strong>, and <strong>Isaac &ldquo;Fatman Scoop&rdquo; Freeman III Place</strong> stand as testaments to the people who shaped these blocks.
            </p>
            <p className="body-large">
              Gene Anthony Ray&rsquo;s claim is as strong as any. He was born here. He was raised here. He became a global icon &mdash; the star of an Oscar-winning, Golden&nbsp;Globe&ndash;winning, internationally beloved franchise &mdash; and he <em>chose to come back here</em>. He invested in this community with his time, his money, and his presence until the very end.
            </p>
            <p className="body-large">
              <strong>153rd Street between 8th Avenue and Macombs Place</strong>{" "} isn&rsquo;t just a location on a petition. It is where Gene Anthony Ray became who he was. It is the street that shaped a star &mdash; and the star who never stopped shaping it back.
            </p>
          </div>
        </div>
      </section>

      {/* Petition Section */}
      <section id="petition" className="petition-section">
        <div className="container fade-in">
          <p className="section-label text-center">Take Action</p>
          <h2 className="text-gold" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
            Sign the Petition
          </h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 1rem', color: 'var(--text-muted)' }}>
            We are formally petitioning <strong style={{ color: 'var(--text-main)' }}>Manhattan Community Board 9</strong> and the <strong style={{ color: 'var(--text-main)' }}>New York City Council</strong> to officially co-name 153rd Street between 8th Avenue and Macombs Place as:
          </p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-family-heading)', fontWeight: 600, marginBottom: '2.5rem', color: 'var(--accent-gold)' }}>
            Gene Anthony Ray Way
          </p>
          
          <PetitionForm />
          
          {count > 0 && (
            <div className="community-support fade-in" style={{ marginTop: '4rem', textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'var(--font-family-heading)', color: 'var(--accent-gold)', marginBottom: '1.5rem', textAlign: 'center' }}>
                Join {count} {count === 1 ? 'supporter' : 'supporters'} who have signed
              </h3>
              <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                {recent.map((sig) => (
                  <div key={sig.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{sig.displayName}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>{sig.connection}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1.5rem', maxWidth: '500px', margin: '1.5rem auto 0' }}>
            Your information will only be used in support of this petition and will be submitted alongside community signatures to Manhattan Community Board 9 and the NYC City Council.
          </p>
        </div>
      </section>
      
      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <div className="container">
          <p style={{ marginBottom: '0.5rem' }}>A petition by <strong style={{ color: 'var(--text-main)' }}>The Ray Family</strong> &amp; the community of Harlem.</p>
          <p>&copy; {new Date().getFullYear()} The Gene Anthony Ray Family. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
