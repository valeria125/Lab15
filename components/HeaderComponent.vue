<template>
  <header class="header" v-if="header?.logo">
    <div class="container">
      <nav class="nav">
        <!-- Логотип -->
        <a href="/" class="logo-link">
          <img 
            :src="header.logo" 
            alt="Логотип" 
            class="logo"
            @error="(e) => e.target.src = '/placeholder-logo.svg'"
          />
        </a>

        <!-- Основное меню (десктоп) -->
        <ul class="nav-list" v-if="header.nav_links">
          <li v-for="link in header.nav_links" :key="link.anchor">
            <a :href="link.anchor" class="nav-link">{{ link.title }}</a>
          </li>
        </ul>

        <!-- Телефон (десктоп) -->
        <a v-if="header.phone" :href="`tel:${header.phone}`" class="phone desktop-phone">
          {{ header.phone }}
        </a>

        <!-- Бургер-кнопка (мобильные) -->
        <button 
          class="burger-button" 
          @click="toggleMenu"
          aria-label="Меню"
          :aria-expanded="isMenuOpen"
        >
          <span class="burger-line" :class="{ 'open': isMenuOpen }"></span>
          <span class="burger-line" :class="{ 'open': isMenuOpen }"></span>
          <span class="burger-line" :class="{ 'open': isMenuOpen }"></span>
        </button>
      </nav>

      <!-- Мобильное меню -->
      <div class="mobile-menu" :class="{ 'open': isMenuOpen }">
        <ul class="mobile-nav-list" v-if="header.nav_links">
          <li v-for="link in header.nav_links" :key="link.anchor">
            <a 
              :href="link.anchor" 
              class="mobile-nav-link"
              @click="closeMenu"
            >
              {{ link.title }}
            </a>
          </li>
        </ul>

        <a 
          v-if="header.phone" 
          :href="`tel:${header.phone}`" 
          class="mobile-phone"
          @click="closeMenu"
        >
          {{ header.phone }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto'
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

defineProps({
  header: {
    type: Object,
    required: true,
    default: () => ({
      logo: '/logo.svg',
      phone: '+7 (495) 123-45-67',
      nav_links: [
        { title: 'Услуги', anchor: '#services' },
        { title: 'О нас', anchor: '#about' },
        { title: 'Портфолио', anchor: '#portfolio' },
        { title: 'Контакты', anchor: '#contacts' }
      ]
    })
  }
})
</script>

<style scoped>
.header {
  background: #F5F5DC;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  transition: transform 0.3s ease;
    height: 60px;
  filter: 
brightness(2.9) 
    sepia(1) 
    saturate(22) 
    hue-rotate(20deg);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #6B4F4F;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #A0522D;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #A0522D;
}

.nav-link:hover::after {
  width: 100%;
}

.phone {
  background: #A0522D;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.phone:hover {
  background: #8B4513;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.phone::before {
  content: '📞';
  font-size: 1.2rem;
}

/* Бургер меню */
.burger-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.burger-line {
  display: block;
  width: 25px;
  height: 2px;
  background: #6B4F4F;
  margin: 5px 0;
  transition: all 0.3s ease;
  transform-origin: center;
}

.burger-line.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger-line.open:nth-child(2) {
  opacity: 0;
}

.burger-line.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Мобильное меню */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #F5F5DC;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: center;
}

.mobile-nav-list li {
  margin-bottom: 1.5rem;
}

.mobile-nav-link {
  color: #6B4F4F;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
  display: inline-block;
  padding: 0.5rem 1rem;
}

.mobile-nav-link:hover {
  color: #A0522D;
}

.mobile-phone {
  background: #A0522D;
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.mobile-phone:hover {
  background: #8B4513;
  transform: translateY(-2px);
}

/* Адаптивность */
@media (max-width: 1024px) {
  .nav-list {
    gap: 1.5rem;
  }
  
  .phone {
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .nav-list,
  .desktop-phone {
    display: none;
  }
  
  .burger-button {
    display: block;
  }
  
  .logo {
    height: 40px;
  }
}

@media (max-width: 480px) {
  .logo {
    height: 35px;
  }
  
  .mobile-nav-link {
    font-size: 1.3rem;
  }
  
  .mobile-phone {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }
  
  .burger-button {
    padding: 8px;
  }
  
  .burger-line {
    width: 22px;
  }
}
</style>