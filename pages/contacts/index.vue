<template>
  <main>
    <!-- Hero Section -->
    <section class="contacts-hero">
      <div class="container">
        <h1 class="hero-title">Контакты</h1>
        <p class="hero-subtitle">Мы всегда рады видеть вас в нашем автоцентре или ответить на ваши вопросы</p>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="contact-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="Адрес">
            </div>
            <h3>Наш адрес</h3>
            <p>г. Москва, ул. Автодетейлинговая, 12<br>Бизнес-центр "АвтоЛюкс", 3 этаж</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3059/3059518.png" alt="Телефон">
            </div>
            <h3>Телефон</h3>
            <p>+7 (495) 123-45-67<br>+7 (977) 765-43-21 (WhatsApp)</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="Почта">
            </div>
            <h3>Электронная почта</h3>
            <p>info@autodetail.ru<br>booking@autodetail.ru</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="Время">
            </div>
            <h3>Часы работы</h3>
            <p>Пн-Пт: 9:00 - 21:00<br>Сб-Вс: 10:00 - 20:00</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map and Form Section -->
    <section class="map-form-section">
      <div class="container">
        <div class="map-form-grid">
          <div class="map-container">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor" 
              width="100%" 
              height="100%" 
              frameborder="0"
              style="border-radius: 15px;"
              aria-label="Карта расположения нашего детейлинг-центра"
            ></iframe>
          </div>
          
          <div class="form-container">
            <h2 class="section-title">Остались вопросы?</h2>
            <p class="section-subtitle">Заполните форму и мы свяжемся с вами в течение 15 минут</p>
            
            <form class="contact-form">
              <div class="form-group">
                <input type="text" placeholder="Ваше имя" required aria-label="Ваше имя">
              </div>
              
              <div class="form-group">
                <input type="tel" placeholder="Ваш телефон" required aria-label="Ваш телефон">
              </div>
              
              <div class="form-group">
                <input type="email" placeholder="Ваш email" aria-label="Ваш email">
              </div>
              
              <div class="form-group">
                <textarea placeholder="Ваш вопрос или комментарий" rows="4" aria-label="Ваш вопрос"></textarea>
              </div>
              
              <button type="submit" class="form-button">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Частые вопросы</h2>
        
        <div class="faq-accordion">
          <div 
            class="faq-item" 
            v-for="(item, index) in faqItems" 
            :key="index"
            :class="{ active: activeFaq === index }"
          >
            <button 
              class="faq-question" 
              @click="toggleFaq(index)"
              :aria-expanded="activeFaq === index"
              :aria-controls="'faq-answer-' + index"
            >
              {{ item.question }}
              <span class="faq-icon">{{ activeFaq === index ? '-' : '+' }}</span>
            </button>
            <div 
              class="faq-answer"
              :id="'faq-answer-' + index"
            >
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="contacts-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Запишитесь прямо сейчас</h2>
          <p>Оставьте свой номер и мы подберем для вас удобное время</p>
          <form class="cta-form">
            <input type="tel" placeholder="Ваш телефон" required aria-label="Ваш телефон для обратного звонка">
            <button type="submit">Перезвоните мне</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const faqItems = [
  {
    question: 'Как долго занимает полный детейлинг автомобиля?',
    answer: 'Время выполнения полного детейлинга зависит от состояния автомобиля и выбранных услуг. В среднем это занимает от 6 до 12 часов. Мы всегда заранее оцениваем объем работ и сообщаем примерное время завершения.'
  },
  {
    question: 'Нужно ли записываться заранее?',
    answer: 'Да, мы рекомендуем записываться заранее, особенно на комплексные услуги. Это позволяет нам подготовить все необходимое и принять вас в удобное для вас время без ожидания.'
  },
  {
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем наличные, банковские карты (Visa, Mastercard, Мир), а также безналичный расчет для юридических лиц. Также возможна оплата через Apple Pay и Google Pay.'
  },
  {
    question: 'Даете ли вы гарантию на свои работы?',
    answer: 'Да, мы предоставляем гарантию до 12 месяцев на защитные покрытия и до 3 месяцев на другие виды работ. Все гарантийные условия прописываются в договоре.'
  }
]
</script>

<style scoped>
/* Базовые стили */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Герой секция */
.contacts-hero {
  background: linear-gradient(rgba(245, 245, 220, 0.9), rgba(245, 245, 220, 0.9)),
    url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
  padding: 5rem 0;
  text-align: center;
  border-bottom: 2px solid rgba(160, 82, 45, 0.2);
}

.hero-title {
  color: #6B4F4F;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  color: #8B7355;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Контактная информация */
.contact-info {
  padding: 3rem 0;
  background: #FFF8F0;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
}

.info-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F5DC;
  border-radius: 50%;
}

.info-icon img {
  width: 35px;
  height: 35px;
  object-fit: contain;
}

.info-card h3 {
  color: #6B4F4F;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.info-card p {
  color: #8B7355;
  font-size: 0.95rem;
}

/* Карта и форма */
.map-form-section {
  padding: 3rem 0;
  background: white;
}

.map-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.map-container {
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.form-container {
  padding: 1.5rem;
}

.section-title {
  color: #6B4F4F;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #A0522D;
  margin: 1rem auto;
}

.section-subtitle {
  color: #8B7355;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group input,
.form-group textarea {
  padding: 0.9rem;
  border: 1px solid #F5F5DC;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #A0522D;
  outline: none;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-button {
  background: #A0522D;
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.form-button:hover {
  background: #8B4513;
  transform: translateY(-2px);
}

/* FAQ секция */
.faq-section {
  padding: 3rem 0;
  background: #F5F5DC;
}

.faq-accordion {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.faq-question {
  width: 100%;
  padding: 1.2rem;
  background: white;
  border: none;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  color: #6B4F4F;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: #FFF8F0;
}

.faq-icon {
  font-size: 1.3rem;
  color: #A0522D;
  margin-left: 1rem;
  flex-shrink: 0;
}

.faq-answer {
  background: white;
  padding: 0 1.2rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer p {
  padding: 0 0 1.2rem;
  color: #8B7355;
  font-size: 0.95rem;
}

.faq-item.active .faq-answer {
  max-height: 500px;
  padding: 0 1.2rem 1.2rem;
}

.faq-item.active .faq-question {
  background: #FFF8F0;
}

/* CTA секция */
.contacts-cta {
  background: #A0522D;
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.contacts-cta h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.contacts-cta p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.cta-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cta-form input {
  padding: 0.9rem 1rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
}

.cta-form button {
  background: white;
  color: #A0522D;
  padding: 0.9rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.cta-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Адаптация для планшетов */
@media (min-width: 768px) {
  .contacts-hero {
    padding: 6rem 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .map-form-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .map-container {
    height: 400px;
  }
  
  .form-container {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
    text-align: left;
  }
  
  .section-subtitle {
    text-align: left;
  }
  
  .cta-form {
    flex-direction: row;
  }
  
  .cta-form input {
    flex: 1;
  }
}

/* Адаптация для десктопов */
@media (min-width: 1024px) {
  .contacts-hero {
    padding: 8rem 0;
  }
  
  .info-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .info-card {
    padding: 2rem;
  }
  
  .map-container {
    height: 500px;
  }
  
  .contacts-cta h2 {
    font-size: 2.2rem;
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
  
  .info-card {
    padding: 1.2rem;
  }
  
  .info-icon {
    width: 60px;
    height: 60px;
  }
  
  .form-button, .cta-form button {
    padding: 0.8rem;
  }
}
</style>