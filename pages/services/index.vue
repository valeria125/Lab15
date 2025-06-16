<template>
  <main>
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="container">
        <h1 class="hero-title">Наши услуги</h1>
        <p class="hero-subtitle">Профессиональный уход за вашим автомобилем на любом этапе эксплуатации</p>
      </div>
    </section>

    <!-- Services Categories -->
    <section class="services-categories">
      <div class="container">
        <div class="categories-tabs">
          <button 
            v-for="category in categories" 
            :key="category.id" 
            :class="['category-tab', { active: activeCategory === category.id }]"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>

        <div class="services-grid">
          <div 
            v-for="service in filteredServices" 
            :key="service.id" 
            class="service-card"
          >
            <div class="service-image">
              <img :src="service.image" :alt="service.title">
            </div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-details">
                <div class="service-time">
                  <img src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="Время">
                  <span>{{ service.time }}</span>
                </div>
                <div class="service-price">
                  от {{ service.price }} ₽
                </div>
              </div>
              <button class="service-button">Записаться</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Packages -->
    <section class="popular-packages">
      <div class="container">
        <h2 class="section-title">Популярные пакеты услуг</h2>
        <p class="section-subtitle">Специальные предложения для комплексного ухода</p>
        
        <div class="packages-grid">
          <div class="package-card">
            <div class="package-header">
              <h3>Базовый уход</h3>
              <div class="package-price">15 000 ₽</div>
            </div>
            <ul class="package-features">
              <li>Мойка кузова и колес</li>
              <li>Чистка салона пылесосом</li>
              <li>Обработка пластика</li>
              <li>Полировка фар</li>
              <li>Кондиционер для кожи</li>
            </ul>
            <div class="package-savings">Экономия 2 500 ₽</div>
            <button class="package-button">Выбрать пакет</button>
          </div>
          
          <div class="package-card featured">
            <div class="package-badge">Хит</div>
            <div class="package-header">
              <h3>Премиум защита</h3>
              <div class="package-price">35 000 ₽</div>
            </div>
            <ul class="package-features">
              <li>Полная мойка и сушка</li>
              <li>Детейлинг-уборка салона</li>
              <li>Нанесение керамики кузова</li>
              <li>Защита стекол</li>
              <li>Консервация кожи</li>
              <li>Глянцевание пластика</li>
            </ul>
            <div class="package-savings">Экономия 5 000 ₽</div>
            <button class="package-button">Выбрать пакет</button>
          </div>
          
          <div class="package-card">
            <div class="package-header">
              <h3>Экспресс-детейлинг</h3>
              <div class="package-price">8 000 ₽</div>
            </div>
            <ul class="package-features">
              <li>Быстрая мойка кузова</li>
              <li>Уборка салона</li>
              <li>Очистка стекол</li>
              <li>Ароматизация</li>
            </ul>
            <div class="package-savings">Экономия 1 000 ₽</div>
            <button class="package-button">Выбрать пакет</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Benefits -->
    <section class="service-benefits">
      <div class="container">
        <h2 class="section-title">Почему выбирают наш сервис</h2>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3142/3142028.png" alt="Гарантия">
            </div>
            <h3>Гарантия качества</h3>
            <p>На все работы предоставляем гарантию до 12 месяцев</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png" alt="Материалы">
            </div>
            <h3>Премиальные материалы</h3>
            <p>Используем только профессиональную химию премиум-класса</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2936/2936886.png" alt="Опыт">
            </div>
            <h3>Опытные мастера</h3>
            <p>Наши специалисты проходят регулярное обучение</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" alt="Комфорт">
            </div>
            <h3>Комфорт для клиентов</h3>
            <p>Уютная зона ожидания с кофе и Wi-Fi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process -->
    <section class="service-process">
      <div class="container">
        <h2 class="section-title">Как мы работаем</h2>
        
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <h3>Заявка</h3>
            <p>Оставляете заявку на сайте или по телефону</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">2</div>
            <h3>Диагностика</h3>
            <p>Проводим бесплатную оценку состояния авто</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">3</div>
            <h3>Согласование</h3>
            <p>Утверждаем перечень работ и стоимость</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">4</div>
            <h3>Выполнение</h3>
            <p>Профессионально выполняем все работы</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">5</div>
            <h3>Результат</h3>
            <p>Вы получаете идеально чистый автомобиль</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Готовы преобразить ваш автомобиль?</h2>
          <p>Оставьте заявку и получите бесплатную консультацию специалиста</p>
          <form class="cta-form">
            <input type="tel" placeholder="Ваш телефон" required>
            <button type="submit">Записаться</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = [
  { id: 'all', name: 'Все услуги' },
  { id: 'body', name: 'Кузов' },
  { id: 'interior', name: 'Салон' },
  { id: 'protection', name: 'Защита' },
  { id: 'additional', name: 'Дополнительно' }
]

