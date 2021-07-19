import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
/*
// props.fav == {fav}
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h3>{rating}/5.0</h3>
      <img src={picture} alt='food' />
    </div>
  );
}

// 데이터 타입 체크
// isRequired가 없으면 [해당 데이터 타입] or undefined
// only propTypes 이름으로만 가능
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

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
        return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
      })}
    </div>
  );
}
*/

/*
// state를 사용하기 위한 class component
// 함수 작성 시, ()를 붙이면 프로그램 실행 시 즉시 실행, 안붙이면 필요할 때 실행
// 함수의 argument는 {}로 전달
// constructor() --> render() --> componentDidMount()
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  state = {
    count: 0
  };

  // current == this.state
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log('component rendering finished');
  }

  componentDidUpdate() {
    console.log('I just updated');
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}
*/

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    //    setTimeout(()=> {
    //      this.setState({isLoading : false})
    //    }, 6000)
    this.getMovies();
  }

  // async와 await는 한쌍
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
  };

  render() {
    const { isLoading, movies } = this.state;

    // key를 꼭 주기
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>Loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
export default Home;
