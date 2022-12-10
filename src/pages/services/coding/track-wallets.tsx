import DefaultLayout from "components/layouts/DefaultLayout"

const TrackWallets = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Track wallets that connect to your site in a database</div>
      <div className="flex flex-col items-center space-y-6 w-full md:w-2/4 mx-auto">
        Nothing too complicated. If a wallet connects to your website, I will store that in your database so you can track all wallets using your site. You will have to pay money for the database usage and wherever that database is hosted. You will also need to pay for any other backend expenses, such as the hosting service for the backend APIs used to store the data into the database.
      </div>
    </div>
  )
}

TrackWallets.layoutProps = {
  Layout: DefaultLayout,
}

export default TrackWallets
