const UserPortfolio = ({url,firstname,lastname}) => {
   return <a href={url}>{`Name: ${firstname} ${lastname}`}</a>
}

export const PersonName = ({firstname,lastname,url}) =>{
    return (
        <div>
             <h1>{`Name: ${firstname} ${lastname}`}</h1>
             <UserPortfolio firstname={firstname} lastname={lastname} url={url}/>
        </div>
    )
}