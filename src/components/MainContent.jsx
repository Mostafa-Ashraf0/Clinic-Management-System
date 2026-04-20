import '../assets/mainContent.css';


const MainContent = ({ children })=>{
    return(
        <div className='main-content'>
            <div className='in-container'>
                {children}
            </div>
        </div>
    )
}


export default MainContent;