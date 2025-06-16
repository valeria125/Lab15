<template>
  <main>

    <!-- Testimonials Main Section -->
    <section class="testimonials-page">
      <div class="container">
        <div class="testimonials-header">
          <h2 class="section-title">Что говорят клиенты</h2>
          <p class="section-subtitle">Более 200 довольных клиентов в 2024 году</p>
        </div>

        <div class="testimonials-filters">
          <button 
            v-for="filter in filters" 
            :key="filter" 
            :class="['filter-button', { active: activeFilter === filter }]"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div class="testimonials-container">
          <div 
            v-for="(testimonial, index) in filteredTestimonials" 
            :key="index" 
            class="testimonial-card"
          >
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img 
                  :src="testimonial.avatar || '/avatar-placeholder.svg'" 
                  :alt="testimonial.author"
                  @error="(e) => e.target.src = '/avatar-placeholder.svg'"
                >
              </div>
              <div class="testimonial-author">
                <h3>{{ testimonial.author }}</h3>
                <p class="car-model">{{ testimonial.car }}</p>
                <p class="service-type">{{ testimonial.service }}</p>
              </div>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-footer">
              <div class="testimonial-rating">
                <span v-for="n in 5" :key="n" :class="['star', { filled: n <= testimonial.rating }]">★</span>
              </div>
              <div class="testimonial-date">{{ testimonial.date }}</div>
            </div>
          </div>
        </div>

        <div class="pagination">
          <button 
            v-for="page in totalPages" 
            :key="page" 
            :class="['page-button', { active: currentPage === page }]"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </section>

    <!-- Add Testimonial -->
    <section class="add-testimonial">
      <div class="container">
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Оставьте свой отзыв</h1>
        <p class="hero-subtitle">Реальные мнения автовладельцев о качестве наших услуг</p>
      </div>
    </section>
        
        <form class="testimonial-form" @submit.prevent="submitTestimonial">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Ваше имя*</label>
              <input type="text" id="name" v-model="newTestimonial.name" required>
            </div>
            <div class="form-group">
              <label for="car">Марка автомобиля*</label>
              <input type="text" id="car" v-model="newTestimonial.car" required>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="service">Услуга*</label>
              <select id="service" v-model="newTestimonial.service" required>
                <option value="">Выберите услугу</option>
                <option v-for="service in servicesList" :key="service" :value="service">{{ service }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Оценка*</label>
              <div class="rating-select">
                <span 
                  v-for="n in 5" 
                  :key="n" 
                  :class="['rating-star', { selected: n <= newTestimonial.rating }]"
                  @click="newTestimonial.rating = n"
                >★</span>
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label for="review">Ваш отзыв*</label>
            <textarea id="review" v-model="newTestimonial.review" required></textarea>
          </div>
          
          <div class="form-group">
            <label for="photos">Фото до/после (необязательно)</label>
            <input type="file" id="photos" multiple accept="image/*" @change="handleFileUpload">
          </div>
          
          <button type="submit" class="submit-button">Отправить отзыв</button>
        </form>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Хотите такой же результат?</h2>
          <p>Запишитесь на детейлинг прямо сейчас и получите 10% скидку</p>
          <form class="cta-form">
            <input type="tel" placeholder="Ваш телефон" required>
            <button type="submit">Получить скидку</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const filters = ['Все', 'Полировка', 'Химчистка', 'Защита', 'Керамика']
const activeFilter = ref('Все')
const currentPage = ref(1)
const itemsPerPage = 6

const servicesList = [
  'Полировка кузова',
  'Химчистка салона',
  'Керамическое покрытие',
  'Защита стекол',
  'Детейлинг полный',
  'Защита пластика'
]

const testimonials = [
  {
    author: 'Александр Иванов',
    car: 'BMW X5',
    service: 'Керамическое покрытие',
    text: 'Очень доволен работой! Машина выглядит как новая уже полгода. Все рекомендации по уходу дали, объяснили как правильно мыть. Персонал вежливый, сделали даже чуть раньше обещанного срока.',
    rating: 5,
    date: '15.05.2024',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    author: 'Елена Смирнова',
    car: 'Mercedes C-class',
    service: 'Химчистка салона',
    text: 'Приятно удивлена результатом! Салон после химчистки как новый, все пятна вывели, неприятные запахи исчезли. Буду рекомендовать вас всем знакомым.',
    rating: 5,
    date: '10.05.2024',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    author: 'Дмитрий Петров',
    car: 'Audi Q7',
    service: 'Полировка кузова',
    text: 'Сделали отличную полировку, убрали все царапины и потертости. Машина блестит как зеркало. Цена адекватная за такой качественный результат.',
    rating: 4,
    date: '05.05.2024',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    author: 'Ольга Козлова',
    car: 'Lexus RX',
    service: 'Детейлинг полный',
    text: 'Впервые обратилась в этот детейлинг-центр и не пожалела! Сделали полную обработку: кузов, салон, диски. Машина выглядит лучше, чем в салоне при покупке. Спасибо за внимательность к деталям!',
    rating: 5,
    date: '28.04.2024',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    author: 'Иван Сидоров',
    car: 'Toyota Camry',
    service: 'Защита стекол',
    text: 'Сделали защитное покрытие на стекла. После месяца эксплуатации - вода действительно скатывается на скорости 60 км/ч, дворники почти не нужны. Доволен!',
    rating: 4,
    date: '22.04.2024',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    author: 'Мария Федорова',
    car: 'Volkswagen Tiguan',
    service: 'Химчистка салона',
    text: 'Отлично почистили салон после того, как ребенок пролил сок на заднее сиденье. Даже я, придирчиво рассматривая, не нашла следов пятна. Спасибо!',
    rating: 5,
    date: '18.04.2024',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    author: 'Сергей Николаев',
    car: 'Porsche Cayenne',
    service: 'Керамическое покрытие',
    text: 'Делал керамику впервые. Результат превзошел ожидания - машина действительно меньше пачкается, а мыть ее стало в разы проще. Рекомендую!',
    rating: 5,
    date: '12.04.2024',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    author: 'Анна Воробьева',
    car: 'Kia Sportage',
    service: 'Полировка кузова',
    text: 'Убрали глубокие царапины на двери, которые я боялась, что уже не восстановить. Теперь не стыдно на машине ездить. Спасибо мастерам за терпение и качественную работу!',
    rating: 5,
    date: '05.04.2024',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    author: 'Павел Громов',
    car: 'Land Rover Discovery',
    service: 'Защита пластика',
    text: 'После обработки пластика в салоне исчезли скрипы, а сам пластик выглядит более насыщенным. Запах средства выветрился через пару дней. В целом доволен.',
    rating: 4,
    date: '30.03.2024',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
  }
]

const newTestimonial = ref({
  name: '',
  car: '',
  service: '',
  rating: 0,
  review: '',
  photos: []
})

const filteredTestimonials = computed(() => {
  let filtered = testimonials
  if (activeFilter.value !== 'Все') {
    filtered = filtered.filter(t => t.service.includes(activeFilter.value))
  }
  return filtered
})

const paginatedTestimonials = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredTestimonials.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => {
  return Math.ceil(filteredTestimonials.value.length / itemsPerPage)
})

