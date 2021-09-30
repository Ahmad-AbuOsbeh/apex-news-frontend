import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, CardGroup } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

import axios from 'axios';
import '../css/HomeCss.css';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categ1: [],
      categ2: [],
      categ3: [],
      categ4: [],
      publishedDateSports: '',
      publishedDatetechnology: '',
      publishedDateentertainment: '',
      publishedDatehealth: '',
      REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    };
  }

  async componentDidMount() {
    //send req to newsAPI to get sample of sports news
    //   https://gnews.io/api/v4/top-headlines?token=d8903f3430caadb55e96b9f0ac6f9696&topic=sports&lang=en
    //  let categ1 = await axios.get(`https://newsapi.org/v2/everything?qInTitle=sports&sortBy=popularity&apiKey=${this.state.REACT_APP_API_KEY}&language=en`);
    let categ1 = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${this.state.REACT_APP_API_KEY}&topic=sports&lang=en`);
    await this.setState({
      //  categ1 : categ1.data.articles.slice(1,4),
      categ1: categ1.data.articles[1],
      publishedDateSports: categ1.data.articles[1].publishedAt.substring(0, 10),
      //  this.state.categ1.publishedAt.substring(0, 10),
    });
    console.log('this.state.categ1', this.state.categ1);

    //send req to newsAPI to get sample of technology news
    // let categ2 = await axios.get(`https://newsapi.org/v2/everything?qInTitle=technology&sortBy=popularity&apiKey=${this.state.REACT_APP_API_KEY}&language=en`);
    let categ2 = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${this.state.REACT_APP_API_KEY}&topic=technology&lang=en`);
    await this.setState({
      //  categ2 : categ2.data.articles.slice(1,4),
      categ2: categ2.data.articles[0],
      publishedDatetechnology: categ2.data.articles[0].publishedAt.substring(0, 10),
    });

    // send req to newsAPI to get sample of entertainment news
    // let categ3 = await axios.get(`https://newsapi.org/v2/everything?qInTitle=entertainment&sortBy=popularity&apiKey=${this.state.REACT_APP_API_KEY}&language=en`);
    let categ3 = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${this.state.REACT_APP_API_KEY}&topic=entertainment&lang=en`);
    await this.setState({
      //  categ3 : categ3.data.articles.slice(1,4),
      categ3: categ3.data.articles[0],
      publishedDateentertainment: categ3.data.articles[0].publishedAt.substring(0, 10),
    });

    // send req to newsAPI to get sample of health news
    // let categ4 = await axios.get(`https://newsapi.org/v2/top-headlines?category=health&apiKey=${this.state.REACT_APP_API_KEY}&language=en`);
    // let categ4 = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${this.state.REACT_APP_API_KEY}&topic=sports&lang=en`);
    // await this.setState({
    //   //  categ3 : categ3.data.articles.slice(1,4),
    //   categ4: categ4.data.articles[0],
    //   publishedDatehealth: categ4.data.articles[0].publishedAt.substring(0, 10),
    // });
  }

  render() {
    return (
      <>
        {/* render of slideshow */}
        <br></br>

        <ul class='slideshow'>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>

        {/* render for the cards */}
        <div className='dark'>
          <main className='container py-4'>
            <div className='h1 text-center' id='pageHeaderTitle'>
              Sports
            </div>

            <article className='postcard dark red'>
              <a className='postcard__img_link' href={this.state.categ1.url}>
                <img className='postcard__img' src={this.state.categ1.image} alt=' Title' />
              </a>
              <div className='postcard__text'>
                <h1 className='postcard__title red'>
                  <a href={this.state.categ1.url}>{this.state.categ1.title}</a>
                </h1>
                <div className='postcard__subtitle small'>
                  <time datetime='2020-05-25 12:00:00'>
                    <i className='fa fa-calendar-alt mr-2'></i>
                    {this.state.publishedDateSports}
                  </time>
                </div>
                <div className='postcard__bar'></div>
                <div className='postcard__preview-txt'>{this.state.categ1.description}</div>
                <ul className='postcard__tagbox'>
                  {/* <li className="tag__item"><i className="fa fa-clock mr-2"></i>Author: {this.state.categ1.author}</li> */}
                  <li className='tag__item play red'>
                    <a href={this.state.categ1.url}>Go to Article</a>
                  </li>
                  <li className='tag__item play red'>Show more</li>
                </ul>
              </div>
            </article>
            <br></br>
            <div className='h1 text-center' id='pageHeaderTitle'>
              entertainment
            </div>
            <article className='postcard dark red'>
              <a className='postcard__img_link' href={this.state.categ3.url}>
                <img className='postcard__img' src={this.state.categ3.image} alt=' Title' />
              </a>
              <div className='postcard__text'>
                <h1 className='postcard__title red'>
                  <a href={this.state.categ3.url}>{this.state.categ3.title}</a>
                </h1>
                <div className='postcard__subtitle small'>
                  <time datetime='2020-05-25 12:00:00'>
                    <i className='fa fa-calendar-alt mr-2'></i>
                    {this.state.publishedDateentertainment}
                  </time>
                </div>
                <div className='postcard__bar'></div>
                <div className='postcard__preview-txt'>{this.state.categ3.description}</div>
                <ul className='postcard__tagbox'>
                  {/* <li className="tag__item"><i className="fa fa-clock mr-2"></i>55 mins.</li> */}
                  <li className='tag__item play red'>
                    <a href={this.state.categ3.url}>
                      <i className='fa fa-readme'></i>Go to Article
                    </a>
                  </li>
                  <li className='tag__item play red'>
                    <i className='fa fa-readme'></i>Show more
                  </li>
                </ul>
              </div>
            </article>
            <br></br>
            <div className='h1 text-center' id='pageHeaderTitle'>
              Technology
            </div>
            <article className='postcard dark red'>
              <a className='postcard__img_link' href={this.state.categ2.url}>
                <img className='postcard__img' src={this.state.categ2.image} alt=' Title' />
              </a>
              <div className='postcard__text'>
                <h1 className='postcard__title red'>
                  <a href={this.state.categ2.url}>{this.state.categ2.title}</a>
                </h1>
                <div className='postcard__subtitle small'>
                  <time datetime='2020-05-25 12:00:00'>
                    <i className='fa fa-calendar-alt mr-2'></i>
                    {this.state.publishedDatetechnology}
                  </time>
                </div>
                <div className='postcard__bar'></div>
                <div className='postcard__preview-txt'>{this.state.categ2.description}</div>
                <ul className='postcard__tagbox'>
                  {/* <li className="tag__item"><i className="fa fa-clock mr-2"></i>hello</li> */}
                  <li className='tag__item play red'>
                    <a href={this.state.categ2.url}>Go to Article</a>
                  </li>
                  <li className='tag__item play red'>Show more</li>
                </ul>
              </div>
            </article>
            <br></br>
            {/* <div className='h1 text-center' id='pageHeaderTitle'>
              Business
            </div>

            <article className='postcard dark red'>
              <a className='postcard__img_link' href={this.state.categ4.url}>
                <img className='postcard__img' src={this.state.categ4.image} alt=' Title' />
              </a>
              <div className='postcard__text'>
                <h1 className='postcard__title red'>
                  <a href={this.state.categ4.url}>{this.state.categ4.title}</a>
                </h1>
                <div className='postcard__subtitle small'>
                  <time datetime='2020-05-25 12:00:00'>
                    <i className='fa fa-calendar-alt mr-2'></i>
                    {this.state.publishedDatehealth}
                  </time>
                </div>
                <div className='postcard__bar'></div>
                <div className='postcard__preview-txt'>{this.state.categ4.description}</div>
                <ul className='postcard__tagbox'> */}
            {/* <li className="tag__item"><i className="fa fa-clock mr-2"></i>Author: {this.state.categ4.author}</li> */}
            {/* <li className='tag__item play red'>
                    <a href={this.state.categ4.url}>Go to Article</a>
                  </li>
                  <li className='tag__item play red'>Show more</li>
                </ul>
              </div>
            </article> */}
          </main>
        </div>

        {/* <div className="light">
  
	<main className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">My Cards Dark</div>

		<article className="postcard light blue">
			<a className="postcard__img_link" href="https://www.kooora.com/">
				<img className="postcard__img" src="https://picsum.photos/1000/1000" alt=" Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="https://www.kooora.com/">Podcast Title</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fa fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item">Podcast</li>
					<li className="tag__item"><i className="fa fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play blue">
						<a href="https://www.kooora.com/">Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light red">
			<a className="postcard__img_link" href="https://www.kooora.com/">
				<img className="postcard__img" src="https://picsum.photos/501/500" alt=" Title" />	
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title red"><a href="https://www.kooora.com/">Podcast Title</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fa fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item">Podcast</li>
					<li className="tag__item"><i className="fa fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play red">
						<a href="https://www.kooora.com/">Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light green">
			<a className="postcard__img_link" href="https://www.kooora.com/">
				<img className="postcard__img" src="https://picsum.photos/500/501" alt=" Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title green"><a href="https://www.kooora.com/">Podcast Title</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fa fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item">Podcast</li>
					<li className="tag__item"><i className="fa fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play green">
						<a href="https://www.kooora.com/">Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light yellow">
			<a className="postcard__img_link" href="https://www.kooora.com/">
				<img className="postcard__img" src="https://picsum.photos/501/501" alt=" Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title yellow"><a href="https://www.kooora.com/">Podcast Title</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fa fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item">Podcast</li>
					<li className="tag__item"><i className="fa fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play yellow">
						<a href="https://www.kooora.com/">Play Episode</a>
					</li>
				</ul>
			</div>
		</article> */}
        {/* </main> */}
        {/* </div> */}
        {/* <h1>Sports :</h1>
{this.state.categ1.map(item=>{
  return(
    <>
<CardGroup>

  <Card>
      <Card.Title>{item.title}</Card.Title>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Text>
        {item.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small classNameName="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
 
  
</CardGroup>

    </>
  )
})}

<h1>Technology :</h1>
{this.state.categ2.map(item=>{
  return(
    <>
<CardGroup>
  <Card>
      <Card.Title>{item.title}</Card.Title>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Text>
        {item.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small classNameName="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
 
  
</CardGroup>

    </>
  )
})}

<h1>Entertainment :</h1>
{this.state.categ3.map(item=>{
  return(
    <>
<CardGroup>
  <Card>
      <Card.Title>{item.title}</Card.Title>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Text>
        {item.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small classNameName="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
 
  
</CardGroup>

    </>
  )
})} */}
      </>
    );
  }
}

export default Home;
