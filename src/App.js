import {useState} from 'react'
import Header from './Components/HeaderSection'
import Banners from './Components/BannersSetion'
import TabItem from './Components/TabItem'
import Product from './Components/Product'
import './App.css';

const tabItemsList = [ 
  {id: 1, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658240896/Group_ujcr7r.png", tabName: "All" },
  {id: 2, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658240903/Group_12024_1_xrdg63.png", tabName: "Menu 1"},
  {id: 3, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658240903/Group_12024_1_xrdg63.png", tabName: "Menu 2"},
  {id: 4, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658240903/Group_12024_1_xrdg63.png", tabName: "Menu 3"},
  {id: 5, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658240903/Group_12024_1_xrdg63.png", tabName: "Menu 4"}
]

const tabsProductsList = [ 
  {tabId: 1, productsList : [  {id: 111, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 1", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 112, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 2", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 113, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 3", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 114, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 4", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31},
  {id: 115, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 5", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31} 
]},  {tabId: 2,  productsList : [  {id: 121, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 1", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 122, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 2", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 123, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 3", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 124, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 4", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31},
  {id: 125, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 5", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31} 
]},
 {tabId: 3,  productsList : [  {id: 131, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 1", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 132, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 2", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 133, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 3", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 134, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 4", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31},
  {id: 135, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 5", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31} 
]},
 {tabId: 4,  productsList : [  {id: 141, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 1", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 142, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 2", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 143, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 3", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 144, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 4", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31},
  {id: 145, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 5", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31} 
]},
 {tabId: 5,  productsList : [  {id: 151, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 1", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 152, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 2", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 153, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 3", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31}, 
  {id: 154, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 4", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31},
  {id: 155, imageUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Rectangle_12_uhxfhk.png", name: "Item 5", by: "Global X Change", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consect ", price: 5.31} 
]}
]

function App() {
  const [activeTabId, changeActiveTabId] = useState(1)
  const [loginStatus, changeLoginStatus] = useState(false)
  const [email, onChangeEmail] = useState("")
  const [password, onChangePassword] = useState("")
  const [submitionStatus, onChangeSubmitionStatus] = useState(false)
  const [errorMsgStatus, changeErrorMsgStatus] = useState(false)
  const [footerSttus, changeFooterStatus] = useState(true)

  const activeTabProductList = tabsProductsList.filter(eachTabList => eachTabList.tabId === activeTabId)
  const [productsObject] = activeTabProductList
  const {productsList} = productsObject

  const loginContainerClassName = submitionStatus === true | loginStatus === false ? "hide-login-page" : "show-login-page"
     
  const onClickSubmit = event => {
    event.preventDefault()
    if ((loginStatus === true) && (email !== "" ) && (password !== "") ){
      onChangeSubmitionStatus(true)
      changeErrorMsgStatus(false)
    }
    else{
      changeErrorMsgStatus(true)
    }
  }

  const  onChangeEmailInput  = event => {
    onChangeEmail(event.target.value)
  }
  

  const onChangePasswordInput = event =>{
    onChangePassword(event.target.value)
  }

   const onClickLogin = () =>{
        changeLoginStatus(true)
    }

  const onClickTabItem = (id) =>{
    changeActiveTabId(id)
  }

  const onClickCloseFooter = () =>{
    changeFooterStatus(false)
  }

  return (
    <div className="App backgrount-contaier">
      <div className={loginContainerClassName}>
        <div className='login-page'>
          <img src='https://res.cloudinary.com/aguruprasad/image/upload/v1658229762/Group_2_ced9tv.png' alt="logo" className='logo' />
        <form onSubmit={onClickSubmit} className="login-form">
          <lable htmlFor="email">Email</lable>
          <input value={email} className="email-input" id="email" onChange={onChangeEmailInput} />
          <label htmlFor='password'>Password</label>
          <input value={password} className="password-input" id="password" onChange={onChangePasswordInput} />
          {errorMsgStatus === true && <p className='error-message'>Please Enter The Email And password.</p>}
          <button type="submit" className='enter-button'>Enter</button>
        </form>
        </div>
      </div>
      <Header onClickLogin={onClickLogin} />
      <Banners />
      <ul className='menu-container'>
        {tabItemsList.map(eachTab => <TabItem tabData={eachTab} onClickTabItem={onClickTabItem} activeTab={activeTabId === eachTab.id} key={eachTab.id} />)}
        <li  className='arrow-button' ><img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658243511/Vector_1_yoecm7.png" alt="arrow" className='arrow-icon'  /></li>
      </ul>
      <ul className='products-container'>
        {productsList.map(eachProduct => <Product productData={eachProduct} key={eachProduct.id} />)}
      </ul>
      {
        footerSttus === true && <div className='footer-background-container'><div className='footer-container'><p className='footer-text'>Launch Your Own CBD Business</p><button type="button" className='close-button' onClick={onClickCloseFooter}><img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658277002/Vector_2_ntcfnt.png" alt="close" /></button></div></div>
      }
    </div>
  );
}

export default App;
