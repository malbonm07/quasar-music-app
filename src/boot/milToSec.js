import milToSec from '../filters/convertToSeconds';

export default async ({ Vue }) => {
    Vue.use(milToSec);
}
