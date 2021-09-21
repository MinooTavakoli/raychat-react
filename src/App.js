import RayChat from './lib/components/RayChat';
import './App.css';

function App() {
  const rayToken = "6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2";
  return (
    <div style={{ display:'flex', 
              flexDirection:'column', 
              alignItems:'start', 
              justifyContent:'center', 
              gap:'1.5rem', 
              padding: '5rem' }}>
      <p>Test Component.</p>
       <RayChat rayToken={rayToken} />
    </div>
  );
}

export default App;
