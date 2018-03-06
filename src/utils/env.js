import cookie from 'js-cookie'
import qs from 'query-string'

export default {
  cookie: cookie.get(),
  url: qs.parse(location.search)
}
