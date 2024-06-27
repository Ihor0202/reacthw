import React, {FC} from 'react';
import './App.css';
import Character from "./components/character/Character";

const App = () => {
  return (
    <div>

      <Character name={'Homer'} images={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'} paragraph={'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — милий та кумедний, проте іноді грубий і неввічливий батько родини. Він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.'}/>
      <Character name={'Bart'} images={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>
      <Character name={'Rick'} images={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6JZDz_sBsneNgGuBox3HMeo8Dr3Inay3nw&s'} paragraph={'Рік — геніальний вчений, але при цьому алкоголік, скептик і цинік. Батько матері Морті — Бетті, в будинок якої переїхав після тривалої відсутності та облаштував у гаражі лабораторію. Після повернення почав активно подорожувати разом з онуком паралельними світами і космосом, часто в таємниці від решти сім\'ї. Рік обізнаний в особливостях численних місць і навіть нажив собі ворогів в інших світах.'}/>
      <Character name={'Morty'} images={'https://upload.wikimedia.org/wikipedia/uk/thumb/c/c7/%D0%9C%D0%BE%D1%80%D1%82%D1%96.jpg/330px-%D0%9C%D0%BE%D1%80%D1%82%D1%96.jpg'} paragraph={'Морті — 14-річний онук Ріка. На початку добродушний і нерішучий, він легко піддається впливу Ріка, який завжди вплутує його у різноманітні небезпечні ситуації та використовує під приводом «дуже важливого завдання». Морті часто панікує, зустрівшись з небезпеками, проте кілька разів і рятував Ріка.'}/>




    </div>
  );
}

export default App;
