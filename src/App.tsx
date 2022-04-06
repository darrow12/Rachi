import { Contact } from './components/Contact/Contact';
import { DownloadApp } from './components/DownloadApp/DownloadApp';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HowItWorks } from './components/HotItWorks/HotItWorks';
import { Main } from './components/Main/Main';
import { Plans } from './components/Plans/Plans';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <HowItWorks />
      <DownloadApp />
      <Plans />
      <Contact />
      <Footer />
    </>
  )
};

export default App;