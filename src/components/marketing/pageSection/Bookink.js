import React from 'react'
import Container from '../../elements/Container'
import Assiette from '../../../media/images/Background/Assiette-burger-frites.png'
import Burger from '../../../media/images/Background/Burger.png'
import Sauce from '../../../media/images/Background/Sauce-pimente.png'
import Heading from '../../elements/DisplayTitles/Heading'


export default function Bookink() {
  return (
   <Container>
    <div className="relative mb-20  ">
<img src ={Burger} alt='hulberger' className="hidden md:block absolute -top-20 -left-36 z-10"/>
<img src ={Sauce} alt='hulb' className="hidden lg:block absolute bottom-0 left-0"/>
<img src ={Assiette} alt='hulberge' className="hidden lg:block absolute -bottom-52 -right-96"/>

<div className="max-w-3xl mx-auto sm:px-10 md:py-20">
<Heading variant="h3" alignement="center">
    Réservation
</Heading>

<Heading alignement="center" theme="secondary" className="mt-5 text-center">
    Réservez votre table
</Heading>

<form className="grid sm:grid-cols-2 gap-x-7 gap-y-6 ">
<div>
    <label htmlFor="name">Nom</label>
    <input 
    type="text" 
    name="name" 
    id="name"
     autoComplete="off"
      className="focus:ring-primary focus:border-primary block w-full border-gray-400 rounded-md p-5"
       placeholder="Euloge tabala"
       
       
       />
</div>

<div>
    <label htmlFor="email">Email</label>
    <input 
    type="email" 
    name="email" 
    id="email"
     autoComplete="off"
      className="focus:ring-primary focus:border-primary block w-full border-gray-400 rounded-md p-5"
       placeholder="Euloge@gmail.com"
       
       
       />
</div>

<div>
    <label htmlFor="date">Date</label>
    <input 
    type="date" 
    name="date" 
    id="date"
     autoComplete="off"
      className="focus:ring-primary focus:border-primary block w-full border-gray-400 rounded-md p-5"
    
       
       
       />
</div>

<div>
    <label htmlFor="time">time</label>
    <input 
    type="time" 
    name="time" 
    id="time"
     autoComplete="off"
      className="focus:ring-primary focus:border-primary block w-full border-gray-400 rounded-md p-5"
      
       
       
       />
</div>

<div>
    <label htmlFor="customer">Nombre de personnes</label>
    <input 
    type="text" 
    name="customer" 
    id="customer"
     autoComplete="off"
      className="focus:ring-primary focus:border-primary block w-full border-gray-400 rounded-md p-5 "
       placeholder="Nombre de personnes"
       
       
       />
</div>

<div>
    <label htmlFor="sendbooking" className="invisible">Trouver une tables</label>
    <input 
    type="button" 
    name="sendbooking" 
    id="sendbooking"
     
      className="bg-danger hover:bg-danger_hover w-full cursor-pointer text-white font-secondary tracking-widest uppercase py-5 rounded-md animate"
       value="Trouver une table"
       
       
       />
</div>
</form>
</div>
    </div>
   </Container>
  )
}
