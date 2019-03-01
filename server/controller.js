module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body
    const db = req.app.get('db')
    const {session} = req

    let foundUser = await db.findUser({username})
    foundUser = foundUser[0].count

    if (foundUser != 0){
      return res.sendStatus(401)
    } else {
      let user = await db.register({username, password})
      session.user = user[0]
  
  
      console.log(session.user)
      res.status(200).send(session.user)
    }



  },
  login: async (req, res) => {
    const {username, password} = req.body
    const db = req.app.get('db')
    const {session} = req
    console.log(session)

    let foundUser = await db.login({username})
    session.user = foundUser[0]

    console.log(session.user)
    res.status(200).send(session.user)
  },
  getUser: (req, res) => {
    const {user} = req.session
    if(user){
      res.status(200).send(user)
    } else {
      res.sendStatus(401)
    }
  },
  logout: (req, res) => {
    req.session.destroy
    res.sendStatus(200)
  }
}