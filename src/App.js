import MovieList from './components/MoviesList';
import './App.css';
import SIdeBar from './components/SIdeBar';


function App() {
    return (
        <div className='App'>
            <SIdeBar/>
            <MovieList />
        </div>
    );
}

export default App;
