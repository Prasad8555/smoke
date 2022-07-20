import './index.css'

const Header = (props) => {
    const {onClickLogin} = props

    const onClickLoginButton = () =>{
        onClickLogin()
    }

   return(
    <div className="navbar">
        <img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Group_3_ees3ld.png" alt="Ealers" />
        <img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658229762/Group_2_ced9tv.png" alt="Smoke" />
        <img src="https://res.cloudinary.com/aguruprasad/image/upload/v1658229709/Group_5_jpljmc.png" alt="Brands" onClick={onClickLoginButton} />
    </div>
)
}


export default Header

