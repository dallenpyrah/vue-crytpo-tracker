import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class MarketsService {
  async getAllMarketCoins() {
    try {
      const res = await api.get('markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false')
      console.log(res.data)
      AppState.marketData = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getOneMarketCoin(id) {
    try {
      const res = await api.get(id)
      console.log(res.data)
      AppState.activeCoin = res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const marketsService = new MarketsService()
