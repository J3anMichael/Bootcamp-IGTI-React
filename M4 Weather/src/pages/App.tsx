import React from 'react'; 
import { QueryClient, QueryClientProvider } from 'react-query';
import CitySearch from '../molecules/CitySearch.component'
import '../styles/colors.styles.css';



function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
      <CitySearch />
    </div>
    <div></div>
    </QueryClientProvider>
    
  );
}

export default App;
