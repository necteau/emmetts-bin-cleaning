import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { CalendarDays, CheckCircle2, Droplets, Home, MapPin, MessageSquareText, ShieldCheck, Sparkles, SprayCan, Star, Timer, Truck, Waves } from 'lucide-react';
import './styles.css';

const plans = [
  { name: 'First-Time Fresh Start', price: '$25', cadence: 'one bin', tag: 'Try it once', items: ['Deep inside/outside wash', 'Sanitize + deodorize', 'Perfect after parties or summer heat'] },
  { name: 'Monthly Fresh', price: '$18', cadence: 'per bin / visit', tag: 'Best for families', items: ['Cleaned after trash pickup', 'Text reminder', 'Priority summer route'] },
  { name: 'Quarterly Reset', price: '$22', cadence: 'per bin / visit', tag: 'Most popular', items: ['Every 3 months', 'Keeps odor from building up', 'Great for trash + recycling'] },
];

const steps = [
  ['1', 'Leave bins out', 'Put empty bins curbside or where Emmett can safely access them after pickup.'],
  ['2', 'Blast + sanitize', 'High-pressure wash removes grime; sanitizer and deodorizer finish the job.'],
  ['3', 'Clean curb comeback', 'Bins are returned fresh, drained, and ready to stop haunting the garage.'],
];

const services = [
  { icon: Home, title: 'Residential bins', copy: 'Trash and recycling cans cleaned inside and out for families, garages, and curb appeal.' },
  { icon: Truck, title: 'HOA route days', copy: 'Cluster neighborhood appointments together for efficient service and tidy streets.' },
  { icon: ShieldCheck, title: 'Small business cans', copy: 'Useful for offices, shops, cafés, and service businesses with recurring waste areas.' },
  { icon: SprayCan, title: 'Pressure-wash add-ons', copy: 'Driveway spots, bin pads, and small rinse-down jobs can be quoted separately.' },
];

