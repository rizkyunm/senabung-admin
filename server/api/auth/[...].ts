import { $fetch, FetchError, FetchOptions } from 'ohmyfetch'
import AuthModule from '../../../repository/modules/auth'
import { showError } from 'nuxt/app'

const router = createRouter()
const fetchOptions: FetchOptions = {
  baseURL: process.env.NUXT_PUBLIC_API_BASE,
}
const fetcher = $fetch.create(fetchOptions)
const authModule = new AuthModule(fetcher)

router.post(
  '/login',
  defineEventHandler(async (event) => {
    const payload = await readBody(event)

    try {
      return await authModule.login(payload)
    } catch (error) {
      if (error instanceof FetchError) {
        return error.data.data.errors
      }
      showError({
        statusCode: 500,
        statusMessage:
          'Terjadi kesalahan dalam proses login, silahkan coba lagi',
      })
    }
  })
)

router.get(
  '/session',
  defineEventHandler(async (event) => {
    const token = event.req.headers?.authorization

    if (!token) {
      throw new Error()
    }

    try {
      const session = await authModule.session(token)
      return session
    } catch (error) {
      console.log(error)
      showError({
        statusCode: 403,
        statusMessage:
          'Akses terbatas ! anda tidak dapat mengakses resource ini',
      })
    }
  })
)

router.post(
  '/logout',
  defineEventHandler(async () => {
    return 'Anda berhasil keluar !'
  })
)

export default useBase('/api/auth/', router.handler)
