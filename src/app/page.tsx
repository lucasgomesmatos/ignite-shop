import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 8,
  border: '0',
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
    marginRight: '10px',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
});

export default function Home() {
  return (
    <div>
      <Button>
        <span>Teste</span>
        Enviar
      </Button>
    </div>
  );
}
