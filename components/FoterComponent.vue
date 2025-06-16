<template>
  <footer class="footer" v-if="footer.logo">
    <div class="container">
      <div class="footer-grid">
        <!-- Лого и копирайт -->
        <div class="footer-column logo-column">
          <a href="/" class="logo-link">
            <img 
              :src="footer.logo" 
              alt="Логотип" 
              class="footer-logo"
              @error="(e) => e.target.src = '/placeholder-logo.svg'"
            >
          </a>
          <p class="copyright">{{ footer.copyright }}</p>
          
          <!-- Мобильные соцсети -->
          <div class="mobile-socials">
            <a 
              v-for="social in footer.socials" 
              :key="social.name" 
              :href="social.url" 
              class="social-link"
              target="_blank"
              rel="noopener"
            >
              <img 
                :src="social.icon" 
                :alt="social.name" 
                class="social-icon"
              >
            </a>
          </div>
        </div>
        
        <!-- Контакты -->
        <div class="footer-column contacts-column">
          <h4 class="section-title">Контакты</h4>
          <ul class="contacts">
            <li class="contact-item">
              <span class="icon">📍</span>
              <span>{{ footer.contacts.address }}</span>
            </li>
            <li class="contact-item">
              <a :href="`tel:${footer.contacts.phone}`" class="contact-link">
                <span class="icon">📞</span>
                <span>{{ footer.contacts.phone }}</span>
              </a>
            </li>
            <li class="contact-item">
              <a :href="`mailto:${footer.contacts.email}`" class="contact-link">
                <span class="icon">✉️</span>
                <span>{{ footer.contacts.email }}</span>
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Соцсети (десктоп) -->
        <div class="footer-column socials-column">
          <h4 class="section-title">Мы в соцсетях</h4>
          <div class="socials">
            <a 
              v-for="social in footer.socials" 
              :key="social.name" 
              :href="social.url" 
              class="social-link"
              target="_blank"
              rel="noopener"
            >
              <img 
                :src="social.icon" 
                :alt="social.name" 
                class="social-icon"
              >
            </a>
          </div>
        </div>
        
        <!-- Дополнительное меню (по желанию) -->
      </div>
      
      <!-- Нижняя полоса -->
      <div class="footer-bottom">
        <p class="legal-text">{{ footer.legal }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  footer: {
    type: Object,
    required: true,
    default: () => ({
      logo: '/logo.svg',
      copyright: '© 2023 AutoDetail. Все права защищены',
      contacts: {
        address: 'г. Москва, ул. Автодетейлинговая, 12',
        phone: '+7 (495) 123-45-67',
        email: 'info@autodetail.ru'
      },
      socials: [
        { name: 'VK', url: '#', icon: '/icons/vk.svg' },
        { name: 'Telegram', url: '#', icon: '/icons/telegram.svg' },
        { name: 'WhatsApp', url: '#', icon: '/icons/whatsapp.svg' },
        { name: 'Instagram', url: '#', icon: '/icons/instagram.svg' }
      ],
      legal: 'ИП Иванов И.И. ОГРНИП 1234567890123'
    })
  }
})
</script>

<style scoped>
.footer {
  background: #F5F5DC;
  color: #6B4F4F;
  padding: 3rem 0 0;
  border-top: 2px solid rgba(160, 82, 45, 0.1);
  font-family: 'Arial', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.footer-column {
  margin-bottom: 1.5rem;
}

.section-title {
  color: #A0522D;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #A0522D;
  display: inline-block;
}

.footer-logo {
  height: 60px;
  margin-bottom: 1.5rem;
  filter: 
brightness(2.9) 
    sepia(1) 
    saturate(22) 
    hue-rotate(20deg);
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.logo-link:hover .footer-logo {
  transform: scale(1.05);
}

.contacts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.contact-link {
  color: #6B4F4F;
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  gap: 0.8rem;
}

.contact-link:hover {
  color: #A0522D;
}

.icon {
  font-size: 1.2rem;
  margin-top: 2px;
}

.socials {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-icon {
  width: 36px;
  height: 36px;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 5px;
  background: rgba(160, 82, 45, 0.1);
}

.social-icon:hover {
  transform: translateY(-3px);
  background: rgba(160, 82, 45, 0.2);
}

.copyright {
  font-size: 0.9rem;
  color: #8B7355;
  margin-top: 1rem;
  line-height: 1.5;
}

.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu li {
  margin-bottom: 0.8rem;
}

.menu-link {
  color: #6B4F4F;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.menu-link:hover {
  color: #A0522D;
}

.footer-bottom {
  border-top: 1px solid rgba(160, 82, 45, 0.1);
  padding: 1.5rem 0;
  text-align: center;
}

.legal-text {
  font-size: 0.8rem;
  color: #8B7355;
  margin: 0;
}

.mobile-socials {
  display: none;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 0;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-column {
    text-align: center;
  }
  
  .section-title {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 1rem;
  }
  
  .contact-item {
    justify-content: center;
  }
  
  .socials {
    justify-content: center;
  }
  
  .footer-logo {
    margin: 0 auto 1.5rem;
  }
  
  .mobile-socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .socials-column {
    display: none;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 0 0;
  }
  
  .footer-logo {
    height: 50px;
  }
  
  .contact-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.3rem;
  }
  
  .icon {
    margin-top: 0;
  }
  
  .mobile-socials {
    margin-top: 1rem;
  }
}
</style>