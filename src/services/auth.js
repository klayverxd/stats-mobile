export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'testetoken',
        user: {
          name: 'Klayver',
          cidade: 'Coreaú',
        },
      })
    }, 2000)
  })
}
