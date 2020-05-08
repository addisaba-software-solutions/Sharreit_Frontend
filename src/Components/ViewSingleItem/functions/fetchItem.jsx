import { routes } from '../../../Config/apiRoutes'
import { sendGetRequestWithParam } from '../../../Config/Networking'

const fetchItem = async () => {
    const token = "A0D3QUQgA1gUASH2sUmm"
    return await sendGetRequestWithParam(routes.fetchSingleItem, { key: "id", value: token })
}

export default fetchItem