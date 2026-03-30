import React from 'react';
import { ArrowRight, ShieldCheck, Bug, Thermometer, SprayCan, Leaf, Bird, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const allServices = [
  {
    image: '/images/service-general.png',
    icon: <Bug size={28} />,
    title: 'General Disinfestation',
    tag: 'Most Popular',
    desc: 'Regular inspection & treatment at all possible hiding areas like dark corners, drainage pipes, loose joints in masonry and wooden cabinets. Odourless gel bait treatment for cockroaches, red ants, centipedes and other crawling insects.',
    details: 'This treatment controls household pests like red ants, cockroaches. The Gel is a result oriented odourless treatment. Must be sprayed thoroughly for cockroaches and ant. This also eradicates others like millipedes, centipedes and other crawling insects.'
  },
  {
    image: '/images/service-termite.png',
    icon: <ShieldCheck size={28} />,
    title: 'Termite Control (Pre/Post Construction)',
    tag: '5-10 Year Guarantee',
    desc: 'Termites are the causes of structural damage. They infiltrate buildings from underground colonies through cracks at the foundation.',
    details: 'For pre construction termite treatment a chemical solution is injected in to the soil which creates a chemical barrier. In post construction a thorough inspection is done, seeking their hideouts then by injecting chemicals into the walls, all traces of termite tubes will be removed. Entire building 5 to 10 years guarantee available.'
  },
  {
    image: '/images/service-rodent.png',
    icon: <SprayCan size={28} />,
    title: 'Rodent Control',
    desc: 'We use Baiting, Trapping & repellent based solutions. We offer a complete rodent abatement, through a quick, safe & effective solution.',
    details: 'Trapping & removal of the rodents that are currently living in your structure. We identify and seal all points of entry and exit. Effective use of Electromagnetic device, Ultrasound device, Glue Traps, Snap Traps & other multiple baiting products.'
  },
  {
    image: '/images/service-bedbug.png',
    icon: <Bug size={28} />,
    title: 'Bed Bugs Control',
    desc: 'A bedbug is a small nocturnal insect of the family Cimocidae that lives by feeding on the blood of humans & other warm blooded host.',
    details: 'Effective control depends upon a thorough search of all their hideouts. We carefully spray on infested area which offers darkness, isolation & protection. Repeated treatments are required for it to take full effect to resolve our bug problems.'
  },
  {
    image: '/images/service-mosquito.png',
    icon: <Thermometer size={28} />,
    title: 'Thermal Fogging (Mosquitoes)',
    desc: 'Mosquito foggers contain liquid insecticides that when activated create a kind of mist. It is an effective treatment against adult mosquitoes.',
    details: 'Not recommended for indoors, best used outdoors. As long as it comes in contact with the fog, the mosquito will be eliminated. Fogging is an effective as a contact application with no residual effect.'
  },
  {
    image: '/images/service-woodworm.png',
    icon: <Leaf size={28} />,
    title: 'Woodworm Infestation',
    desc: 'For a Wood boring beetle infestation, effective treatment using oil based chemicals for spraying & brushing treatment.',
    details: 'We inject chemicals into these tiny holes with the help of syringe to kill the larvae. All the wooden furniture including those attached to the wall are treated with care. Woodworms are less likely to affect treated wood. They need moisture to survive and feed on wood.'
  },
  {
    image: '/images/service-general.png',
    icon: <Zap size={28} />,
    title: 'Ticks Control',
    desc: 'Ticks are blood sucking parasites often found embedded in the skin of pets and people. They are notoriously difficult to control.',
    details: 'Repeated treatment are often required to eliminate them. You find them stuck to your pets. They are called dog ticks. A chemical solution is sprayed on them with on a limited amount so that they don\'t harm your pets.'
  },
  {
    image: '/images/service-general.png',
    icon: <SprayCan size={28} />,
    title: 'Honey Comb Eradication',
    desc: 'Experienced bee removal specialists who are trained and absolutely capable of getting rid of beehives and honey comb once and for all.',
    details: 'Our trained professionals handle bee removal safely and effectively. We ensure complete eradication of hives while following environmental safety protocols.'
  },
  {
    image: '/images/service-general.png',
    icon: <Leaf size={28} />,
    title: 'Weed Control',
    desc: 'Spray is absorbed by the foliage, the chemical solution is translocated to the roots to destroy the weed.',
    details: 'First signs are a gradual yellowing of the plant. Then advances to complete browning of the entire weed and then death of the roots. Effective, economical and easy control of weeds.'
  },
  {
    image: '/images/service-general.png',
    icon: <Bird size={28} />,
    title: 'Snake & Pigeon Control',
    desc: 'Snake Repellent Spray in the yard are best used to keep snakes away before they arrive on your compound, yard or inside your house.',
    details: 'Birds are a major pest causing respiratory diseases. They are source of mites, ticks and fleas. Hence we offer effective solutions to solve all your problems like Netting, Bird Strike.'
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-label">Our Expertise</span>
          <h1 className="page-hero__title">Our Pest Control Services</h1>
          <p className="page-hero__desc">
            Comprehensive pest management with the latest technology — serving Mumbai, Navi Mumbai, Thane and all over Maharashtra.
          </p>
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Services</span>
          </div>
        </div>
      </div>

      {/* All Services */}
      <section className="section">
        <div className="container">
          <div className="services-page-grid">
            {allServices.map((s, i) => (
              <div key={i} className="sp-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="sp-card__image">
                  <img src={s.image} alt={s.title} />
                  {s.tag && <span className="sp-card__tag">{s.tag}</span>}
                </div>
                <div className="sp-card__body">
                  <div className="sp-card__icon">{s.icon}</div>
                  <h3 className="sp-card__title">{s.title}</h3>
                  <p className="sp-card__desc">{s.desc}</p>
                  <p className="sp-card__details">{s.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="sp-cta">
        <div className="container sp-cta__inner">
          <div>
            <h2>Need Professional Help?</h2>
            <p>If you are seeing one pest or insect, chances are you are not seeing the rest. Call us ASAP!</p>
          </div>
          <a href="tel:7738444466" className="btn btn-white btn-lg">
            Call 7738 444 466
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