function handleFileUpload(event) {
  newTestimonial.value.photos = Array.from(event.target.files)
}

function submitTestimonial() {
  const testimonial = {
    author: newTestimonial.value.name,
    car: newTestimonial.value.car,
    service: newTestimonial.value.service,
    text: newTestimonial.value.review,
    rating: newTestimonial.value.rating,
    date: new Date().toLocaleDateString('ru-RU'),
    photos: newTestimonial.value.photos
  }
  
  testimonials.unshift(testimonial)
  
  // Сброс формы
  newTestimonial.value = {
    name: '',
    car: '',
    service: '',
    rating: 0,
    review: '',
    photos: []
  }
  
  // Возврат на первую страницу
  currentPage.value = 1
  activeFilter.value = 'Все'
  
  alert('Спасибо за ваш отзыв! После модерации он появится на сайте.')
}
</script>

<style scoped>
/* Базовые стили */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Герой секция */
.hero {
  background: linear-gradient(rgba(245, 245, 220, 0.9), rgba(245, 245, 220, 0.9)),
    url('/reviews-hero-bg.jpg') center/cover;
  padding: 4rem 0;
  text-align: center;
  border-bottom: 2px solid rgba(160, 82, 45, 0.2);
}

.hero-title {
  color: #6B4F4F;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  color: #8B7355;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Секция отзывов */
.testimonials-page {
  padding: 3rem 0;
  background: #FFF8F0;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  color: #6B4F4F;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #A0522D;
  margin: 1rem auto 0;
}

.section-subtitle {
  color: #8B7355;
  font-size: 1rem;
}

.testimonials-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.filter-button {
  background: white;
  color: #6B4F4F;
  padding: 0.6rem 1.2rem;
  border: 1px solid #A0522D;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.filter-button:hover, .filter-button.active {
  background: #A0522D;
  color: white;
}

.testimonials-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.testimonial-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
}

