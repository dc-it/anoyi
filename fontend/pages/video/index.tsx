import AppHeader from "../../components/AppHeader"
import FullContainer from "../../components/Containers"
import { Doing, Down, Up } from "../../components/Icons"
import { InlineApps } from "../../constants/app"

const Video = () => {

  return (
    <div className='w-full p-10 flex flex-col space-y-6'>

      <AppHeader path={[InlineApps[1],]} />

      <FullContainer>
        <div className="h-full flex flex-col items-center justify-center gap-4 pb-24">
          <Doing className="w-64 h-64"></Doing>
        </div>
      </FullContainer>

    </div>
  )

}

export default Video