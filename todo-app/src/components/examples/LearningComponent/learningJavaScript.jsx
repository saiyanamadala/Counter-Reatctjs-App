const person={
    name:"sai",
    address: {
        line1: '525 E armour blvd',
        city: 'kansas city'
    },
    profiles:['twitter','facebook'],
    SecondProfile: ()=>{
        person.profiles.map(
            (profile)=>{
                console.log(profile)
            }
        )
    }
}

export default function LearningJavaScript(){
    return(
        <div className="App">
            <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.SecondProfile()}</div>
            </>
                
        </div>
    )
}