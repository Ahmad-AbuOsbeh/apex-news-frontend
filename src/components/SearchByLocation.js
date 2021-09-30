import axios from 'axios';
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Row, Container, CardColumns, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../css/SearchByLocation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

class SearchByLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: '',
      imgId: '',
      showFlags: true,
      showNews: false,
      showButton: false,
      REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    };
  }

  getLocationNews = async (event) => {
    event.preventDefault();

    await this.setState({
      imgId: event.target.id,
    });
    console.log(this.state.imgId);

    // https://gnews.io/api/v4/top-headlines?token=d8903f3430caadb55e96b9f0ac6f9696&topic=sports&lang=en
    // let locationUrl = `https://newsapi.org/v2/top-headlines?country=${this.state.imgId}&apiKey=${this.state.REACT_APP_API_KEY}`;
    let locationUrl = `https://gnews.io/api/v4/top-headlines?country=${this.state.imgId}&token=${this.state.REACT_APP_API_KEY}`;

    let newsResult = await axios.get(locationUrl);

    await this.setState({
      cityData: newsResult.data.articles,
      showFlags: false,
      showNews: true,
      showButton: true,
    });
    console.log(this.state.cityData);
  };

  goBackToFlags = () => {
    this.setState({
      showFlags: true,
      showNews: false,
      showButton: false,
    });
  };

  render() {
    return (
      <div style={{ marginTop: '25px' }}>
        <Jumbotron className='jumbo'>
          <h1>News by Country</h1>
          <p>In this section you can view the latest news headlines of any country of your choice.</p>
        </Jumbotron>
        {this.state.showFlags && (
          <Container className='flag container'>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Argentina' src='https://newsapi.org/images/flags/ar.svg' id='ar' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Argentina</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Greece' src='https://newsapi.org/images/flags/gr.svg' id='gr' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Greece</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Austria' src='https://newsapi.org/images/flags/at.svg' id='at' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Austria</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Australia' src='https://newsapi.org/images/flags/au.svg' id='au' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Australia</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Bulgaria' src='https://newsapi.org/images/flags/bg.svg' id='bg' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Bulgaria</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Brazil' src='https://newsapi.org/images/flags/br.svg' id='br' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Brazil</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Canada' src='https://newsapi.org/images/flags/ca.svg' id='ca' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Canada</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Switzerland' src='https://newsapi.org/images/flags/ch.svg' id='ch' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Switzerland</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='China' src='https://newsapi.org/images/flags/cn.svg' id='cn' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>China</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Colombia' src='https://newsapi.org/images/flags/co.svg' id='co' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Colombia</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Cuba' src='https://newsapi.org/images/flags/cu.svg' id='cu' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Cuba</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Belgium' src='https://newsapi.org/images/flags/be.svg' id='be' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Belgium</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Czech Republic' src='https://newsapi.org/images/flags/cz.svg' id='cz' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Czech Republic</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Germany' src='https://newsapi.org/images/flags/de.svg' id='de' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Germany</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Greece' src='https://newsapi.org/images/flags/gr.svg' id='gr' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Greece</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='UAE' src='https://newsapi.org/images/flags/ae.svg' id='ae' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>UAE</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Egypt' src='https://newsapi.org/images/flags/eg.svg' id='eg' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Egypt</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='France' src='https://newsapi.org/images/flags/fr.svg' id='fr' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>France</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='UK' src='https://newsapi.org/images/flags/gb.svg' id='gb' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>UK</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Hong Kong' src='https://newsapi.org/images/flags/hk.svg' id='hk' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Hong Kong</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Hungary' src='https://newsapi.org/images/flags/hu.svg' id='hu' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Hungary</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Indonesia' src='https://newsapi.org/images/flags/id.svg' id='id' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Indonesia</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Ireland' src='https://newsapi.org/images/flags/ie.svg' id='ie' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Ireland</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='India' src='https://newsapi.org/images/flags/in.svg' id='in' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>India</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Italy' src='https://newsapi.org/images/flags/it.svg' id='it' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Italy</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Japan' src='https://newsapi.org/images/flags/jp.svg' id='jp' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Japan</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='South Korea' src='https://newsapi.org/images/flags/kr.svg' id='kr' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>South Korea</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Lithuania' src='https://newsapi.org/images/flags/lt.svg' id='lt' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Lithuania</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Latvia' src='https://newsapi.org/images/flags/lv.svg' id='lv' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Latvia</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Morocco' src='https://newsapi.org/images/flags/ma.svg' id='ma' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Morocco</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Mexico' src='https://newsapi.org/images/flags/mx.svg' id='mx' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Mexico</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Malaysia' src='https://newsapi.org/images/flags/my.svg' id='my' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Malaysia</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Nigeria' src='https://newsapi.org/images/flags/ng.svg' id='ng' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Nigeria</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Netherlands' src='https://newsapi.org/images/flags/nl.svg' id='nl' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Netherlands</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Norway' src='https://newsapi.org/images/flags/no.svg' id='no' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Norway</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='New Zealand' src='https://newsapi.org/images/flags/nz.svg' id='nz' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>New Zealand</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Philippines' src='https://newsapi.org/images/flags/ph.svg' id='ph' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Philippines</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Poland' src='https://newsapi.org/images/flags/pl.svg' id='pl' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Poland</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Portugal' src='https://newsapi.org/images/flags/pt.svg' id='pt' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Portugal</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Romania' src='https://newsapi.org/images/flags/ro.svg' id='ro' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Romania</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Serbia' src='https://newsapi.org/images/flags/rs.svg' id='rs' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Serbia</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Russia' src='https://newsapi.org/images/flags/ru.svg' id='ru' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Russia</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='KSA' src='https://newsapi.org/images/flags/sa.svg' id='sa' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>KSA</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Sweden' src='https://newsapi.org/images/flags/se.svg' id='se' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Sweden</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Singapore' src='https://newsapi.org/images/flags/sg.svg' id='sg' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Singapore</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Slovenia' src='https://newsapi.org/images/flags/si.svg' id='si' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Slovenia</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Slovakia' src='https://newsapi.org/images/flags/sk.svg' id='sk' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Slovakia</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Thailand' src='https://newsapi.org/images/flags/th.svg' id='th' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Thailand</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Turkey' src='https://newsapi.org/images/flags/tr.svg' id='tr' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Turkey</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Taiwan' src='https://newsapi.org/images/flags/tw.svg' id='tw' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Taiwan</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Ukraine' src='https://newsapi.org/images/flags/ua.svg' id='ua' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Ukraine</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='USA' src='https://newsapi.org/images/flags/us.svg' id='us' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>USA</h1>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='Venuzuela' src='https://newsapi.org/images/flags/ve.svg' id='ve' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>Venuzuela</h1>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <div className='img__wrap'>
                  <Image className='img__img' alt='South Africa' src='https://newsapi.org/images/flags/za.svg' id='za' onClick={this.getLocationNews} rounded />
                  <h1 className='img__description'>South Africa</h1>
                </div>
              </Col>
            </Row>
            <br></br>
          </Container>
        )}
        {this.state.showNews && (
          <div>
            <Button variant='outline-dark' className='flagButton' onClick={this.goBackToFlags}>
              Back to Countries
            </Button>

            {this.state.cityData.map((item, idx) => {
              return (
                // <div key={idx}>
                //     <Card className="text-center">
                //         <Card.Header>{item.source.name}</Card.Header>
                //         <Card.Body>
                //             <Card.Img variant="top" src={item.urlToImage} style={{ width: '20rem', height: '20rem', margin: 'auto' }} />
                //             <Card.Title>{item.title}</Card.Title>
                //             <Card.Text style={{ overflow: 'auto', height: '3rem' }}>
                //                 {item.description}
                //             </Card.Text>
                //             <a href={item.url}><Button >Go to Article</Button></a>
                //         </Card.Body>
                //         <Card.Footer className="text-muted">Publish Date: {item.publishedAt}</Card.Footer>
                //     </Card>
                // </div>

                // <div className="container1" >
                //     <div className="card1" key={idx}>
                //         <figure className="card__thumb">
                //             <img src={item.urlToImage} className="card__image" />
                //             <figcaption className="card__caption">
                //                 <h2 className="card__title">{item.title}</h2>
                //                 <p className="card__snippet">{item.description}</p>
                //                 <a href={item.url} className="card__button">Read more</a>
                //             </figcaption>
                //         </figure>
                //     </div>
                // </div>

                <div className='container mt-5' key={idx}>
                  <div className='row'>
                    <div className='col-12'>
                      <article className='blog-card1'>
                        <div className='blog-card1__background'>
                          <div className='card__background--wrapper'>
                            <div className='card__background--main' style={{ backgroundImage: `url(${item.image})` }}>
                              <div className='card__background--layer'></div>
                            </div>
                          </div>
                        </div>
                        <div className='blog-card1__head'>
                          <span className='date__box'>
                            <span className='date__day'>{item.publishedAt.substring(8, 10)}</span>
                            <span className='date__month'>{item.publishedAt.substring(5, 7)}</span>
                          </span>
                        </div>
                        <div className='blog-card1__info'>
                          <h5>{item.title}</h5>
                          <p>
                            <a className='icon-link mr-3'>✒️ {item.source.name}</a>
                          </p>
                          <p>{item.description}</p>
                          <a href={item.url} className='btn1 btn1--with-icon'>
                            <i className='btn1-icon fa fa-long-arrow-right'></i>READ MORE
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>

                // <section className="detail-page">
                //     <div className="container mt-5">

                //     </div>
                // </section>
              );
            })}
          </div>
        )}

        {/* <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap" rel="stylesheet"> */}
      </div>
    );
  }
}

export default SearchByLocation;
