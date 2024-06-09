import { Header } from '../../Header/Header';
import { HomeTitle } from '../../Home/HomeTitle';

import { Frame } from '../../Parts/Frame/Frame';

const HomePage: React.FC = () => {
  return (
    <section className="flex h-[100dvh] flex-col xs:p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="relative overflow-hidden rounded-[30px]">
        <Header />
        <div className="relative grid gap-0 xs:h-[calc(100vh-16px)] sm:h-[calc(100vh-32px)] md:h-[calc(100vh-48px)] md:grid-cols-2 lg:h-[calc(100vh-64px)]">
          <div className="items-center justify-center bg-skin-background p-6 transition-colors duration-300 xs:hidden md:flex"></div>
          <HomeTitle />
          <Frame hero={true} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
