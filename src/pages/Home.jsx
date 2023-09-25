import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='h-screen overflow-y-hidden flex flex-col justify-between items-center gap-10'>
      <h1 className='text-6xl font-medium mb-7 mt-40 font-Croissant'>Escolha uma das opções</h1>
      <ul className='flex h-1/2 gap-10 bg-slate-400 p-10 rounded-lg items-center text-lg text-gray-100 font-medium'>
        <li className='flex flex-col gap-4 items-center'>
          <p>
            Ver detalhes de um artista
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/details')}>
            Clique
          </Button>
        </li>
        <li className='flex flex-col gap-4 items-center'>
          <p>
            Ver álbums de um artista
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/albums')}>
            Clique
          </Button>
        </li>
        <li className='flex flex-col gap-4 items-center'>
          <p>
            Ver músicas populares de um artista
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/music')}>
            Clique
          </Button>
        </li>
        <li className='flex flex-col gap-4 items-center'>
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