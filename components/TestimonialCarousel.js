import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const testimonials = [
  {
    quote: "Hadiwijaya's AI consulting completely transformed our data pipeline. We reduced processing time by 40% in just two months.",
    name: "Alex M.",
    role: "CTO, FinTech Innovators"
  },
  {
    quote: "Sofian and his team are phenomenal. Their custom ML models provided insights we didn't even know we were missing.",
    name: "Sarah K.",
    role: "VP of Engineering, RetailCorp"
  },
  {
    quote: "The best tech investment we made this year. Their deep understanding of both business and generative AI is unmatched.",
    name: "David T.",
    role: "Founder, StartupX"
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.testimonialContainer}>
      <h2 className={styles.teamTitle} style={{ fontSize: '2rem' }}>What Our Clients Say</h2>
      <div className={styles.carousel}>
        {testimonials.map((test, index) => (
          <div 
            key={index} 
            className={styles.testimonialCard}
            style={{ 
              display: index === current ? 'flex' : 'none',
              animation: index === current ? 'fadeIn 0.5s ease-in-out' : 'none'
            }}
          >
            <p className={styles.quote}>"{test.quote}"</p>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>{test.name.charAt(0)}</div>
              <div>
                <p className={styles.authorName}>{test.name}</p>
                <p className={styles.authorRole}>{test.role}</p>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.carouselIndicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === current ? styles.indicatorActive : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
