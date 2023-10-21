import PropertiesProvider from "./properties";


const RootContext = ({ children }) => {
  return (
    <div>
      <PropertiesProvider>{children}</PropertiesProvider>
    </div>
  );
};
export default RootContext;
