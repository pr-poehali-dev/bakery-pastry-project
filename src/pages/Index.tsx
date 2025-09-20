import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    {
      category: 'Авторские булочки',
      items: [
        { name: 'Булочка с корицей', price: '120₽', description: 'Мягкая булочка с ароматной корицей и глазурью' },
        { name: 'Круассан с шоколадом', price: '150₽', description: 'Слоеное тесто с бельгийским шоколадом' },
        { name: 'Brioche с ванилью', price: '180₽', description: 'Французская булочка на сливочном масле' },
      ]
    },
    {
      category: 'Хлеб',
      items: [
        { name: 'Ржаной на закваске', price: '200₽', description: 'Традиционный хлеб на собственной закваске' },
        { name: 'Цельнозерновой', price: '220₽', description: 'Полезный хлеб из цельных зёрен' },
        { name: 'Багет французский', price: '180₽', description: 'Хрустящий багет по классическому рецепту' },
      ]
    },
    {
      category: 'Десерты',
      items: [
        { name: 'Эклер с кремом', price: '160₽', description: 'Заварное тесто с ванильным кремом' },
        { name: 'Тарт с ягодами', price: '220₽', description: 'Песочная основа с сезонными ягодами' },
        { name: 'Маффин шоколадный', price: '140₽', description: 'Воздушный маффин с шоколадными каплями' },
      ]
    },
  ];

  const galleryImages = [
    '/img/54d0750e-0db4-4733-b635-b80e53d3264e.jpg',
    '/img/e5d9c004-5d00-4161-b41c-badee774ab26.jpg',
    '/img/581e4315-7f1d-4515-8519-7f159511a976.jpg',
  ];

  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Wheat" className="text-chocolate-dark" size={24} />
            <span className="text-xl font-bold text-chocolate-dark">сэр Куруш</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {['Главная', 'Меню', 'Галерея', 'О нас', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase().replace(' ', ''))}
                className="hover:text-chocolate-dark transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-light to-cream-medium pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <Badge className="mb-4 bg-chocolate-light text-chocolate-dark">
            Авторская пекарня
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-chocolate-dark mb-6 leading-tight">
            сэр Куруш
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Авторские булочки и тёплая атмосфера домашней пекарни. 
            Каждое изделие создано с любовью и особым вниманием к деталям.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-chocolate-dark hover:bg-bakery-brown text-white"
              onClick={() => setActiveSection('меню')}
            >
              <Icon name="Coffee" className="mr-2" size={20} />
              Посмотреть меню
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-chocolate-dark text-chocolate-dark hover:bg-chocolate-dark hover:text-white"
              onClick={() => setActiveSection('контакты')}
            >
              <Icon name="MapPin" className="mr-2" size={20} />
              Как добраться
            </Button>
          </div>
        </div>
        <div className="animate-scale-in">
          <img 
            src="/img/54d0750e-0db4-4733-b635-b80e53d3264e.jpg" 
            alt="Интерьер пекарни сэр Куруш"
            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );

  const MenuSection = () => (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-chocolate-light text-chocolate-dark">
            Наше меню
          </Badge>
          <h2 className="text-4xl font-bold text-chocolate-dark mb-6">
            Свежая выпечка каждый день
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Все изделия готовятся утром из натуральных ингредиентов по авторским рецептам
          </p>
        </div>

        <div className="grid gap-12">
          {menuItems.map((category, index) => (
            <div key={index} className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-chocolate-dark mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <Badge variant="secondary" className="bg-chocolate-light text-chocolate-dark">
                          {item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const GallerySection = () => (
    <section className="py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-chocolate-light text-chocolate-dark">
            Галерея
          </Badge>
          <h2 className="text-4xl font-bold text-chocolate-dark mb-6">
            Атмосфера нашей пекарни
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="animate-scale-in group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={image} 
                  alt={`Пекарня сэр Куруш - фото ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-chocolate-light text-chocolate-dark">
              О нас
            </Badge>
            <h2 className="text-4xl font-bold text-chocolate-dark mb-6">
              История пекарни сэр Куруш
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Наша семейная пекарня открылась в 2018 году с простой идеей — 
                создавать настоящую выпечку по традиционным рецептам, 
                используя только натуральные ингредиенты.
              </p>
              <p>
                Каждая булочка выпекается вручную нашими мастерами, 
                которые вкладывают душу в каждое изделие. Мы гордимся 
                тёплой атмосферой, которая делает нашу пекарню особенным местом.
              </p>
              <p>
                Авторские рецепты передаются из поколения в поколение, 
                а современные техники помогают нам создавать уникальные вкусы.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Icon name="Award" className="mx-auto text-chocolate-dark mb-2" size={32} />
                <div className="font-semibold text-chocolate-dark">5+ лет</div>
                <div className="text-sm text-muted-foreground">опыта</div>
              </div>
              <div className="text-center">
                <Icon name="Users" className="mx-auto text-chocolate-dark mb-2" size={32} />
                <div className="font-semibold text-chocolate-dark">1000+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center">
                <Icon name="Heart" className="mx-auto text-chocolate-dark mb-2" size={32} />
                <div className="font-semibold text-chocolate-dark">100%</div>
                <div className="text-sm text-muted-foreground">натуральные продукты</div>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="/img/581e4315-7f1d-4515-8519-7f159511a976.jpg" 
              alt="Мастер пекарни за работой"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className="py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-chocolate-light text-chocolate-dark">
            Контакты
          </Badge>
          <h2 className="text-4xl font-bold text-chocolate-dark mb-6">
            Приходите к нам в гости
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-chocolate-dark mb-6">
                Свяжитесь с нами
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-chocolate-dark" size={20} />
                  <span>ул. Хлебная, 15, Москва</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-chocolate-dark" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-chocolate-dark" size={20} />
                  <span>Пн-Вс: 7:00 - 21:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-chocolate-dark" size={20} />
                  <span>hello@sirkurush.ru</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон или email" />
                <Textarea placeholder="Сообщение" rows={4} />
                <Button className="w-full bg-chocolate-dark hover:bg-bakery-brown text-white">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить сообщение
                </Button>
              </div>
            </Card>
          </div>

          <div className="animate-scale-in">
            <div className="bg-muted rounded-2xl h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="MapPin" size={48} className="mx-auto mb-4" />
                <p>Интерактивная карта</p>
                <p className="text-sm">ул. Хлебная, 15, Москва</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-chocolate-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Wheat" size={24} />
              <span className="text-xl font-bold">сэр Куруш</span>
            </div>
            <p className="text-chocolate-light">
              Авторская пекарня с тёплой атмосферой и натуральными продуктами
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Время работы</h4>
            <div className="space-y-2 text-chocolate-light">
              <p>Понедельник - Воскресенье</p>
              <p>7:00 - 21:00</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-chocolate-light hover:text-white">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-chocolate-light hover:text-white">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-chocolate-light hover:text-white">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-chocolate-medium mt-8 pt-8 text-center text-chocolate-light">
          <p>&copy; 2024 Пекарня сэр Куруш. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'меню':
        return <MenuSection />;
      case 'галерея':
        return <GallerySection />;
      case 'онас':
        return <AboutSection />;
      case 'контакты':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection />
            <MenuSection />
            <GallerySection />
            <AboutSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default Index;