import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import products from './data/products';

class Shop extends Component {
     constructor(props) {
          super(props);

          this.state = {
               koszyk: [],
               disabled: false
          };
     }

     handleClick = (e, index) => {
          const product = e.target.id;
          const koszyk = [...this.state.koszyk, product];
          this.setState({
               koszyk
               //  disabled: this.state.koszyk.map((item, idx) =>
               //       index === idx ? { ...item, disabled: true } : item
               //  )
          });
     };

     render() {
          return (
               <div>
                    <Products
                         products={products}
                         handleClick={this.handleClick}
                         disabled={this.state.disabled}
                    />
                    <Card koszyk={this.state.koszyk} />
               </div>
          );
     }
}

class Products extends Component {
     render() {
          return (
               <>
                    <h2>Produkty</h2>
                    <ul>
                         {this.props.products.map((product, index) => {
                              return (
                                   <li key={index}>
                                        {product.name}
                                        <button
                                             className="btn btn-primary"
                                             onClick={e =>
                                                  this.props.handleClick(
                                                       e,
                                                       index
                                                  )
                                             }
                                             id={product.name}
                                             //  disabled={this.props.disabled}
                                             //  key={index}
                                        >
                                             Buy!
                                        </button>
                                   </li>
                              );
                         })}
                    </ul>
               </>
          );
     }
}

class Card extends Component {
     render() {
          return (
               <>
                    <h2>Koszyk</h2>
                    <ul>
                         {this.props.koszyk.map(item => {
                              return <li>{item}</li>;
                         })}
                    </ul>
               </>
          );
     }
}

class App extends Component {
     render() {
          return <Shop />;
     }
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById('app'));
// export { App, Shop, Products, Cart };
