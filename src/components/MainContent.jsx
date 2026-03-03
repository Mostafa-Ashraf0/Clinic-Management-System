import '../assets/mainContent.css';


const MainContent = ({ children,CusPadding })=>{
    return(
        <div className='main-content' style={CusPadding && {padding:`${CusPadding}px`}}>
            {children}
        </div>
    )
}


export default MainContent;