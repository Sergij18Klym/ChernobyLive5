const socket = io('/')
const videoGrid = document.getElementById('video-grid')
/*
const myPeer = new Peer(undefined, {
  secure: true,
  host: 'videowebchatpeerjs.herokuapp.com',
  port: 443
})
*/
const balbes = document.getElementById('balbesnames').innerHTML;
console.log(balbes)
const balbe = document.getElementById('balbesnam').innerHTML;
console.log(balbe)

const myPeer = new Peer(/*balbes*/undefined, {
  host: '/',
  port: '3001'
})


const myVideo = document.createElement('video')

const mymatros = document.createElement('matros')

myVideo.muted = true
const peers = {}
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  addVideoStream(myVideo, stream, mymatros)

  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')

  const matros = document.createElement('matros')    

    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream, matros)
    })
  })

  socket.on('user-connected', userId => {
    connectToNewUser(userId, stream)
  })
})

socket.on('user-disconnected', userId => {
  if (peers[userId]) peers[userId].close()
})

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')

  const matros = document.createElement('matros')

  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream, matros)
  })
  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}

function addVideoStream(video, stream, matros) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)

  matros = balbes
  videoGrid.append(matros)
}