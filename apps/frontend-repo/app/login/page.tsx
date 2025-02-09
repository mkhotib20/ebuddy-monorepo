import BrandIdentity from '@/components/login/BrandIdentity';
import Container from '@/components/login/Container';
import LoginSection from '@/components/login/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <BrandIdentity />
      <LoginSection />
    </Container>
  );
};

export default LoginPage;
