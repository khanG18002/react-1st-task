import Footer from './components/Footer'
import Head from './components/Head'
import PopularRecipes from './components/PopularRecipes'
import TopContributor from './components/TopContributor'

function App() {

  return (
    <>
      <div className=''>

        <Head /> {/* Firt part */}

        <TopContributor /> {/* Second part */}

        <PopularRecipes /> {/* Third part  */}

        <Footer /> {/* last part  */}


      </div>
    </>
  )
}

export default App
