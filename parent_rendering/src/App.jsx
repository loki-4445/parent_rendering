import './App.css'
import Test1 from './Compoments/test1/Test1.jsx'
function App(){
  let product1={image:"https://img.freepik.com/premium-photo/essential-oil-product-presentation-mockup-with-white-flowers-gradient-background_552988-3657.jpg",name:"BODY SPRAY" ,brand:"AXE",price:2099 }
  let product2={image:"https://hypebeast.com/image/2020/03/bur-rect.jpg",name:"Jacket" ,brand:"Louris",price:1999 }
  let product3={image:"https://cloud.kujo.com/pants-khaki-l3-full-c902fb4153.jpg",name:"PANT" ,brand:"HOOKI",price:1099 }
  let product4={image:"https://img.freepik.com/premium-photo/pair-shoes-wooden-deck-with-landscape-background_777078-2046.jpg",name:"SHOES" ,brand:"PUMA",price:999 }
  let product5={image:"https://www.advenchar.com/wp-content/uploads/2021/05/Mens-Crew_stay-wild_red-700x500.jpg",name:"T-SHIRT" ,brand:"WOODEN",price:3199 }
  let product6={image:"https://media.cnn.com/api/v1/images/stellar/prod/best-running-gloves-lead.jpg?c=16x9",name:"GLOVES" ,brand:"STRIKER",price:1099 }
  
  return(
   <div className='products'>
     <div className='products1'>
      <Test1  product={product1} className='product1'/>
      <Test1 product={product2} className='product2'/>
      <Test1 product={product3} className='product3'/>
      </div>
      <div className='Products2'>
      <Test1 product={product4} className='product4'/>
      <Test1 product={product5} className='product5'/>
      <Test1 product={product6} className='product6'/>
    </div>
   </div>
  )
}
export default App