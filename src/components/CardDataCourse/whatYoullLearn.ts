import styles from '../../components/CourseCard/CourseCard.module.css';
import {CourseCardProps} from '../../type/CourseCardSituation';

export const courses : (CourseCardProps)[] = [
  {
    image: 'deisgn.png',  
    profession: 'DESIGN',  
    price: 99.99,  
    description: 'The Python Mega Course: Build 10 Real World Applications',  
    rating: 5.0, 
    numPeople: 150, 
    categoryColor:"blue"
  },
  {
    image: 'software.png',
    profession: 'IT & SOFTWARE',
    price: 129.99,
    description: 'Facebook Ads & Facebook Marketing MASTERY 2021 Course',
    rating: 2.6,
    numPeople: 200,
    categoryColor:"yellow"
  },
  {
    image: 'developments.png',
    profession: 'DEVELOPMENT',
    price: 79.99,
    description: '2021 Complete Python Bootcamp From Zero to Hero in Python',
    rating: 1.3,
    numPeople: 100,
    categoryColor:"green"
  },
];

export const whatYoullLearn = [
  "Python'u profesyonelce kullanmayı öğrenin, hem Python 2 hem de Python 3'ü öğrenin!",
  "Python ile oyunlar oluşturun, Tic Tac Toe ve Blackjack gibi!",
  "Koleksiyonlar modülü gibi gelişmiş Python özelliklerini öğrenin ve zaman damgalarıyla nasıl çalışılacağını öğrenin!"
];
