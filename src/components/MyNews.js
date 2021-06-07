import React, { Component } from 'react';
import {Form,Button,Card} from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


class MyNews extends Component {

  constructor(props) {
    super(props);
    this.state = {
        myFavCat: [],
        REACT_APP_SERVER: process.env.REACT_APP_SERVER,
         sports: false,
    business:false,
    technology:false,
    general:false,
    health:false,
    science:false,
    myFavCatRes:[],
    // Add to watch later states
    name: '',
    urlToImage: '',
    title: '',
    description: '',
    url: '',
    publishedAt: ''


        
    }
}

  // componentDidMount(){

  // }

  //define onsubmit function
  updateFav =async (event)=>{
event.preventDefault();
// console.log('this.state.myFavCat before',this.state.myFavCat);
await this.setState({
  
    sports: event.target.sports.checked,
    business:event.target.business.checked,
    technology:event.target.technology.checked,
    general:event.target.general.checked,
    health:event.target.health.checked,
    science:event.target.science.checked,
    
  
})
//send req to backend
let favCatResp = await axios.get(`${this.state.REACT_APP_SERVER}/favCat`,{params:{email:this.props.auth0.user.email,    sports:this.state.sports,  business:this.state.business,  technology:this.state.technology,  general:this.state.general,  health:this.state.health,   science:this.state.science}} )
await this.setState({
  myFavCat: favCatResp.data[0],
  
})
// console.log('this.state.myFavCat after',this.state.myFavCat);
//define requests to send requests to 3rd party API of favourite category news of user
let objectToArr=Object.entries(this.state.myFavCat);   
console.log('objectToArr',objectToArr);


let allRespArr = [];
  objectToArr.forEach(async(item,index)=>{
    // console.log('item[1]',item[1]);
    // console.log('hello from function forEach');
    if (!(item[0]=='_id')) {
    // console.log('hello from if 1');
      if (item[1]==true) {
        let urlReq= `https://newsapi.org/v2/top-headlines?category=${item[0]}&apiKey=fefe881ab37e4dfb8549c838a3228a39` 
        let catResp = await axios.get(urlReq);
        
        allRespArr.push({name:item[0], data:catResp.data.articles});
        
        this.setState({
          myFavCatRes:allRespArr
        })
        
      }
      console.log('allRespArr',this.state.myFavCatRes);
    }
    
    //  item.map(item=>{
      //   console.log('item',item);
      //  })
    });
    // console.log('this.state.scienceRes',this.state.scienceRes);
    // console.log('this.state.sportsRes',this.state.sportsRes);
    console.log('this.state.sports',this.state.sports);




}
addArticle = async (idx,categName) =>{
  // console.log('this.state.myFavCatRes.articles[idx].data.source.name',this.state.myFavCatRes.articles[idx].data.source.name);
  let chosenArticleData;
  console.log('idx',idx);
  console.log('this.state.myFavCatRes',this.state.myFavCatRes);
  this.state.myFavCatRes.forEach( (item,index)=>{
    if (item.name==categName) {
      item.data.forEach(async(value,index)=>{
         
        console.log('item.source.name',value.source.name);
        
        if (idx==index) {
           chosenArticleData={
             email : this.props.auth0.user.email,
            index : idx,
            categName : categName,
            name: value.source.name,
            urlToImage:value.urlToImage,
            title:value.title,
            description:value.description,
            url: value.url,
            publishedAt:value.publishedAt,
          }
          console.log('chosenArticleData',chosenArticleData);
        }
      });
    }
    // console.log('this.state.name',this.state.name);
    
    
    
  });
  console.log('this.state.name',this.state.name);
  //   const chosenArticleData={
    //    name: this.state.name,
    //    urlToImage: this.state.urlToImage,
    //    title: this.state.title,
    //    description: this.state.description,
    //    url: this.state.url,
    //    publishedAt: this.state.publishedAt
    //  }
    
    let ReqToDBReadLater= await axios.post(`${this.state.REACT_APP_SERVER}/addArticle`,chosenArticleData)
    console.log('ReqToDBReadLater',ReqToDBReadLater);
    this.props.passingReadLaterData(ReqToDBReadLater.data);
    // this.setState({

    // })


}
// updateSport =async (event)=>{
//  await this.setState({
//     sports: event.target.checked,
//   })
// }


    render() {
        return (
            <>
             <Form   onSubmit={this.updateFav}>
               <p>select your favourite news categories !</p> 
  { 
    <div key={`inline-checkbox`} className="mb-3">
      <Form.Check
        inline
        label="Sports"
        name="sports"
        type='checkbox'
        id={`inline-checkbox-1`}
        // checked ={this.state.sports}
        // onChange={this.updateSport}
      
      />
      <Form.Check
        inline
        label="business"
        name="business"
        type='checkbox'
        id={`inline-checkbox-2`}
      />
       <Form.Check
        inline
        label="Technology"
        name="technology"
        type='checkbox'
        id={`inline-checkbox-2`}
      />
       <Form.Check
        inline
        label="general"
        name="general"
        type='checkbox'
        id={`inline-checkbox-2`}
      />
       <Form.Check
        inline
        label="Health"
        name="health"
        type='checkbox'
        id={`inline-checkbox-2`}
      />
       <Form.Check
        inline
        label="Science"
        name="science"
        type='checkbox'
        id={`inline-checkbox-2`}
      />
    </div>
  }
  <Button type='submit' >updateFav</Button>
</Form>
{ this.state.myFavCatRes.map(item=>{
  return(
    <>
<h1>{item.name}</h1>
{item.data.map((value,idx)=>{
return(
  
  <div key={idx}>
  <Card className="text-center">
      <Card.Header>{value.source.name}</Card.Header>
      <Card.Body>
          <Card.Img variant="top" src={value.urlToImage} style={{ width: '20rem', height: '20rem', margin: 'auto' }} />
          <Card.Title>{value.title}</Card.Title>
          <Card.Text style={{ overflow: 'auto', height: '3rem' }}>
          {value.description}
          </Card.Text>
          <Button onClick={()=>this.addArticle(idx,item.name)} >Read Later</Button>
          <a href={value.url}><Button >Go to Article</Button></a>
      </Card.Body>
      <Card.Footer className="text-muted">Publish Date: {value.publishedAt}</Card.Footer>
  </Card>
</div>
)

})}
    </>
  )
})}

  {/* {this.state.sports && <h1>{this.state.myFavCatRes[0].name}</h1>} */}
  {/* <h1>{this.state.myFavCatRes[1].name[0]}</h1> */}
            </>
        )
    }
}

export default withAuth0(MyNews);
