import React from 'react';

// props.fav == {fav}
function Food({ name, img }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={img} alt='food' />
    </div>
  );
}

const foodILke = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'http://img.danawa.com/prod_img/500000/830/590/img/5590830_1.jpg?shrink=360:360&_v=20210111143615',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg',
    rating: 3.5
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'http://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg',
    rating: 5
  },
  {
    id: 4,
    name: 'Doncasu',
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDNfMTU2/MDAxNDkzODIyODY4MDEz.KHxOf0Kw6m7CSQlJkFPRUts0UQpTjwjs7ab55KzctM0g.PNEt5UbtICqzi1VDmDPMUhmR5PDKTvesg3uU6CSyFPEg.JPEG.stveiry/DSCN7592.JPG?type=w800',
    rating: 4
  }
];

function App() {
  return (
    <div>
      <h1>hello</h1>
      {foodILke.map(dish => {
        return <Food key={dish.id} name={dish.name} img={dish.image} />;
      })}
    </div>
  );
}

export default App;
