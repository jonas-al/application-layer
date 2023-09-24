import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-10'>
      <h1 className='text-3xl font-medium mb-7'>Escolha uma das opções</h1>
      <ul className='flex gap-10'>
        <li className='grid gap-2 place-items-center'>
          <p>
            Ver detalhes de um artista
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/details')}>
            Clique
          </Button>
        </li>
        <li className='grid gap-2 place-items-center'>
          <p>
            Ver álbums de um artista
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/albums')}>
            Clique
          </Button>
        </li>
        <li className='grid gap-2 place-items-center'>
          <p>
            Ver músicas populares de um artista
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/music')}>
            Clique
          </Button>
        </li>
        <li className='grid gap-2 place-items-center'>
          <p>
            Ver a letra de alguma música
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/lyrics')}>
            Clique
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Home