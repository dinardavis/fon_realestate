import React from "react";
import { useApp } from "../context/AppContext";
import { baseUrl } from "../config";
import {
  FaHome,
  FaCog,
  FaCalculator,
  FaCamera,
  FaEnvelope,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaGlobe,
  FaHandshake,
  FaUsers,
  FaFileContract,
} from "react-icons/fa";
import "./Sell.css";

const Sell = () => {
  const { language } = useApp();

  const content = {
    en: {
      title: "Property Services",
      subtitle: "Sell your property with confidence",
      listingMarketing: {
        title: "Listing & Marketing",
        subtitle:
          "Most agents price high and pray. We price smart and sell fast.",
        description:
          "Fon Real Estate targets the right buyers with strategic marketing—not shotgun blasts across every platform. You get premium prices without the endless waiting game.",
        packageTitle: "Our package:",
        items: [
          "Accurate valuations",
          "Professional and drone photography",
          "Marketing across local, national, and international channels",
          "Exclusive FazWaz and Lazudi partnerships",
          "Partner agent network with ready buyers",
          "Expert negotiations and closing support",
        ],
        cta: "Ready to sell?",
        ctaLink: "Contact us",
      },
      propertyManagement: {
        title: "Property Management",
        description:
          "From basic maintenance to full rental management—short or long term. We handle it while you're away.",
      },
      valuations: {
        title: "Valuations & Land Measurement",
        description:
          "Precise property valuations based on real market data: location, materials, structure, features, and comps. We also verify land measurements for peace of mind.",
      },
      photography: {
        title: "Photography & Media",
        description:
          "Professional photos that sell properties, not dreams. Clean, accurate shots with proper lighting and composition. We also offer 3D virtual tours and aerial drone footage.",
      },
      sellerSupport: {
        title: "Seller Support",
        description:
          "Stuck with a property that won't move? We'll diagnose the problem and fix it—whether that's staging, pricing, or marketing strategy.",
        cta: "List with Fon Real Estate.",
      },
      contactTitle: "Get Started",
      contactSubtitle: "Contact us to discuss your property needs",
      testimonial1: {
        quote:
          "Fon made selling our villa effortless. Professional, responsive, and got us the best price in record time.",
        author: "Sarah & James Mitchell",
        location: "Ao Nang, Krabi",
      },
      testimonial2: {
        quote:
          "Outstanding service from start to finish. Fon's team handled everything perfectly while we were overseas.",
        author: "Michael Chen",
        location: "Phuket, Thailand",
      },
    },
    th: {
      title: "บริการอสังหาริมทรัพย์",
      subtitle: "ขายทรัพย์สินของคุณด้วยความมั่นใจ",
      listingMarketing: {
        title: "การลงรายการและการตลาด",
        subtitle:
          "ตัวแทนส่วนใหญ่ตั้งราคาสูงและหวัง เราตั้งราคาอย่างชาญฉลาดและขายได้เร็ว",
        description:
          "Fon Real Estate กำหนดเป้าหมายผู้ซื้อที่เหมาะสมด้วยการตลาดเชิงกลยุทธ์—ไม่ใช่การยิงกระสุนปืนลูกซองไปทุกแพลตฟอร์ม คุณจะได้ราคาพรีเมียมโดยไม่ต้องรออย่างไม่มีที่สิ้นสุด",
        packageTitle: "แพ็คเกจของเรา:",
        items: [
          "การประเมินราคาที่แม่นยำ",
          "การถ่ายภาพแบบมืออาชีพและโดรน",
          "การตลาดผ่านช่องทางในท้องถิ่น ระดับประเทศ และระดับนานาชาติ",
          "ความร่วมมือพิเศษกับ FazWaz และ Lazudi",
          "เครือข่ายตัวแทนพันธมิตรพร้อมผู้ซื้อที่พร้อม",
          "การเจรจาต่อรองและสนับสนุนการปิดการขายอย่างเชี่ยวชาญ",
        ],
        cta: "พร้อมขายแล้ว?",
        ctaLink: "ติดต่อเรา",
      },
      propertyManagement: {
        title: "การจัดการอสังหาริมทรัพย์",
        description:
          "ตั้งแต่การบำรุงรักษาพื้นฐานไปจนถึงการจัดการการเช่าครบวงจร—ระยะสั้นหรือระยะยาว เราจัดการให้ในขณะที่คุณไม่อยู่",
      },
      valuations: {
        title: "การประเมินราคาและการวัดที่ดิน",
        description:
          "การประเมินราคาอสังหาริมทรัพย์ที่แม่นยำตามข้อมูลตลาดจริง: ทำเล วัสดุ โครงสร้าง คุณสมบัติ และการเปรียบเทียบ เรายังตรวจสอบการวัดที่ดินเพื่อความสบายใจ",
      },
      photography: {
        title: "การถ่ายภาพและสื่อ",
        description:
          "ภาพถ่ายมืออาชีพที่ขายทรัพย์สิน ไม่ใช่ความฝัน ภาพที่สะอาด แม่นยำ พร้อมแสงและองค์ประกอบที่เหมาะสม เรายังเสนอทัวร์เสมือนจริง 3D และภาพถ่ายทางอากาศด้วยโดรน",
      },
      sellerSupport: {
        title: "การสนับสนุนผู้ขาย",
        description:
          "ติดค้างกับทรัพย์สินที่ขายไม่ออก? เราจะวินิจฉัยปัญหาและแก้ไข—ไม่ว่าจะเป็นการจัดวาง การตั้งราคา หรือกลยุทธ์การตลาด",
        cta: "ลงรายการกับ Fon Real Estate",
      },
      contactTitle: "เริ่มต้น",
      contactSubtitle: "ติดต่อเราเพื่อหารือเกี่ยวกับความต้องการทรัพย์สินของคุณ",
      testimonial1: {
        quote:
          "Fon ทำให้การขายวิลล่าของเราง่ายดาย เป็นมืออาชีพ ตอบสนอง และทำให้เราได้ราคาที่ดีที่สุดในเวลาอันสั้น",
        author: "Sarah & James Mitchell",
        location: "Ao Nang, กระบี่",
      },
      testimonial2: {
        quote:
          "บริการที่ยอดเยี่ยมตั้งแต่ต้นจนจบ ทีมของ Fon จัดการทุกอย่างได้อย่างสมบูรณ์แบบในขณะที่เราอยู่ต่างประเทศ",
        author: "Michael Chen",
        location: "ภูเก็ต, ประเทศไทย",
      },
    },
  };

  const t = content[language];

  const emailHref = "mailto:fon@fonrealestate.com?subject=Property Services Inquiry";

  return (
    <div className="sell-page">
      <div className="hero-gradient-container">
        <div className="sell-hero">
          <div className="container">
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sell-content">
          <div className="service-section">
            <div className="service-header">
              <h2>{t.listingMarketing.title}</h2>
              <p className="service-subtitle">{t.listingMarketing.subtitle}</p>
            </div>
            <p className="service-description">
              {t.listingMarketing.description}
            </p>
            <div className="service-package">
              <h3>{t.listingMarketing.packageTitle}</h3>
              <ul className="package-list">
                {t.listingMarketing.items.map((item, index) => {
                  const icons = [
                    FaCheckCircle, // Accurate valuations
                    FaCamera, // Professional and drone photography
                    FaGlobe, // Marketing across channels
                    FaHandshake, // Exclusive partnerships
                    FaUsers, // Partner agent network
                    FaFileContract, // Expert negotiations
                  ];
                  const IconComponent = icons[index] || FaCheckCircle;
                  return (
                    <li key={index}>
                      <IconComponent className="list-icon" />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="service-cta">
              <p>
                {t.listingMarketing.cta}{" "}
                <a href={emailHref} target="_blank" rel="noopener noreferrer" className="cta-link">
                  {t.listingMarketing.ctaLink}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="testimonials-vertical">
            <div className="testimonial-card-vertical">
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-quote">{t.testimonial1.quote}</p>
              <div className="testimonial-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="testimonial-author">
                <strong>{t.testimonial1.author}</strong>
                <span>{t.testimonial1.location}</span>
              </div>
            </div>
            <div className="testimonial-card-vertical">
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-quote">{t.testimonial2.quote}</p>
              <div className="testimonial-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="testimonial-author">
                <strong>{t.testimonial2.author}</strong>
                <span>{t.testimonial2.location}</span>
              </div>
            </div>
            <div className="testimonial-card-vertical">
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-quote">
                {language === "th"
                  ? "บริการที่ยอดเยี่ยมมาก! Fon ช่วยให้เราขายทรัพย์สินได้ในเวลาอันสั้นและได้ราคาที่ดีที่สุด"
                  : "Exceptional service! Fon helped us sell our property quickly and at the best price possible."}
              </p>
              <div className="testimonial-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="testimonial-author">
                <strong>
                  {language === "th"
                    ? "David & Lisa Thompson"
                    : "David & Lisa Thompson"}
                </strong>
                <span>
                  {language === "th"
                    ? "Bangkok, ประเทศไทย"
                    : "Bangkok, Thailand"}
                </span>
              </div>
            </div>
          </div>

          <div className="services-grid">
            <div className="property-image-card">
              <img
                src={`${baseUrl}/tropical-villa-1.png`}
                alt="Modern Tropical Villa with Pool"
                onError={(e) => {
                  e.target.src = `${baseUrl}/tropical-villa-1.png`;
                }}
              />
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <FaCog />
              </div>
              <h3>{t.propertyManagement.title}</h3>
              <p>{t.propertyManagement.description}</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <FaCalculator />
              </div>
              <h3>{t.valuations.title}</h3>
              <p>{t.valuations.description}</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <FaCamera />
              </div>
              <h3>{t.photography.title}</h3>
              <p>{t.photography.description}</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <FaHome />
              </div>
              <h3>{t.sellerSupport.title}</h3>
              <p>{t.sellerSupport.description}</p>
              <div className="service-cta-small">
                <p>{t.sellerSupport.cta}</p>
              </div>
            </div>

            <div className="property-image-card">
              <img
                src={`${baseUrl}/tropical-villa-2.png`}
                alt="Luxury Multi-Level Tropical Villa"
                onError={(e) => {
                  e.target.src = `${baseUrl}/tropical-villa-2.png`;
                }}
              />
            </div>
          </div>

          <div className="contact-section contact-ribbon" id="contact">
            <div className="contact-copy">
              <h2>{t.contactTitle}</h2>
              <p className="contact-subtitle">{t.contactSubtitle}</p>
            </div>
          
            <div className="contact-ribbon-inner">
              <div className="contact-ribbon-item">
                <img src={`${baseUrl}/font_whatsapp.png`} alt="WhatsApp" />
                <span>WhatsApp</span>
              </div>
              <div className="contact-ribbon-item">
                <img src={`${baseUrl}/fon_lineapp.png`} alt="Line" />
                <span>Line</span>
              </div>
              <div className="contact-ribbon-item">
              <a
                href={emailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-ribbon-email"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
               <span>{language === "th" ? "อีเมล" : "Email"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
