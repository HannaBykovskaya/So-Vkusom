import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpg";
import dish5 from "../assets/dish5.avif";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpg";
import dish9 from "../assets/dish9.jpg";
import dish10 from "../assets/dish10.jpg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaTiktok, FaVk, FaTelegram } from "react-icons/fa6";

export const LINKS = [
  { text: "Наши Блюда", targetId: "dishes" },
  { text: "О Нас", targetId: "about" },
  { text: "Наша Философия", targetId: "mission" },
  { text: "Кухни", targetId: "expertise" },
  { text: "Отзывы", targetId: "review" },
  { text: "Контакты", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Паста Карбонара",
    description: "Сливочная паста с беконом и сыром",
  },
  {
    image: dish2,
    title: "Тикка Масала",
    description: "Индийское карри с нежной курицей в остром соусе",
  },
  {
    image: dish3,
    title: "Салат Капрезе",
    description: "Свежие помидоры, моцарелла и базилик с бальзамической глазурью",
  },
  {
    image: dish4,
    title: "Суши Ролл",
    description: "Ассорти из морепродуктов и овощей, завернутое в водоросли и рис",
  },
  {
    image: dish5,
    title: "Лавовый торт",
    description: "Удивительно вкусный шоколадный торт с тягучей начинкой",
  },
  {
    image: dish6,
    title: "Греческий салат",
    description: "Свежий салат, оливки, сыр фета и пикантная заправка",
  },
  {
    image: dish7,
    title: "Пад Тай",
    description: "Жареная рисовая лапша с креветками, тофу и арахисом",
  },
  {
    image: dish8,
    title: "Утка по-пекински",
    description: "Хрустящая утка с блинами, огурцом и соусом хойсин",
  },
  {
    image: dish9,
    title: "Веллингтон",
    description: "Нежное филе говядины, завернутое в тесто с грибами и зеленью",
  },
  {
    image: dish10,
    title: "Тирамису",
    description:
      "Итальянский десерт с печеньем, пропитанным кофе и маскарпоне",
  },
];

export const ABOUT = {
  header: "Мы любим готовить!",
  content:
    "Со Вкусом - это ресторан, созданный преданными поклонниками вкусной, разнообразной и полезной еды. Мы верим, что блюда, приготовленные с любовью могут дать силы на совершение самых важных подвигов! Мы продумали каждую деталь - от кулинарных шедевров нашего шеф-повара до внимательного обслуживания, поэтому каждый визит к нам будет самым настоящим событием. В нашем разнообразное меню, вдохновленном мировыми кухнями, каждое блюдо — это праздник вкуса и инноваций. Присоединяйтесь к нам в кулинарном путешествии, где каждый кусочек оставляет неизгладимое впечатление!",
};

export const MISSION =
  "Философия нашего ресторана — создавать восхитительные и запоминающиеся гастрономические впечатления.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Итальянская",
    description:
      "Почувствуйте вкусы Италии с нашими изысканными блюдами, приготовленными по традиционным и современным рецептам.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Японская",
    description:
      "Насладитесь искусством японской кулинарии в изысканном сочетании классики и современности.",
  },
  {
    number: "03.",
    image: indian,
    title: "Индийская",
    description:
      "Побалуйте себя богатыми и разнообразными блюдами Индии, с любовью приготовленными нашим шефом.",
  },
];

export const REVIEW = {
  name: "Гордон Рамзи",
  profession: "шеф-повар",
  content:
    "“Как опытный шеф-повар, я всегда предъявляю высокие требования к новому заведению общественного питания. И ресторан Со вкусом стал настоящим открытием! Подача блюд, сервис и даже интерьер превзошли мои ожидания.”",
};

export const CONTACT = [
  { key: "address", value: "Адрес: Минск, Беларусь" },
  { key: "phone", value: "Телефон: 123-456-7890" },
  { key: "email", value: "Email: contact@so-vkusom.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.tiktok.com/",
    icon: <FaTiktok fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://vk.com/",
    icon: <FaVk fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://telegram.org/",
    icon: <FaTelegram fontSize={30} className="hover:opacity-80" />,
  },
];


