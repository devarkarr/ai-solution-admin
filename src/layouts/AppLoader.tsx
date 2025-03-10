import { LoadingOverlay } from "@mantine/core";

const AppLoader = () => {
  return (
    <LoadingOverlay
      visible={true}
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
    />
  );
};

export default AppLoader;
