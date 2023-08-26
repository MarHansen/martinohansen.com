import "../../css/custom.css";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <div className="mx-auto containers w-full px-4 md:px-5 lg:px-12">
    {children}
  </div>
);
export default Container;
