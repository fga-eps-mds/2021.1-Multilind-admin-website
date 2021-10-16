export const nomalizeAuthRespose = (data) => ({
  name: data.user.name,
  email: data.user.email,
  token: data.token,
  refresh_token: data.refresh_token
})
