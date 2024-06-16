import { TotalNannies } from '@/components/Home/TotalNannies/TotalNannies';
import clsx from 'clsx';
import { Header } from 'components/Header/Header';
import { HomeTitle } from 'components/Home/HomeTitle';
import { Frame } from 'components/Parts/Frame/Frame';

const HomePage: React.FC = () => {
  return (
    <section className="flex h-[100dvh] flex-col xs:p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="relative overflow-hidden rounded-[30px]">
        <Header />
        <div
          className={clsx(
            'relative grid gap-0 xs:h-[calc(100vh-16px)]',
            'sm:h-[calc(100vh-32px)] md:h-[calc(100vh-48px)]',
            'md:grid-cols-2 lg:h-[calc(100vh-64px)]'
          )}
        >
          <div
            className={clsx(
              'items-center justify-center xs:hidden md:flex',
              'bg-skin-background p-6 transition-colors duration-300'
            )}
          ></div>
          <HomeTitle />
          <Frame hero={true} />
          <TotalNannies />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
