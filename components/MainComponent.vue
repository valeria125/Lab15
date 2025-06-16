<template>
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">{{ main.hero.title }}</h1>
        <p class="hero-subtitle">{{ main.hero.subtitle }}</p>
        <button class="cta-button">{{ main.hero.cta }}</button>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="section services">
      <div class="container">
        <h2 class="section-title">Наши услуги</h2>
        <div class="services-grid">
          <div 
            v-for="service in main.services" 
            :key="service.title" 
            class="service-card"
          >
            <img 
              :src="service.icon" 
              :alt="service.title" 
              class="service-icon"
              @error="(e) => e.target.src = '/service-fallback.svg'"
            >
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <button class="service-cta">
              <a href="/services" style="color: white; text-decoration: none;">Подробнее</a>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages -->
    <section class="advantages">
      <div class="container">
        <div class="advantages-grid">
          <div 
            v-for="item in main.advantages" 
            :key="item.title" 
            class="advantage-card"
          >
            <div class="advantage-value">{{ item.value }}</div>
            <div class="advantage-title">{{ item.title }}</div>
            <div class="advantage-subtitle">{{ item.subtitle }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio -->
    <section class="portfolio">
      <div class="container">
        <h2 class="section-title">Примеры работ</h2>
        <div class="portfolio-grid">
          <div 
            v-for="(work, index) in main.portfolio" 
            :key="index" 
            class="portfolio-item"
          >
            <img :src="work.image" :alt="'Пример работы ' + (index + 1)" class="portfolio-image">
            <div class="portfolio-overlay">
              <h3>{{ work.title }}</h3>
              <p>{{ work.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="testimonials">
      <div class="container">
        <h2 class="section-title">Отзывы клиентов</h2>
        <div class="testimonials-grid">
          <div 
            v-for="testimonial in main.testimonials" 
            :key="testimonial.author" 
            class="testimonial-card"
          >
            <div class="testimonial-header">
              <div class="testimonial-avatar">{{ testimonial.author[0] }}</div>
              <div class="testimonial-author">
                <h3>{{ testimonial.author }}</h3>
                <p class="car-model">{{ testimonial.car }}</p>
              </div>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-rating">★★★★★</div>
          </div>
        </div>
        <button class="service-cta feedback-btn">
          <a href="/feedback" style="color: white; text-decoration: none;">Все отзывы</a>
        </button>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Запишитесь прямо сейчас!</h2>
          <p>Оставьте заявку и получите 10% скидку на первую услугу</p>
          <form class="cta-form">
            <input type="tel" placeholder="Ваш телефон" required>
            <button type="submit">Получить скидку</button>
          </form>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">О нашей компании</h2>
            <p class="about-description">
              Профессиональный детейлинг-центр с 5-летним опытом работы. 
              Используем только сертифицированные материалы и современное оборудование.
            </p>
            <ul class="about-list">
              <li> Сертифицированные специалисты</li>
              <li> Гарантия на все работы</li>
              <li> Экологичные материалы</li>
              <li>Удобное расположение</li>
            </ul>
          </div>
          <img src="https://detailing-alarm.ru/wp-content/uploads/2020/02/photo-3-690x400.jpg" alt="Наш центр" class="about-image">
        </div>
        <a href="/about" style="text-decoration: none;"><button class="about-cta">Читать подробнее</button></a>
      </div>
    </section>
  </main>
</template>

<script setup>
defineProps({
  main: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* Базовые стили */
body {
  margin: 0 !important;
  font-family: 'Arial', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Герой секция */
.hero {
  background: linear-gradient(rgba(245, 245, 220, 0.9), rgba(245, 245, 220, 0.9)),
    url('/hero-bg.jpg') center/cover;
  padding: 6rem 0 4rem;
  text-align: center;
  border-bottom: 2px solid #A0522D33;
}

.hero-title {
  color: #6B4F4F;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  color: #8B7355;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.cta-button {
  background: #A0522D;
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 35px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(160, 82, 45, 0.3);
}

.cta-button:hover {
  background: #8B4513;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(160, 82, 45, 0.4);
}

/* Секция услуг */
.services {
  padding: 4rem 0;
  background: #FFF8F0;
}

.section-title {
  color: #6B4F4F;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #A0522D;
  margin: 1rem auto 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1rem;
  padding: 15px;
  background: #F5F5DC;
  border-radius: 50%;
}

.service-title {
  color: #A0522D;
  font-size: 1.3rem;
  margin: 1rem 0;
}

.service-description {
  color: #6B4F4F;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.service-cta {
  background: #A0522D;
  color: white;
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.service-cta:hover {
  background: #8B4513;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(160, 82, 45, 0.3);
}

/* Преимущества */
.advantages {
  padding: 4rem 0;
  background: #F5F5DC;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.advantage-card {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
}

.advantage-value {
  color: #A0522D;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.advantage-title {
  color: #6B4F4F;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.advantage-subtitle {
  color: #8B7355;
  font-size: 0.9rem;
}

/* Портфолио */
.portfolio {
  padding: 4rem 0;
  background: white;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.portfolio-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 250px;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 1.5rem;
}

.portfolio-overlay h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.portfolio-overlay p {
  font-size: 0.9rem;
  margin: 0;
}

/* Отзывы */
.testimonials {
  background: #FFF8F0;
  padding: 4rem 0;
}

.testimonials-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 2rem;
}

.testimonial-card {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.06);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.testimonial-avatar {
  width: 50px;
  height: 50px;
  background: #A0522D;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
}

.testimonial-author h3 {
  margin: 0;
  font-size: 1.1rem;
}

.car-model {
  color: #8B7355;
  font-size: 0.8rem;
  margin: 0.2rem 0 0;
}

.testimonial-text {
  font-size: 0.95rem;
  line-height: 1.6;
}

.testimonial-rating {
  color: #FFD700;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.feedback-btn {
  display: block;
  margin: 2rem auto 0;
}

/* CTA секция */
.cta-section {
  background: #A0522D;
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.cta-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cta-form input {
  padding: 1rem;
  border: none;
  border-radius: 35px;
  font-size: 1rem;
}

.cta-form button {
  background: white;
  color: #A0522D;
  padding: 1rem;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.cta-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

/* О компании */
.about {
  padding: 4rem 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

.about-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  order: -1;
}

.about-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.about-list li {
  margin: 0.8rem 0;
  padding-left: 2rem;
  position: relative;
  font-size: 0.95rem;
}

.about-list li::before {
  content: '✔';
  position: absolute;
  left: 0;
  color: #A0522D;
}

.about-cta {
  background: #A0522D;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 2rem auto 0;
}

.about-cta:hover {
  background: #8B4513;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(160, 82, 45, 0.3);
}

/* Адаптация для планшетов */
@media (min-width: 768px) {
  .hero {
    padding: 8rem 0 6rem;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.4rem;
  }
  
  .cta-button {
    padding: 1.2rem 3rem;
    font-size: 1.2rem;
  }
  
  .services {
    padding: 5rem 0;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .advantages {
    padding: 5rem 0;
  }
  
  .portfolio {
    padding: 5rem 0;
  }
  
  .testimonials {
    padding: 5rem 0;
  }
  
  .cta-section {
    padding: 4rem 0;
  }
  
  .about {
    padding: 5rem 0;
  }
  
  .about-content {
    grid-template-columns: 1fr 1fr;
  }
  
  .about-image {
    order: 1;
  }
  
  .cta-form {
    flex-direction: row;
  }
  
  .cta-form input {
    flex: 1;
  }
  
  .cta-form button {
    padding: 1rem 2rem;
  }
}

/* Адаптация для десктопов */
@media (min-width: 1024px) {
  .services-grid {
    gap: 2.5rem;
  }
  
  .advantage-card {
    padding: 2rem;
  }
  
  .advantage-value {
    font-size: 2.5rem;
  }
  
  .portfolio-grid {
    gap: 2rem;
  }
  
  .testimonials-grid {
    gap: 2rem;
  }
  
  .testimonial-card {
    padding: 2rem;
  }
}

/* Адаптация для очень маленьких экранов */
@media (max-width: 360px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .portfolio-item {
    height: 200px;
  }
  
  .testimonial-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>