import { useEffect, useState } from 'react';
import './style.scss';
import parsedData from './common/dataSource';

function App() {
  const [data, setData] = useState({
    results: []
  });

  const { results } = data;

  useEffect(() => {
    // console.log('Fetching data')
    // fetch("https://randomuser.me/api/?inc=name,picture&results=48")
    //   .then((data) => { return data.json() })
    //   .then((data) => { setData(data) })
    //   .catch((err) => { console.log(err) });
    //    setData(parsedData);

    (async () => {
      console.log('Fetching data')
      const rawData = await fetch("https://randomuser.me/api/?inc=name,picture&results=48");
      const data = await rawData.json();
      setData(data);
    })();

  }, []);

  return (

    <div id="app">
      <h1>List of users</h1>
      <div className="container">
        <div className="users row">
          {
            results?.map((item, index) => {
              const finalName = `${item.name.title} ${item.name.first} ${item.name.last}`;
              return <div className="col-2 user" key={`item-${index}`}>
                <img src={item.picture.thumbnail} alt={finalName} />
                <h3>{finalName}</h3>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
