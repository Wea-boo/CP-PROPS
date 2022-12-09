import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

const UserData = {FullName: 'Walter Hartwell White',
                  Profession: 'Chemistry Teacher',
                  Bio: 'Walter Hartwell White Sr., also known by his drug-lord alias Heisenberg, is the main protagonist of the American crime drama television series Breaking Bad, portrayed by Bryan Cranston. Walter was a skilled chemist and co-founder of a technology firm before he accepted a buy-out from his partners. Walt became a high-school chemistry teacher in Albuquerque, and barely making ends meet with his family with wife Skyler (Anna Gunn) and son Walt Jr. (RJ Mitte). At the start of the series, the day after his 50th birthday, Walt is diagnosed with Stage III lung cancer. After this discovery, Walt resorts to manufacturing and selling methamphetamine with a former student, Jesse Pinkman (Aaron Paul), to ensure his family\'s financial security after his death. Due to his chemistry training and production route, Walt\'s "blue meth" is purer than any other on the market, and he is pulled deeper into the illicit drug trade.',
                  Picture: '/Walter_White_S5B.png'}

const handleName = (fn) => {
   alert(`your name is ${fn}`);
}
function App() {
  return (
    <div className="App">
      <Profile AlertName={handleName} Fullname={UserData.FullName} Profession={UserData.Profession} Biography={UserData.Bio} UserPic={UserData.Picture}/>
      <Profile AlertName={handleName}/>
    </div>
  );
}

export default App;
