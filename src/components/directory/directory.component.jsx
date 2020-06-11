import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';
class Directory extends React.Component{

    constructor(){

        super(); 

        this.state ={
        sections:[
            {
              title: 'save',
              imageUrl: 'https://images.unsplash.com/photo-1478004521390-655bd10c9f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
              id: 1,
             // linkUrl: 'shop/hats'
            },
            {
              title: 'aam',
              imageUrl: 'https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=501&q=80',
              id: 2,
             // linkUrl: 'shop/jackets'
            },
            {
              title: 'strawberry',
              imageUrl: 'https://images.unsplash.com/photo-1535541201873-125fb9df316b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
              id: 3,
             // linkUrl: 'shop/sneakers'
            },
            {
              title: 'malta',
              imageUrl: 'https://images.unsplash.com/photo-1550715608-35629afe8b0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80',
              size: 'large',
              id: 4,
             // linkUrl: 'shop/womens'
            },
            {
              title: 'anar',
              imageUrl: 'https://images.unsplash.com/photo-1530730459653-e0edd4c6072e?ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80',
              size: 'large',
              id: 5,
             // linkUrl: 'shop/mens'
            }
          ]
          
        };
    }
render(){
    return(
        <div className='directory-menu'>
            {
                this.state.sections.map(({ title,imageUrl,id,size})=> (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
            
            </div>
    )
}

}

export default Directory;