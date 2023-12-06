function Avatar({userData}) {
   
    return ( 
    <div>        
        <img src={userData.avatar_url} width="300px" height="200px" />      
    </div>
)}


export default Avatar;