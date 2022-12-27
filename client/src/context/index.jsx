import { createContext, useContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('')
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign')

  const address = useAddress();
  const connect = useMetamask();

  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns')

    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pid: i
    }))

    return parsedCampaigns;
  }

  return (
    <StateContext.Provider value={{ address, contract ,connect, getCampaigns }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
