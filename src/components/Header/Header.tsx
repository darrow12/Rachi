import textLogoImg from '/images/text-logo.svg';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={textLogoImg} alt="Rachi logo" />
    </Container>
  );
}