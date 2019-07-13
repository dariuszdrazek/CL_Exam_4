import React from 'react';
import ReactDOM from 'react-dom';

function UserCard(props) {
     const words =
          props.name === '' ||
          props.surname == '' ||
          props.city === '' ||
          props.address === '';
     const code = props.postcode.length === 6 || props.postcode.length === 5;
     if (!words && code) {
          return (
               <div class="card">
                    <div>
                         <h5>
                              {props.name} {props.surname}
                         </h5>
                         <div>{props.address}</div>
                         <div>
                              {props.postcode} {props.city}
                         </div>
                    </div>
               </div>
          );
     } else {
          return (
               <div className="alert alert-danger">Dane są nieprawidłowe!</div>
          );
     }
}

function App(props) {
     return (
          <>
               <UserCard
                    name="Dariusz"
                    surname=""
                    address="adres"
                    postcode="10-560"
                    city="Olsztyn"
               />
          </>
     );
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById('app'));
export { App, UserCard };