.testimonial-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background: #F5F5DC;
  flex-shrink: 0;
}

.testimonial-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-author h3 {
  color: #6B4F4F;
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
}

.car-model {
  color: #8B7355;
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
}

.service-type {
  color: #A0522D;
  font-size: 0.8rem;
  font-weight: 500;
}

.testimonial-text {
  color: #6B4F4F;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-style: italic;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.testimonial-rating {
  color: #FFD700;
  font-size: 1.1rem;
}

.star {
  color: #ddd;
}

.star.filled {
  color: #FFD700;
}

.testimonial-date {
  color: #8B7355;
  font-size: 0.8rem;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.page-button, .page-nav {
  min-width: 36px;
  height: 36px;
  border: 1px solid #A0522D;
  background: white;
  color: #6B4F4F;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

.page-nav:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-button:hover, 
.page-button.active, 
.page-nav:hover:not(:disabled) {
  background: #A0522D;
  color: white;
}

/* Форма отзыва */
.add-testimonial {
  padding: 3rem 0;
  background: white;
}

.testimonial-form {
  max-width: 800px;
  margin: 2rem auto 0;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  color: #6B4F4F;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  transition: border 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #A0522D;
  outline: none;
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.rating-select {
  display: flex;
  gap: 0.5rem;
}

.rating-star {
  color: #ddd;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s ease;
}

.rating-star.selected {
  color: #FFD700;
}

input[type="file"] {
  padding: 0.5rem 0;
}

.submit-button {
  background: #A0522D;
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  width: 100%;
}

.submit-button:hover {
  background: #8B4513;
  transform: translateY(-2px);
}

/* CTA секция */
.cta-section {
  background: #A0522D;
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1rem;
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
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
}

.cta-form button {
  background: white;
  color: #A0522D;
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.cta-form button:hover {
  transform: translateY(-2px);
}

/* Адаптация для планшетов */
@media (min-width: 768px) {
  .hero {
    padding: 5rem 0;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .testimonials-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .form-row {
    flex-direction: row;
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
  .testimonials-container {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .testimonial-card {
    padding: 2rem;
  }
  
  .testimonial-avatar {
    width: 70px;
    height: 70px;
  }
  
  .submit-button {
    padding: 1rem;
  }
}

/* Адаптация для очень маленьких экранов */
@media (max-width: 360px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .filter-button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  
  .testimonial-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .testimonial-avatar {
    margin-bottom: 0.5rem;
  }
}
</style>