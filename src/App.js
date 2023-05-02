import "./App.css";
import { Footer, PageContent, MyNavbar } from "./components/";




// function formatTime(date) {
//   return date.toLocaleTimeString();
// }

// setInterval(formatTime, 1000);


// const time= formatTime(new Date());



function App() {
  return (
    <div className="min-h-screen">
      
      <MyNavbar />
 
      
      <PageContent />
      
      
      <Footer />
      

    </div>

      
      
   
  );
}

export default App;
