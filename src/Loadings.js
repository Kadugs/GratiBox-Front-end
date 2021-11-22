import ReactLoading from 'react-loading';

const ButtonLoading = () => (
  <ReactLoading
    type="spin"
    color="white"
    height={'20%'}
    width={'20%'}
    className="loading"
  />
);

const ScreenLoading = () => (
  <ReactLoading
    type="spin"
    color="#E5CDB3"
    height={'30%'}
    width={'30%'}
    className="screen-loading"
  />
);

export { ButtonLoading, ScreenLoading };
