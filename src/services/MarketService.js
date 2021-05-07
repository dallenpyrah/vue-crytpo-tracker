import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class MarketsService {
  async getAllMarketCoins() {
    try {
      const res = await api.get()
      console.log(res.data)
      AppState.marketData = res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const marketsService = new MarketsService()
