import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Button, Input } from "@chakra-ui/react"


const Details = () => {
  const navigate = useNavigate()
  const [artist, setArtist] = useState('')
  const [details, setDetails] = useState('')
  
  const handleSubmit = async () => {
  const response = await axios.post('http://127.0.0.1:8080', JSON.stringify(`info,${artist}`))
    if (response) {
      setDetails(response.data)
    }
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        {!details? <div className="flex flex-col justify-center items-center gap-8">
          <div className='flex gap-1'>
            <Input placeholder='Digite o nome do(a) artista' size='md' width={230} onChange={(e) => setArtist(e.target.value)} />
            <Button colorScheme='green' onClick={handleSubmit}>
              Buscar
            </Button>
          </div>
          <Button colorScheme='blue' width={70} onClick={() => navigate('/')}>
            Voltar
          </Button>
        </div> 
        : 
        <div className="flex flex-col gap-6">
          <Button colorScheme='yellow' width={70} onClick={() => navigate('/')}>
              Voltar
          </Button>
          <div dangerouslySetInnerHTML={{__html: details}} />
        </div>}
    </div>
  )
}

export default Details