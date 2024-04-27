import Banner from './components/Banner/Banner'
import ChartSection from './components/ChartSection/ChartSection'
import Footer from './components/Footer/Footer'
import OurService from './components/OurServiceSection/OurService'
import PackageSection from './components/PackageSection/PackageSection'
import SchedulingSection from './components/SchedulingSection/SchedulingSection'
import TaskManagementSection from './components/TaskManagementSection/TaskManagementSection'

function App() {

  return (
    <div className='w-full'>
      <Banner />
      <TaskManagementSection />
      <ChartSection />
      <OurService />
      <SchedulingSection />
      <PackageSection />
      <Footer />
    </div>
  )
}

export default App
