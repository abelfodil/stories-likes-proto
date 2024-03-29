import 'dotenv/config';
import {IgApiClient} from 'instagram-private-api';

const ig = new IgApiClient();

ig.state.generateDevice(process.env.IG_USERNAME);
const auth = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
console.log(JSON.stringify(auth));

const targetUser = await ig.user.searchExact('username');
console.log(targetUser)
