import React from 'react';
import {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase';
import {  onSnapshot, collection, query} from "firebase/firestore";
import './BioCards.css';




function BioCards(){

    const [people, setPeople] = useState([]);


    //setPeople([]) <- Push to an array

    //code that runs based on a condition (if statement kindof)


    useEffect(() => {
        const q = query(collection(database, "people"))
        const unsub = onSnapshot(q, (querySnapshot) => {
        setPeople(querySnapshot.docs.map(doc => doc.data()));
        });

        return () => {
            unsub();
        }
      }, []);



    return(
        <div>

            


            <div className = "bioCards__cardContainer">
            {people.map(person =>(
                //Below works with card on main screen
                <TinderCard
                    className="swipe"
                    key = {person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                    style = {{backgroundImage: `url(${person.url})` }}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}

            </div>
            
        </div>
    )
}

export default BioCards