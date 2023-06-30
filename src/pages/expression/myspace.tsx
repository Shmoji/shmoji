import A from "components/A"
import Header from "components/Header"

const Myspace = () => {
  return (
    <>
      <div className="bg-[url('/hubble-deep-field.jpg')] min-h-screen py-20 bg-white dark:bg-dark3 dark:text-white">
        <Header />
        <div>
          <div className="flex flex-col items-center w-full md:w-2/4 mx-auto mb-40">

            <div className="flex items-center mb-4 text-gray-300">
              <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/expression" className="text-blue-600 mr-1 ml-1">expression</A> / <A href="/expression/myspace" className="ml-1">myspace</A>
            </div>

            <div className="flex flex-col space-y-3">

              <div className="text-3xl font-bold">Myspace Shmoji</div>

              <div>come hangout with me virtually and watch music videos or funny videos. we can meet on Meez or WeeWorld</div>
            
              <iframe className="max-w-full" width="560" height="315" src="https://www.youtube.com/embed/vAjwuzb8ei0?autoplay=1"title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
              />

              <div className="text-3xl font-bold text-white">~~life is beautiful~~</div>

              <div className="-rotate-45 text-3xl font-bold text-white">eDgY...eMo</div>

            </div>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default Myspace
