import React,{Component} from  'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2 className="heading">OUR BAKERY MENU</h2>
        <h5>
          Cherish the Sweet Time
        </h5>
      </div>
    );
  }
}

const pizza=[

    {
    name : "Blueberry",
    ingredients : "mithai, cakes, Breads, Desserts and sweet snacks",
    photoName : "./cake/blueberry.jpg",
    priceName : 20,
    soldOut : false,
    },

    {

    name : "ButterScotch",
    ingredients : "mithai, cakes, Breads, Desserts and sweet snacks",
    photoName : "./cake/butterscotch.jpg",
    priceName : 18,
    soldOut : false,

    },

    {
    name : "chocolate",
    ingredients : "mithai, cakes, Breads, Desserts and sweet snacks",
    photoName : "./cake/chocolate.jpg",
    priceName : 15,
    soldOut : false,
    },
    {

    name : "fruit-Overload",
    ingredients : "mithai, cakes, Breads, Desserts and sweet snacks",
    photoName : "./cake/fruit-overload.jpg",
    priceName : 10,
    soldOut : false,
    },

    {
    name:"Fudge",
    ingredients:"mithai, cakes, Breads, Desserts and sweet snacks",
    photoName:"./cake/fudge.jpg",
    priceName:8,
    soldOut:false,
    },

    {
    name : "Pineapple",
    ingredients : "mithai, cakes, Breads, Desserts and sweet snacks",
    photoName : "./cake/pineapple.jpg",
    priceName : 20,
    soldOut : true,
    },
 ];

export default class App extends Component {
  render() {
    return (
      <div>
        <Menucard/>
      </div>
    );
  }
}

class Menucard extends Component {
  render() {
    return (
      <div className="container">

        <Header />

        <div>

          <div className="menu">

            {pizza.map((list) => (
              <div className="card">

                <Card
                  name={list.name}
                  priceName={list.priceName}
                  ingredients={list.ingredients}
                  photoName={list.photoName}
                  soldOut={list.soldOut} 
                />

              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}



class Card extends Component {
  render() {
    return (
      <div>

        <div className = {`${this.props.soldOut ? 'sold-out' : ''}`}>

          <img src={this.props.photoName}className="itemImage" ></img>

          <h2>{this.props.name}</h2>

          <p className="price">{this.props.soldOut ? ('SOLD OUT') :( this.props.priceName)}</p>

          <p>{this.props.ingredients}</p>

          <button className = "btn">Order</button>

        </div>
      </div>
    );
  }
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  if(!isOpen){
    return <p className = 'close'>we're Closed!!</p>
  }

  return (
    <footer className = 'footer'>
      {isOpen ?(
        <div className = 'order'>
          <p>we're open until {closeHour}:00. come and visit us or order online</p>
          <button className = 'btn'>Order</button>
        </div>
      ) : (
        <p>we are closed!!</p>
      )}
    </footer>
  )
}
    
  
