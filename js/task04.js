import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LoadingData extends Component {
     constructor(props) {
          super(props);

          this.state = {
               width: 0,
               loading: false
          };
     }

     componentDidMount() {
          this.interval = setInterval(() => {
               this.setState({
                    width: this.state.width + 1,
                    loading: true
               });
          }, 100);
     }

     componentWillUnmount() {
          clearInterval(this.interval);
     }

     render() {
          let style = {
               width: this.state.width + '%'
          };

          if (this.state.width === 100) {
               clearInterval(this.interval);
               return <h1>Dane załadowane</h1>;
          } else {
               return (
                    <div className="progress">
                         <div className="progress-bar" style={style} />
                    </div>
               );
          }
     }
}

class App extends Component {
     render() {
          return (
               <>
                    <LoadingData />
               </>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById('app'));
export { App, LoadingData };