const services = [
  {
    id: 1,
    title: 'Комплексная мойка кузова',
    description: 'Полная очистка кузова, колес и арок от загрязнений',
    category: 'body',
    time: '1-2 часа',
    price: '2 500',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Химчистка салона',
    description: 'Глубокая очистка всех поверхностей салона',
    category: 'interior',
    time: '3-4 часа',
    price: '5 000',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    title: 'Керамическое покрытие',
    description: 'Нанесение профессионального защитного покрытия',
    category: 'protection',
    time: '6-8 часов',
    price: '25 000',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    title: 'Полировка кузова',
    description: 'Удаление царапин и восстановление блеска ЛКП',
    category: 'body',
    time: '4-6 часов',
    price: '12 000',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    title: 'Защита стекол',
    description: 'Нанесение гидрофобного покрытия на стекла',
    category: 'protection',
    time: '1-2 часа',
    price: '3 500',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 6,
    title: 'Чистка двигателя',
    description: 'Очистка и консервация двигателя',
    category: 'additional',
    time: '2-3 часа',
    price: '4 500',
    image: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 7,
    title: 'Детейлинг пластика',
    description: 'Восстановление и защита пластиковых элементов',
    category: 'interior',
    time: '2-3 часа',
    price: '3 000',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 8,
    title: 'Антидождь',
    description: 'Нанесение водоотталкивающего состава на стекла',
    category: 'protection',
    time: '1 час',
    price: '2 000',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
]

const activeCategory = ref('all')

const filteredServices = computed(() => {
  if (activeCategory.value === 'all') {
    return services
  }
  return services.filter(service => service.category === activeCategory.value)
})
</script>

<style scoped>
.services-hero {
  background: linear-gradient(rgba(245, 245, 220, 0.9), rgba(245, 245, 220, 0.9)),
    url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
  padding: 8rem 0 6rem;
  text-align: center;
  border-bottom: 2px solid #A0522D33;
}

.hero-title {
  color: #6B4F4F;
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  color: #8B7355;
  font-size: 1.4rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

.services-categories {
  padding: 5rem 0;
  background: #FFF8F0;
}

.categories-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.category-tab {
  background: white;
  color: #6B4F4F;
  padding: 0.8rem 1.8rem;
  border: 1px solid #A0522D;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.category-tab:hover, .category-tab.active {
  background: #A0522D;
  color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}

.service-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.service-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.service-content {
  padding: 1.5rem;
}

.service-content h3 {
  color: #A0522D;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.service-description {
  color: #6B4F4F;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  min-height: 60px;
}

.service-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.service-time {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8B7355;
}

.service-time img {
  width: 20px;
  opacity: 0.7;
}

.service-price {
  color: #6B4F4F;
  font-weight: bold;
  font-size: 1.2rem;
}

.service-button {
  background: #A0522D;
  color: white;
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-button:hover {
  background: #8B4513;
}

.popular-packages {
  padding: 5rem 0;
  background: white;
}

.section-title {
  color: #6B4F4F;
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #A0522D;
  margin: 1rem auto 3rem;
}

.section-subtitle {
  color: #8B7355;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.package-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border: 1px solid #F5F5DC;
}

.package-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.package-card.featured {
  border: 2px solid #A0522D;
}

.package-badge {
  position: absolute;
  top: -10px;
  right: 20px;
  background: #A0522D;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.package-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.package-header h3 {
  color: #A0522D;
  font-size: 1.3rem;
}

.package-price {
  color: #6B4F4F;
  font-weight: bold;
  font-size: 1.5rem;
}

.package-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.package-features li {
  color: #6B4F4F;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.package-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #A0522D;
}

.package-savings {
  color: #8B7355;
  font-style: italic;
  margin-bottom: 1.5rem;
  text-align: center;
}

.package-button {
  background: #A0522D;
  color: white;
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.package-button:hover {
  background: #8B4513;
}

.service-benefits {
  padding: 5rem 0;
  background: #F5F5DC;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.benefit-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.benefit-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-icon img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.benefit-card h3 {
  color: #6B4F4F;
  margin-bottom: 1rem;
}

.benefit-card p {
  color: #8B7355;
  line-height: 1.6;
}

.service-process {
  padding: 5rem 0;
  background: white;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  height: 2px;
  background: #A0522D;
  z-index: 1;
}

.process-step {
  width: 18%;
  text-align: center;
  position: relative;
  z-index: 2;
}

.step-number {
  width: 50px;
  height: 50px;
  background: #A0522D;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.process-step h3 {
  color: #6B4F4F;
  margin-bottom: 0.5rem;
}

.process-step p {
  color: #8B7355;
  line-height: 1.6;
  font-size: 0.9rem;
}

.cta-section {
  background: #A0522D;
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
}

.cta-form input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 35px;
  font-size: 1rem;
}

.cta-form button {
  background: white;
  color: #A0522D;
  padding: 1rem 2rem;
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

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .packages-grid {
    grid-template-columns: 1fr;
  }
  
  .process-steps {
    flex-direction: column;
    gap: 2rem;
  }
  
  .process-steps::before {
    display: none;
  }
  
  .process-step {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 1.5rem;
  }
  
  .step-number {
    margin: 0;
    flex-shrink: 0;
  }
  
  .cta-form {
    flex-direction: column;
  }
}

/* Для устройств до 768px (уже есть) */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .packages-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    flex-direction: column;
    gap: 2rem;
  }

  .process-steps::before {
    display: none;
  }

  .process-step {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 1.5rem;
  }

  .step-number {
    margin: 0;
    flex-shrink: 0;
  }

  .cta-form {
    flex-direction: column;
  }
}

/* Для очень маленьких устройств до 480px (уже есть) */
@media (max-width: 480px) {
  .categories-tabs {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 1rem;
  }

  .category-tab {
    flex-shrink: 0;
  }

  /* Уменьшаем размеры шрифтов для более компактного вида */
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  /* Карточки услуг */
  .service-card {
    padding: 1rem;
  }

  /* Заголовки разделов */
  .section-title {
    font-size: 1.8rem;
  }

  /* Текст внутри карточек */
  .service-description {
    font-size: 0.9rem;
  }

  /* Размер шрифтов в пакетах */
  .package-header h3 {
    font-size: 1.2rem;
  }

  .package-price {
    font-size: 1.3rem;
  }

  /* Размер текста в benefits */
  .benefit-card h3 {
    font-size: 1.1rem;
  }

  .benefit-card p {
    font-size: 0.9rem;
  }

  /* Шрифты в процессе */
  .process-step h3 {
    font-size: 1rem;
  }

  .process-step p {
    font-size: 0.8rem;
  }

  /* Форма */
  .cta-form {
    gap: 0.5rem;
  }

  input {
    padding: 0.8rem;
  }

  button {
    padding: 0.8rem 1.5rem;
  }
}

</style>