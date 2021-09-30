import React, { Component } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import { CardColumns, Button, Row, CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'react-calendar/dist/Calendar.css';
import '../css/Bydate.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Bydate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      name: '',
      date: '',
      //   pageNum:1,
      showDate: false,
      showtodays: false,
      REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    };
    console.log('todays date', this.state.date);
  }
  onChange = async (e) => {
    e = e.toLocaleDateString().substring(0, 10);
    await this.setState({
      date: e,
    });
    this.getDate();
  };
  getDate = async () => {
    try {
      // https://gnews.io/api/v4/top-headlines?token=d8903f3430caadb55e96b9f0ac6f9696&topic=sports&lang=en
      // const dateNews = await axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${this.state.REACT_APP_API_KEY}&language=en&to=${this.state.date}`)
      const dateNews = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${this.state.REACT_APP_API_KEY}&lang=en&from=${this.state.date}&to=${this.state.date}`);
      console.log('dateNews.data.articles', dateNews.data.articles);
      // const cats = await axios.get(`${this.state.server}/cat?name=${this.state.name}`);
      this.setState({
        allData: dateNews.data.articles,
        showDate: true,
        //   pageNum:this.state.pageNum+1
        //   allData:dateNews.data.articles
      });
      console.log(this.state.date);
    } catch (error) {
      this.setState({
        allData: [],
        showDate: false,
        //   pageNum:this.state.pageNum+1
        //   allData:dateNews.data.articles
      });
    }
    console.log('from get date');
  };
  //First render
  componentDidMount = () => {
    this.setState({
      date: new Date().toLocaleDateString().substring(0, 10),
    });
    this.getDate();
  };
  render() {
    return (
      <>
        <Jumbotron className='jumbo'>
          <h1>News by Date</h1>
          <p>In this section you can view the latest news headlines on any date of your choice.</p>
        </Jumbotron>

        <Calendar className={['calender']} onChange={this.onChange} tileclassName='content' calendarType='Arabic' minDate={new Date('05-10-2021')} maxDate={new Date()} />
        <br></br>
        {/* <CardColumns> */}

        {console.log(this.state.allData)}
        {this.state.showDate &&
          this.state.allData.map((item, idx) => {
            return (
              <>
                {idx % 2 == 0 && (
                  <div key={idx}>
                    {/* <Card bg="secondary" text="white" style={{  maxWidth: '30rem',margin: 'auto' , height:'30rem',display:'inline-flex'}}>
                                        <Card.Img variant="top" src={item.urlToImage} style={{ width: '80%', height: '16rem'}} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text style={{ overflow: 'auto', height: '5rem' }}>
                                                {item.description}
                                            </Card.Text>
                                            <a href={item.url}><Button variant="primary" >Go to Main Article</Button></a>
                                        </Card.Body>
                                    </Card> */}

                    <div className='content-wrapper'>
                      <div className='news-card'>
                        <a href={item.url} className='news-card__card-link'></a>
                        <img src={item.image} alt='' className='news-card__image' />
                        <div className='news-card__text-wrapper'>
                          <h2 className='news-card__title'>{item.title}</h2>
                          {/* <div className="news-card__post-date">{item.publishedAt}</div> */}
                          <div className='news-card__details-wrapper'>
                            <p className='news-card__excerpt'>{item.description}&hellip;</p>
                            <a href={item.url} className='news-card__read-more' id='reeeadmore'>
                              Read more{' '}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Second Title that is Quite Long</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Forth Title that is Quite Long</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet!</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Fifth Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing 6<sup>th</sup> Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div> */}
                    </div>
                  </div>
                )}{' '}
              </>
            );
          })}

        {/* </CardColumns> */}
      </>
    );
  }
}
export default Bydate;