function App() {
  useEffect(() => {
    const els = [...document.querySelectorAll('[data-reveal]')];
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    const onScroll = () => document.documentElement.style.setProperty('--scroll', window.scrollY / 900);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return <main>
    <nav className="nav">
      <a className="brand" href="#top"><span className="brand-mark">E</span><span>Emmett’s<br/><b>Mobile Bin Cleaning</b></span></a>
      <div className="nav-links"><a href="#process">Process</a><a href="#plans">Plans</a><a href="#quote">Quote</a></div>
      <a className="nav-cta" href="#quote">Text to get on the route</a>
    </nav>

    <section id="top" className="hero">
      <div className="mist mist-a"/><div className="mist mist-b"/>
      <div className="hero-copy" data-reveal>
        <p className="eyebrow"><Sparkles size={16}/> Local curbside cleaning • no more garage stink</p>
        <h1>Fresh bins, clean curb, zero Saturday scrubbing.</h1>
        <p className="lead">Emmett’s Mobile Bin Cleaning Service comes to your curb after trash pickup, pressure-washes the grime, sanitizes the inside, and leaves your trash and recycling bins smelling like they have reconsidered their life choices.</p>
        <div className="hero-actions"><a className="button primary" href="#quote">Get a quick quote</a><a className="button ghost" href="#process">See how it works</a></div>
        <div className="proof-row"><span><CheckCircle2/> Sanitized</span><span><Timer/> 10–15 min typical stop</span><span><Waves/> Dirty water contained</span></div>
      </div>
      <div className="hero-stage" data-reveal>
        <img className="hero-img tilt" src="/images/hero.png" alt="Mobile bin cleaning operator washing bins at a sunny curb"/>
        <div className="floating-card clean-card"><b>411M?</b><span>Bins can carry serious bacteria. We prefer fewer science experiments near the driveway.</span></div>
        <div className="floating-card route-card"><MapPin size={18}/><span>Neighborhood route days available</span></div>
      </div>
    </section>

    <section className="marquee"><span>SMELL REMOVAL</span><span>CURBSIDE SERVICE</span><span>PRESSURE WASH</span><span>SANITIZE</span><span>DEODORIZE</span></section>

    <section className="split-section" data-reveal>
      <div>
        <p className="eyebrow"><Droplets size={16}/> The gross truth</p>
        <h2>Your bin is basically a warm plastic cave for odor.</h2>
        <p>Trash juice, food residue, diapers, grass clippings, pet waste, and summer heat are not a team you want practicing in your garage. A rinse with a garden hose mostly moves the problem around. Emmett’s cleans the inside walls, lid, handles, and bottom where the funk actually lives.</p>
        <div className="stat-grid"><div><b>Hot water</b><span>helps break up residue</span></div><div><b>Deodorize</b><span>fresh finish after wash</span></div><div><b>Curbside</b><span>no hauling bins anywhere</span></div></div>
      </div>
      <img className="photo tilt" src="/images/before-after.png" alt="Before and after trash bin cleaning comparison"/>
    </section>

    <section id="process" className="process">
      <div className="section-head" data-reveal><p className="eyebrow"><Truck size={16}/> The route</p><h2>Three steps. Very little ceremony. Remarkably fewer smells.</h2></div>
      <div className="steps">{steps.map(([num,title,copy]) => <article className="step-card" data-reveal key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <div className="process-photo-grid" data-reveal>
        <img src="/images/trailer-process.png" alt="Mobile bin cleaning trailer and pressure washing setup"/>
        <img src="/images/spray-detail.png" alt="High pressure steam cleaning inside a trash bin"/>
      </div>
    </section>

    <section className="services">
      <div className="section-head" data-reveal><p className="eyebrow"><ShieldCheck size={16}/> Built for real neighborhoods</p><h2>Residential cleanups, HOA route days, and small-business cans.</h2></div>
      <div className="service-grid">{services.map(({icon:Icon,title,copy}) => <article className="service" data-reveal key={title}><Icon/><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="feature-band" data-reveal>
      <img src="/images/clean-curb.png" alt="Freshly cleaned bins lined up at a curb"/>
      <div><p className="eyebrow"><Star size={16}/> What people actually want</p><h2>Bins that don’t stink up the garage two hours after trash pickup.</h2><p>Clean cans make the garage, driveway, and side yard feel cared for. It is one of those tiny home-maintenance wins that feels absurdly good once somebody else does it.</p></div>
    </section>

    <section id="plans" className="plans">
      <div className="section-head" data-reveal><p className="eyebrow"><CalendarDays size={16}/> Simple starter pricing</p><h2>Pick a rhythm. Change it as the season changes.</h2><p className="small-note">Preview pricing — swap in Emmett’s exact local prices before launch.</p></div>
      <div className="plan-grid">{plans.map(plan => <article className="plan" data-reveal key={plan.name}><span className="tag">{plan.tag}</span><h3>{plan.name}</h3><div className="price"><b>{plan.price}</b><span>{plan.cadence}</span></div><ul>{plan.items.map(i => <li key={i}><CheckCircle2/> {i}</li>)}</ul><a href="#quote">Request this plan</a></article>)}</div>
    </section>

    <section id="quote" className="quote">
      <div className="quote-card" data-reveal>
        <p className="eyebrow"><MessageSquareText size={16}/> Launch-ready lead capture</p>
        <h2>Want a clean-bin route in your neighborhood?</h2>
        <p>Send Emmett your address, trash pickup day, number of bins, and whether you want one-time, monthly, or quarterly service. He can confirm route timing and exact pricing before anything is booked.</p>
        <form onSubmit={e => e.preventDefault()}>
          <input placeholder="Name"/><input placeholder="Phone or email"/><input placeholder="Neighborhood / ZIP"/><input placeholder="Trash pickup day"/><select><option>2 bins — quarterly</option><option>1 bin — one-time</option><option>Monthly route</option><option>HOA / group route</option></select><textarea placeholder="Anything gross we should know? No judgment. Bins have secrets."/>
          <button>Request preview quote</button>
        </form>
        <p className="form-note">Preview note: add Emmett’s real phone/email before using this as the live customer intake form.</p>
      </div>
    </section>

    <footer><b>Emmett’s Mobile Bin Cleaning Service</b><span>Clean bins. Cleaner curbs. Happier garages.</span></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
