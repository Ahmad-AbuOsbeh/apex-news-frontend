import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import '../css/MyNews.css';
import 'font-awesome/css/font-awesome.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import 'https://kit.fontawesome.com/289e7592fc.js';
// import 'fortawesome/free-solid-svg-icons.css';
// import ('https://fonts.googleapis.com/css?family=Roboto')
<script src='https://kit.fontawesome.com/289e7592fc.js' crossorigin='anonymous'></script>;

class MyNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myFavCat: [],
      REACT_APP_SERVER: process.env.REACT_APP_SERVER,
      sports: false,
      business: false,
      technology: false,
      entertainment: false,
      health: false,
      science: false,
      myFavCatRes: [],
      sportsResp: [],
      // Add to watch later states
      name: '',
      urlToImage: '',
      title: '',
      description: '',
      url: '',
      publishedAt: '',
      REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    };
    // this.updateSport(event);
  }

  async componentDidMount() {
    console.log('this.state.myFavCat', this.state.myFavCat);
    let dataAfterReload = await axios.get(`${this.state.REACT_APP_SERVER}/reloadData`, { params: { email: this.props.auth0.user.email } });
    console.log('dataAfterReload', dataAfterReload.data);
    this.setState({
      myFavCat: dataAfterReload.data[0],
      sports: dataAfterReload.data[0].sports,
      business: dataAfterReload.data[0].business,
      technology: dataAfterReload.data[0].technology,
      entertainment: dataAfterReload.data[0].entertainment,
      health: dataAfterReload.data[0].health,
      science: dataAfterReload.data[0].science,
    });
    let allRespArr = [];
    //define requests to send requests to 3rd party API of favourite category news of user
    let objectToArr = Object.entries(this.state.myFavCat);
    console.log('objectToArr', objectToArr);

    objectToArr.forEach(async (item, index) => {
      // console.log('item[1]',item[1]);
      // console.log('hello from function forEach');
      if (!(item[0] == '_id')) {
        // console.log('hello from if 1');
        if (item[1] == true) {
          // https://gnews.io/api/v4/top-headlines?token=d8903f3430caadb55e96b9f0ac6f9696&topic=sports&lang=en
          // let urlReq = `https://newsapi.org/v2/top-headlines?category=${item[0]}&apiKey=${this.state.REACT_APP_API_KEY}&language=en`;
          let urlReq = `https://gnews.io/api/v4/top-headlines?topic=${item[0]}&token=${this.state.REACT_APP_API_KEY}&lang=en`;
          let catResp = await axios.get(urlReq);

          allRespArr.push({ name: item[0], data: catResp.data.articles });

          this.setState({
            myFavCatRes: allRespArr,
          });
        }
        console.log('allRespArr', this.state.myFavCatRes);
      }

      //  item.map(item=>{
      //   console.log('item',item);
      //  })
    });
  }

  //define onsubmit function
  updateFav = async (event) => {
    event.preventDefault();
    // console.log('this.state.myFavCat before',this.state.myFavCat);
    console.log('event.target.sports.checked before on submit', event.target.sports.checked);

    console.log('this.state.sports before on submit', this.state.sports);
    await this.setState({
      sports: event.target.sports.checked,
      business: event.target.business.checked,
      technology: event.target.technology.checked,
      entertainment: event.target.entertainment.checked,
      health: event.target.health.checked,
      science: event.target.science.checked,
    });
    // console.log('event.target.checked before on submit',event.target.checked);

    console.log('this.state.sports after on submit', this.state.sports);
    let allRespArr = [];

    //send req to backend
    let favCatResp = await axios.get(`${this.state.REACT_APP_SERVER}/favCat`, {
      params: {
        email: this.props.auth0.user.email,
        sports: this.state.sports,
        business: this.state.business,
        technology: this.state.technology,
        entertainment: this.state.entertainment,
        health: this.state.health,
        science: this.state.science,
      },
    });
    await this.setState({
      myFavCat: favCatResp.data[0],
    });
    // console.log('this.state.myFavCat after',this.state.myFavCat);
    //define requests to send requests to 3rd party API of favourite category news of user
    let objectToArr = Object.entries(this.state.myFavCat);
    console.log('objectToArr', objectToArr);

    objectToArr.forEach(async (item, index) => {
      // console.log('item[1]',item[1]);
      // console.log('hello from function forEach');
      if (!(item[0] == '_id')) {
        // console.log('hello from if 1');
        if (item[1] == true) {
          // let urlReq = `https://newsapi.org/v2/top-headlines?category=${item[0]}&apiKey=${this.state.REACT_APP_API_KEY}&language=en`;
          let urlReq = `https://gnews.io/api/v4/top-headlines?topic=${item[0]}&token=${this.state.REACT_APP_API_KEY}&lang=en`;
          let catResp = await axios.get(urlReq);

          allRespArr.push({ name: item[0], data: catResp.data.articles });

          this.setState({
            myFavCatRes: allRespArr,
          });
        }
        console.log('allRespArr', this.state.myFavCatRes);
      }

      //  item.map(item=>{
      //   console.log('item',item);
      //  })
    });
    // console.log('this.state.scienceRes',this.state.scienceRes);
    // console.log('this.state.sportsRes',this.state.sportsRes);
    await this.setState({
      sports: this.state.myFavCat.sports,
    });

    console.log('this.state.sports from did mount', this.state.sports);
  };
  addArticle = async (idx, categName) => {
    // console.log('this.state.myFavCatRes.articles[idx].data.source.name',this.state.myFavCatRes.articles[idx].data.source.name);
    let chosenArticleData;
    console.log('idx', idx);
    console.log('this.state.myFavCatRes', this.state.myFavCatRes);
    this.state.myFavCatRes.forEach((item, index) => {
      if (item.name == categName) {
        item.data.forEach(async (value, index) => {
          console.log('item.source.name', value.source.name);

          if (idx == index) {
            chosenArticleData = {
              email: this.props.auth0.user.email,
              index: idx,
              categName: categName,
              name: value.source.name,
              urlToImage: value.image,
              title: value.title,
              description: value.description,
              url: value.url,
              publishedAt: value.publishedAt,
            };
            console.log('chosenArticleData', chosenArticleData);
          }
        });
      }
      // console.log('this.state.name',this.state.name);
    });
    console.log('this.state.name', this.state.name);
    //   const chosenArticleData={
    //    name: this.state.name,
    //    image: this.state.image,
    //    title: this.state.title,
    //    description: this.state.description,
    //    url: this.state.url,
    //    publishedAt: this.state.publishedAt
    //  }

    let ReqToDBReadLater = await axios.post(`${this.state.REACT_APP_SERVER}/addArticle`, chosenArticleData);
    console.log('ReqToDBReadLater', ReqToDBReadLater);
    this.props.passingReadLaterData(ReqToDBReadLater.data);
    // this.setState({

    // })
  };

  //create onChange function to update the status
  updateSport = async (event) => {
    console.log('event.target.checked', event.target.checked);
    await this.setState({
      sports: event.target.checked,
      // sports:
    });
    console.log('this.state.sports', this.state.sports);
  };
  //create onChange function to update the status
  updateBusiness = async (event) => {
    await this.setState({
      business: event.target.checked,
      // sports:
    });
  };
  //create onChange function to update the status
  updateTechnology = async (event) => {
    await this.setState({
      technology: event.target.checked,
      // sports:
    });
  };
  //create onChange function to update the status
  updateEntertainment = async (event) => {
    await this.setState({
      entertainment: event.target.checked,
    });
  };
  //create onChange function to update the status
  updateHealth = async (event) => {
    await this.setState({
      health: event.target.checked,
    });
  };
  //create onChange function to update the status
  updateScience = async (event) => {
    await this.setState({
      science: event.target.checked,
    });
  };

  render() {
    return (
      <>
        <Jumbotron className='jumboMyNews'>
          <h1>My News</h1>
          <p>Please select your favourite news categories</p>
        </Jumbotron>

        <Form onSubmit={this.updateFav}>
          <div class='containermyNews'>
            <ul class='ks-cboxtags'>
              <li className='checkboxesMyNews'>
                <input type='checkbox' id='checkboxOne' value='Rainbow Dash' name='sports' checked={this.state.sports} onChange={this.updateSport} />
                <label for='checkboxOne'>Sports</label>
              </li>

              <li className='checkboxesMyNews'>
                <input type='checkbox' id='checkboxTwo' value='Cotton Candy' name='business' checked={this.state.business} onChange={this.updateBusiness} />
                <label for='checkboxTwo'>Business</label>
              </li>

              <li className='checkboxesMyNews'>
                <input type='checkbox' id='checkboxThree' value='Rarity' name='technology' checked={this.state.technology} onChange={this.updateTechnology} />
                <label for='checkboxThree'>Technology</label>
              </li>

              <li className='checkboxesMyNews'>
                <input type='checkbox' id='checkboxFour' value='Moondancer' name='entertainment' checked={this.state.entertainment} onChange={this.updateEntertainment} />
                <label for='checkboxFour'>Entertainment</label>
              </li>

              <li className='checkboxesMyNews'>
                <input type='checkbox' id='checkboxFive' value='Surprise' name='health' checked={this.state.health} onChange={this.updateHealth} />
                <label for='checkboxFive'>Health</label>
              </li>

              <li className='checkboxesMyNews'>
                <input type='checkbox' id='checkboxSix' value='Twilight Sparkle' name='science' checked={this.state.science} onChange={this.updateScience} />
                <label for='checkboxSix'>Science</label>
              </li>
            </ul>
          </div>
          {/* 
          {
            <div key={`inline-checkbox`} className="mb-3">
              <Form.Check
                inline
                label="Sports"
                name="sports"
                type='checkbox'
                id={`inline-checkbox-1`}
                checked={this.state.sports}
                onChange={this.updateSport}


              />

              <Form.Check
                inline
                label="business"
                name="business"
                type='checkbox'
                id={`inline-checkbox-2`}
                checked={this.state.business}
                onChange={this.updateBusiness}
              />
              <Form.Check
                inline
                label="Technology"
                name="technology"
                type='checkbox'
                id={`inline-checkbox-2`}
                checked={this.state.technology}
                onChange={this.updateTechnology}
              />
              <Form.Check
                inline
                label="entertainment"
                name="entertainment"
                type='checkbox'
                id={`inline-checkbox-2`}
                checked={this.state.entertainment}
                onChange={this.updateentertainment}
              />
              <Form.Check
                inline
                label="Health"
                name="health"
                type='checkbox'
                id={`inline-checkbox-2`}
                checked={this.state.health}
                onChange={this.updateHealth}
              />
              <Form.Check
                inline
                label="Science"
                name="science"
                type='checkbox'
                id={`inline-checkbox-2`}
                checked={this.state.science}
                onChange={this.updateScience}
              />
            </div>
          } */}
          <Button type='submit' variant='outline-dark' className='submitButton'>
            Submit
          </Button>
        </Form>
        {this.state.myFavCatRes.map((item) => {
          return (
            <>
              <hr></hr>
              <div className='divCenter'>
                <h1 className='categName'>{item.name.toUpperCase()}</h1>
              </div>
              <hr></hr>
              {item.data.map((value, idx) => {
                return (
                  <>
                    <div id='divvvContt' key={idx}>
                      {idx % 2 == 0 && (
                        <div class='blog-card'>
                          <div class='meta'>
                            <div class='photo'>
                              {' '}
                              <img src={value.image} alt='' />
                            </div>
                            <ul class='details'>
                              <li class='author'>{value.source.name}</li>
                              <li class='date'>{value.publishedAt.substring(0, 10)}</li>
                            </ul>
                          </div>
                          <div class='description'>
                            <h1>{value.title}</h1>
                            <h2>
                              <p>{value.description}</p>
                            </h2>
                            <p class='read-more'>
                              <Button className='buttonCardd' onClick={() => this.addArticle(idx, item.name)}>
                                Read Later
                              </Button>
                              <a className='buttonCarddArt' href={value.url}>
                                <Button variant='outline-dark'>Go to Article</Button>
                              </a>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* //<div key ={idx}> */}
                      {/* <Card className="text-center">
      <Card.Header>{value.source.name}</Card.Header>
      <Card.Body>
          <Card.Img variant="top" src={value.image} style={{ width: '20rem', height: '20rem', margin: 'auto' }} />
          <Card.Title>{value.title}</Card.Title>
          <Card.Text style={{ overflow: 'auto', height: '3rem' }}>
          {value.description}
          </Card.Text>
          <Button variant="outline-success" onClick={()=>this.addArticle(idx,item.name)} >Read Later</Button>
          <a href={value.url}><Button variant='outline-dark' >Go to Article</Button></a>
          {/* <a href={value.url} className="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a> */}
                      {/* </Card.Body>

      <Card.Footer className="text-muted">Publish Date: {value.publishedAt}</Card.Footer>
      </Card> */}
                      {!(idx % 2 == 0) && (
                        <div class='blog-card alt'>
                          <div class='meta'>
                            <div class='photo'>
                              {' '}
                              <img src={value.image} alt='' />
                            </div>
                            <ul class='details'>
                              <li class='author'>{value.source.name}</li>
                              <li class='date'>{value.publishedAt.substring(0, 10)}</li>
                            </ul>
                          </div>
                          <div class='description'>
                            <h1>{value.title}</h1>
                            <h2>
                              <p>{value.description}</p>
                            </h2>
                            <p class='read-more'>
                              <Button onClick={() => this.addArticle(idx, item.name)} className='buttonCardd'>
                                Read Later
                              </Button>
                              <a href={value.url}>
                                <Button variant='outline-dark'>Go to Article</Button>
                              </a>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                );
              })}
            </>
          );
        })}

        {/* {this.state.sports && <h1>{this.state.myFavCatRes[0].name}</h1>} */}
        {/* <h1>{this.state.myFavCatRes[1].name[0]}</h1> */}
      </>
    );
  }
}

export default withAuth0(MyNews);
