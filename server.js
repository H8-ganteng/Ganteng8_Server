const http = require('./app')
const port = process.env.PORT || 3000
const io = require('socket.io')(http, {
  cors: {
    origin: "https://tebak-gambuar.web.app",
    method: ['POST','GET','DELETE','UPDATE','PATCH'],
    credentials: true
  },
  allowEIO3: true
})

const { User, Question } = require('./models')
const data = {}
let isGameStart = false
io.on('connection', (socket) => {
  console.log('a user is connected')
  socket.on('login', async username => {
    if (!isGameStart) {
      const user = await User.create({ username, points: 0 })
      io.emit('addUser', { user, isGameStart })
    } else {
      socket.emit('addUser', { isGameStart })
    }
  })
  // socket.on('countdown', ({ username, counter }) => {
  //   if (!data.username) {
  //     data.username = username
  //   }
  //   if(data.username === username) {
  //     io.sockets.emit('countdown', counter);
  //   }
  //   if(counter <= 0) {
  //     delete data.username
  //   }
  // })
  socket.on('setPoints', async user => {
    console.log('azzzzzzzz')
    await User.update({
      points: user.points
    }, { where: { username: user.username } })
    io.emit('setPoint', user);
  })
  socket.on('startGame', () => {
    if(!isGameStart) {
      io.emit('startGameServer')
      isGameStart = true
    }
  })
  socket.on('gameFinish', () => {
    isGameStart = false
  })
})

http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})