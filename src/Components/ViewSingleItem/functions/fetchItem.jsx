import { routes } from '../../../Config/apiRoutes'
import { sendPostRequestWithToken } from '../../../Config/Networking'

const fetchItem = async () => {
    const response = await sendPostRequestWithToken(routes.fetchSingleItem)
}