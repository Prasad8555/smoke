import './index.css'

const TabItem = (props) => {
    const {tabData, activeTab, onClickTabItem} = props
    const {id, imageUrl, tabName} = tabData

    const tabClassName = activeTab === true ? "tab-Item active-tab" : "tab-item"

    const onClickTab = () =>{
        onClickTabItem(id)
    }

    return(
        <li className={tabClassName} onClick={onClickTab}>
            <img src={imageUrl} alt={tabName} />
            <p className="tab-item-name">{tabName}</p>
        </li>
    )
}

export default TabItem