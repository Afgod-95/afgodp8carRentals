
//updating profile pic 
const personalDetails = [
    {id: 0, name: 'Guest', profile: "/images/avatar.jpeg"}
]
document.getElementsByClassName('imageContainer').innerHTML = personalDetails.map(item => {
    const {profile, name} = item
    console.log(profile, name)
    return(
        
       `<div class = "imgBox" >
            <img src = ${profile} />
        </div>
        <div>
            <label for = "name">${name}</label>
        </div>`
      )
}).join()

console.log("Home.js")