import { createRoot } from "react-dom/client";
import './style.css';

const root = createRoot(document.getElementById('root'));
const logoText= {
    textAlign: 'left',
    fontSize: 25,
    color:'#995c00',
    display: 'inline-block'
}
const logoImg= {
    width: 25,
    height: 25
}
function CardComponent({image_name,image_alt_name,name,price}){
    return(
        <div className="card">
            <img src={require(`./img/${image_name}`)} alt={image_alt_name} className="card-img"/>
            <p className="card-text">{name}</p>
            <p className="card-text">Price : {price}/-</p>
            <button className="card-button">Buy Now</button>
        </div>
    );
}
root.render(
    <>
        {/* <!-- For header start --> */}
            <div className="header">
                <p style={logoText}><img src={require('./img/birthday-cake.png')} alt="birthday-cake" style={logoImg}/> Cake Villa... <span style={{fontSize: 15}}>(Test mai best)</span></p>
            </div>
        {/* <!-- for header end --> */}
        {/* <!-- create a pickup sections start --> */}
        <div style={{margin:20}}>
            <h1><u>Pick A Flavour</u></h1>
            <CardComponent image_name="straberry-cake.jpg" image_alt_name="straberry-cake" name="Straberry Cake" price="450"  />
            <CardComponent image_name="plate-cake.jpg" image_alt_name="plate-cake" name="Plate Cake" price="650"  />
            <CardComponent image_name="white-forest-cake.jpg" image_alt_name="black-forest-cake" name="Black Forest Cake" price="750"  />
            <CardComponent image_name="honeybee-cake.jpg" image_alt_name="honey-bee-cake" name="HoneyBee Sweet Cake" price="850"  />
            <CardComponent image_name="pink-cake.jpg" image_alt_name="pink-bread-cake" name="Pink Bread Cake" price="950"  />
            <CardComponent image_name="dark-chocolate-cake.jpg" image_alt_name="dark-Chocolate-cake" name="Dark Chocolate Cake" price="1000"  />
            <CardComponent image_name="straberry-cake.jpg" image_alt_name="straberry-cake" name="Strawberry Cake" price="1050"  />
        </div>
        {/* <!-- create a pickup section end --> */}
         {/* <!-- footer start --> */}
          <div className="footer">
            <p>Dummy copyright@2024 Cake Villa</p>
          </div>
          {/* <!-- footer end --> */}
    </>
);