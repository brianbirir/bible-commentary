import { http } from '../../plugins'

class BibleHttpService {
  getVerses(verses: string) {
    try {
      return http.get(verses)
    } catch (error) {
      console.error(error)
    }
  }
}

export default new BibleHttpService()
