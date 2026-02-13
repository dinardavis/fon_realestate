import React from 'react';
import { useApp } from '../context/AppContext';
import { FaHome, FaKey, FaChartLine, FaCog } from 'react-icons/fa';
import './About.css';

const About = () => {
  const { language } = useApp();

  const content = {
    en: {
      title: 'About Fon Real Estate',
      description: 'Fon Real Estate is a premier real estate agency specializing in luxury properties across Thailand. With extensive experience in Krabi, Phuket, and Bangkok, we help clients find their perfect home or investment property.',
      mission: 'Our Mission',
      missionText: 'To provide exceptional real estate services with integrity, professionalism, and personalized attention to each client\'s unique needs.',
      services: 'Our Services',
      service1: 'Property Sales',
      service2: 'Property Rentals',
      service3: 'Investment Consulting',
      service4: 'Property Management'
    },
    th: {
      title: 'เกี่ยวกับ Fon Real Estate',
      description: 'Fon Real Estate เป็นบริษัทอสังหาริมทรัพย์ชั้นนำที่เชี่ยวชาญด้านทรัพย์สินหรูหราทั่วประเทศไทย ด้วยประสบการณ์ที่กว้างขวางในกระบี่ ภูเก็ต และกรุงเทพฯ เราช่วยลูกค้าค้นหาบ้านหรือทรัพย์สินลงทุนที่สมบูรณ์แบบ',
      mission: 'พันธกิจของเรา',
      missionText: 'เพื่อให้บริการอสังหาริมทรัพย์ที่ยอดเยี่ยมด้วยความซื่อสัตย์ ความเป็นมืออาชีพ และความใส่ใจส่วนบุคคลต่อความต้องการเฉพาะของลูกค้าแต่ละคน',
      services: 'บริการของเรา',
      service1: 'การขายอสังหาริมทรัพย์',
      service2: 'การเช่าอสังหาริมทรัพย์',
      service3: 'ที่ปรึกษาการลงทุน',
      service4: 'การจัดการอสังหาริมทรัพย์'
    }
  };

  const t = content[language];

  return (
    <div className="about-page">
      <div className="hero-gradient-container">
        <div className="about-hero">
          <div className="container">
            <h1>{t.title}</h1>
            <p>{language === 'th' ? 'ผู้เชี่ยวชาญด้านอสังหาริมทรัพย์ในประเทศไทย' : 'Your trusted real estate experts in Thailand'}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about-layout">
          <div className="about-content">
            <div className="about-section">
              <p className="about-description">{t.description}</p>
            </div>
            <div className="about-section">
              <h2>{t.mission}</h2>
              <p>{t.missionText}</p>
            </div>
            <div className="about-section">
              <h2>{t.services}</h2>
              <ul className="services-list">
                <li>
                  <FaHome className="service-icon" />
                  <span>{t.service1}</span>
                </li>
                <li>
                  <FaKey className="service-icon" />
                  <span>{t.service2}</span>
                </li>
                <li>
                  <FaChartLine className="service-icon" />
                  <span>{t.service3}</span>
                </li>
                <li>
                  <FaCog className="service-icon" />
                  <span>{t.service4}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-gallery">
            <div className="about-image-grid">
              <div className="about-image-item about-image-top-left">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop" alt="Thailand beach" />
              </div>
              <div className="about-image-item about-image-top-right">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop" alt="Thailand property" />
              </div>
              <div className="about-image-item about-image-bottom">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=500&fit=crop" alt="Thailand real estate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;




