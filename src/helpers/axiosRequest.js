import axios from 'axios'

export default async function axiosRequest (url, options, body) {
  return await axios({
    url,
    data: body,
    options
  })
    .then(res => { return res })
    .then(data => {
      console.log(data)
      // return data
    })
    .catch(err => { return err })
}
