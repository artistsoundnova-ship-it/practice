import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Brand Strategy",
    accent: "Strategy",
    description:
      "We map your business goals to a clear digital direction that turns attention into loyal customers.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    href: "https://www.example.com/brand-strategy",
  },
  {
    title: "Web Design",
    accent: "Design",
    description:
      "We craft conversion-focused websites that feel premium, modern, and tailored to your audience.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    href: "https://www.example.com/web-design",
  },
  {
    title: "Digital Marketing",
    accent: "Growth",
    description:
      "From SEO to content campaigns, we help brands expand reach and generate measurable business results.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    href: "https://www.example.com/digital-marketing",
  },
];

function Home() {
  const [selectedService, setSelectedService] = useState(services[0]);

  useEffect(() => {
    document.title = "Ethera Studio | Digital Growth";

    return () => {
      document.title = "React App";
    };
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Creative digital solutions</p>
            <h1>
              Build smarter digital experiences that <span>grow your brand</span>
            </h1>
            <div className="yellow-line"></div>
            <p className="lead">
              We help businesses turn ideas into memorable brands, high-converting websites,
              and campaigns that keep customers engaged from first click to final sale.
            </p>

            <div className="hero-actions">
              <a href="#services" className="primary-btn">
                Explore services
              </a>
              <a href="/contact" className="secondary-btn">
                Book a consult
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Creative team reviewing a project"
            />
            <div className="panel-card">
              <span>Featured focus</span>
              <h3>{selectedService.title}</h3>
              <p>{selectedService.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div>
            <p className="eyebrow accent">About us</p>
            <h2>We help ambitious businesses stand out online.</h2>
          </div>

          <div className="about-copy">
            <p>
              Ethera Studio blends strategy, design, and digital execution to create experiences
              that feel premium and perform with purpose. From local startups to growing brands,
              we turn your vision into a digital presence that earns trust and drives results.
            </p>
            <ul className="feature-list">
              <li>Research-led digital planning</li>
              <li>Clear communication and collaborative design</li>
              <li>Results-focused creative performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow accent">Our services</p>
            <h2>Everything your brand needs to grow.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                href={service.href}
                accent={service.accent}
                onSelect={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <p className="eyebrow accent">Ready to launch?</p>
            <h2>Let’s build a digital presence your audience remembers.</h2>
          </div>
          <a href="/contact" className="primary-btn">
            Start your project
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;