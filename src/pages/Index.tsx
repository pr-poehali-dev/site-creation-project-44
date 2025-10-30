import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const menuCategories = [
  {
    id: "shashlik",
    name: "Шашлык",
    icon: "Flame",
    items: [
      { name: "Шашлык из свинины", price: 450, weight: "300г" },
      { name: "Шашлык из курицы", price: 380, weight: "300г" },
      { name: "Шашлык из баранины", price: 550, weight: "300г" },
      { name: "Шашлык ассорти", price: 600, weight: "400г" },
    ],
  },
  {
    id: "khachapuri",
    name: "Хачапури",
    icon: "Pizza",
    items: [
      { name: "Хачапури по-аджарски", price: 420, weight: "350г" },
      { name: "Хачапури с сыром", price: 320, weight: "300г" },
      { name: "Хачапури с мясом", price: 380, weight: "350г" },
    ],
  },
  {
    id: "sides",
    name: "Гарниры",
    icon: "Cookie",
    items: [
      { name: "Картошка фри", price: 150, weight: "200г" },
      { name: "Картофель по-деревенски", price: 170, weight: "250г" },
      { name: "Овощи гриль", price: 200, weight: "200г" },
    ],
  },
  {
    id: "shawarma",
    name: "Шаурма",
    icon: "Sandwich",
    items: [
      { name: "Шаурма классическая", price: 250, weight: "350г" },
      { name: "Шаурма мега", price: 350, weight: "500г" },
      { name: "Шаурма с курицей", price: 230, weight: "350г" },
    ],
  },
  {
    id: "pizza",
    name: "Пицца",
    icon: "Pizza",
    items: [
      { name: "Маргарита", price: 450, weight: "30см" },
      { name: "Пепперони", price: 520, weight: "30см" },
      { name: "4 сыра", price: 580, weight: "30см" },
      { name: "Мясная", price: 620, weight: "30см" },
    ],
  },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("shashlik");
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-open-sans">
      <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Flame" className="text-primary" size={32} />
            <h1 className="text-2xl md:text-3xl font-montserrat font-bold">
              Дым на Огне
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+79000000000" className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
              <span className="font-semibold">+7 900 000-00-00</span>
            </a>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => setOrderModalOpen(true)}
            >
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtOC44LTcuMi0xNi0xNi0xNlMwIDcuMiAwIDE2czcuMiAxNiAxNiAxNiA4LTcuMiA4LTE2em0wIDI0YzAtOC44LTcuMi0xNi0xNi0xNlMwIDMxLjIgMCA0MHM3LjIgMTYgMTYgMTYgOC03LjIgOC0xNnptMjQgMGMwLTguOC03LjItMTYtMTYtMTZzLTE2IDcuMi0xNiAxNiA3LjIgMTYgMTYgMTYgMTYtNy4yIDE2LTE2ek02MCAxNmMwLTguOC03LjItMTYtMTYtMTZzLTE2IDcuMi0xNiAxNiA3LjIgMTYgMTYgMTYgMTYtNy4yIDE2LTE2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-montserrat font-extrabold text-white mb-6 leading-tight">
              Вкус, который <span className="text-primary">согревает</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold">
              Доставка изысканных блюд в Новокуйбышевске
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                <Icon name="Clock" className="text-primary" size={24} />
                <span className="text-white font-semibold">11:00 - 23:00</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                <Icon name="Truck" className="text-primary" size={24} />
                <span className="text-white font-semibold">Бесплатная доставка</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => setOrderModalOpen(true)}
            >
              Смотреть меню
              <Icon name="ChevronRight" size={24} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
            Наше меню
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {menuCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="lg"
                className={`font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "hover:scale-105"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon name={category.icon as any} size={20} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {menuCategories
              .find((cat) => cat.id === selectedCategory)
              ?.items.map((item, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <div className="h-48 bg-gradient-to-br from-accent to-primary/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        name="Utensils"
                        size={80}
                        className="text-white/20 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-montserrat font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.weight}</span>
                      <span className="text-2xl font-bold text-primary">
                        {item.price} ₽
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
              Контакты и доставка
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon name="MapPin" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-montserrat font-bold text-xl mb-2">Адрес</h4>
                      <p className="text-muted-foreground">
                        г. Новокуйбышевск
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <Icon name="Clock" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-montserrat font-bold text-xl mb-2">Время работы</h4>
                      <p className="text-muted-foreground">Ежедневно с 11:00 до 23:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-montserrat font-bold text-xl mb-2">Телефон</h4>
                      <a
                        href="tel:+79000000000"
                        className="text-primary hover:underline font-semibold text-lg"
                      >
                        +7 900 000-00-00
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon name="Truck" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-montserrat font-bold text-xl mb-2">
                        Бесплатная доставка
                      </h4>
                      <p className="text-muted-foreground">
                        По всему Новокуйбышевску в течение 45-60 минут
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <Icon name="CreditCard" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-montserrat font-bold text-xl mb-2">Оплата</h4>
                      <p className="text-muted-foreground">
                        Наличными или картой курьеру
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6"
                    onClick={() => setOrderModalOpen(true)}
                  >
                    <Icon name="Phone" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Flame" className="text-primary" size={28} />
            <span className="text-2xl font-montserrat font-bold">Дым на Огне</span>
          </div>
          <p className="text-white/80">
            © 2024 Дым на Огне. Доставка еды в Новокуйбышевске
          </p>
        </div>
      </footer>

      {orderModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOrderModalOpen(false)}
        >
          <Card
            className="max-w-md w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-montserrat font-bold">
                  Оформить заказ
                </h3>
                <button
                  onClick={() => setOrderModalOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Позвоните нам по телефону или закажите обратный звонок
              </p>
              
              <a href="tel:+79000000000">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 mb-4">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 900 000-00-00
                </Button>
              </a>
              
              <p className="text-sm text-center text-muted-foreground">
                Мы работаем ежедневно с 11:00 до 23:00
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
