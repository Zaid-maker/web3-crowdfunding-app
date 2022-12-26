import { useState } from 'react'
import { DisplayCampaigns } from '../components'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [campaigns, setCampaigns] = useState([])

    return (
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
    )
}

export default Home