import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Button, Input } from "@chakra-ui/react"

const Lyrics = () => {
  const navigate = useNavigate()
  const [artist, setArtist] = useState('')
  const [music, setMusic] = useState('')
  const [lyricsId, setLyricsId] = useState(null)
  const [lyrics, setLyrics] = useState('')
  
  const getMusic = async () => {
  const response = await axios.post('http://127.0.0.1:8080', JSON.stringify(`música,${artist}`))
    if (response) {
      setMusic(response.data)
    }
  }

  const getLyric = async () => {
    const response = await axios.post('http://127.0.0.1:8080', JSON.stringify(`letras,${lyricsId}`))
    if (response) {
      setLyrics(response.data)
    }
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        {!music? <div className="flex flex-col justify-center items-center gap-8">
          <div className='flex gap-1'>
            <Input placeholder='Digite o nome do(a) artista' size='md' width={230} onChange={(e) => setArtist(e.target.value)} />
            <Button colorScheme='green' onClick={getMusic}>
              Buscar
            </Button>
          </div>
          <Button colorScheme='blue' width={70} onClick={() => navigate('/')}>
            Voltar
          </Button>
        </div> 
        :
        !lyrics ? <div className="flex flex-col gap-8 items-center justify-center">
          <div className='text-justify' dangerouslySetInnerHTML={{__html: music.replaceAll('\n', '<br />')}} />
          <div className='flex gap-1'>
            <Input placeholder='Digite o ID de alguma música da lista acima' width={430} onChange={(e) => setLyricsId(e.target.value)} />
            <Button colorScheme='green' onClick={getLyric}>
              Buscar
            </Button>
          </div>
        </div>
        : 
        <div className="flex flex-col gap-6">
          <Button colorScheme='yellow' width={70} onClick={() => navigate('/')}>
              Voltar
          </Button>
          <div dangerouslySetInnerHTML={{__html: lyrics}} />
        </div> }
    </div>
  )
}

export default Lyrics