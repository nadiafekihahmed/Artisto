// import React from 'react';
// import './Cards.css';
// import CardItem from './CardItem';

// function Cards() {
//   return (
//     <div className='cards'>
//       <h1>Unlock the Beauty of Art in Your Collection</h1>
//       <div className='cards__container'>
//         <div className='cards__wrapper'>
//           <ul className='cards__items'>
//             <CardItem
//               src='/assets/Images/frida.jpg'
//               text='Frida Kahlo'
              
//               path='/services'
//             />
//             <CardItem
//               src='/assets/Images/van.jpg'
//               text='Vincent Van Gogh'
              
//               path='/services'
//             />
//             <CardItem
//               src='/assets/Images/leo.jpg'
//               text='Léonard de Vinci'
              
//               path='/services'
//             />
//           </ul>
//           <ul className='cards__items'>
//             <CardItem
//               src='/assets/Images/dali.jpg'
//               text='Salvador Dalí'
              
//               path='/services'
//             />

//             <CardItem
//               src='/assets/Images/paul.jpg'
//               text='Paul Gauguin'
//               label='Mystery'
//               path='/services'
//             />
//              <CardItem
//               src='/assets/Images/edward.jpg'
//               text='Edvard Munch'
              
//               path='/services'
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;



import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Unlock the Beauty of Art in Your Collection</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <li className='cards__item'>
              <Link className='cards__item__link' to="/artist/frida-kahlo">
                <div className='cards__item__pic-wrap'>
                  <img src='/assets/Images/frida.jpg' alt='Frida Kahlo' className='cards__item__img' style={{ objectPosition: 'top' }} />
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'>Frida Kahlo</h5>
                </div>
              </Link>
            </li>
            <li className='cards__item'>
              <Link className='cards__item__link' to="/artist/vincent-van-gogh">
                <div className='cards__item__pic-wrap'>
                  <img src='/assets/Images/van.jpg' alt='Vincent Van Gogh' className='cards__item__img' />
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'>Vincent Van Gogh</h5>
                </div>
              </Link>
            </li>
            <li className='cards__item'>
              <Link className='cards__item__link' to="/artist/leo-da-vinci">
                <div className='cards__item__pic-wrap'>
                  <img src='/assets/Images/leo.jpg' alt='Léonard de Vinci' className='cards__item__img' />
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'>Léonard de Vinci</h5>
                </div>
              </Link>
            </li>
          </ul>
          <ul className='cards__items'>
            <li className='cards__item'>
              <Link className='cards__item__link' to="/artist/salvador-dali">
                <div className='cards__item__pic-wrap'>
                  <img src='/assets/Images/dali.jpg' alt='Salvador Dalí' className='cards__item__img' />
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'>Salvador Dalí</h5>
                </div>
              </Link>
            </li>
            <li className='cards__item'>
              <Link className='cards__item__link' to="/artist/paul-gauguin">
                <div className='cards__item__pic-wrap'>
                  <img src='/assets/Images/paul.jpg' alt='Paul Gauguin' className='cards__item__img' />
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'>Paul Gauguin</h5>
                </div>
              </Link>
            </li>
            <li className='cards__item'>
              <Link className='cards__item__link' to="/artist/edvard-munch">
                <div className='cards__item__pic-wrap'>
                  <img src='/assets/Images/edward.jpg' alt='Edvard Munch' className='cards__item__img' />
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'>Edvard Munch</h5>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
