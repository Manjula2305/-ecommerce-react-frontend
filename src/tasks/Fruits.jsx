import React from 'react';

export const  Fruits=()=>{
  return (
    <>
      <ul
        style={{
          listStyleType: 'none',
          padding: 100,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <li style={{ textAlign: 'center' }}>
          <img
            src="https://thumbs.dreamstime.com/b/red-apple-leaf-slice-white-background-29914331.jpg"
            alt="Apple"
            width="200px"
            height="200px"
          />
          <h3>Apple</h3>
        </li>
        <li style={{ textAlign: 'center' }}>
          <img
            src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322096/mangoes-chopped-and-fresh.jpg"
            alt="Mango"
            width="200px"
            height="200px"
          />
          <h3>Mango</h3>
        </li>
        <li style={{ textAlign: 'center' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8G3tLIWUDKqA_KPah80Zz0N_lIZQ5Mb3ww&s"
            alt="Orange"
            width="200px"
            height="200px"
          />
          <h3>Orange</h3>
        </li>
      </ul>
    </>
  );}
