import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x759fdA94eb5315879C840332705392F72e1d609f'
);

export default instance;
