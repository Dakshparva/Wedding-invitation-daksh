
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import RSVP from './components/RSVP';
import Wishes from './components/Wishes';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CountdownTimer />
      <Story />
      <Gallery />
      <Venue />
      <RSVP />
      <Wishes />
    </div>
  );
}

export default App;