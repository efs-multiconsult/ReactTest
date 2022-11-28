import './App.css';
import UserTable from './components/brukertabell';

const users = [
  { brukernavn: "Erlend Førde Schjetne", alder: 29, empYr: 2019 , bildeUrl: "images/efs.jpg" },
  { brukernavn: "Ragnhild Johanne Tunheim", alder: 31, empYr: 2022 , bildeUrl: "images/rjt.jpg" },
  { brukernavn: "Hans Ole Løvland", alder: 67, empYr: 2016 , bildeUrl: "images/hol.jpg" },
  { brukernavn: "Inger Lise Gjerdebakken", alder: 40, empYr: 2021 , bildeUrl: "images/ingl.jpg" }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Her skal jeg teste å outpute data fra en respons
        </p>
        <UserTable tbx={users}/>
      </header>
    </div>
  );
}

export default App;
