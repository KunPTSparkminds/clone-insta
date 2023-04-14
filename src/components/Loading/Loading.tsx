import { Modal, Spin } from "antd";
import React, { useContext } from "react";
import { LoadingContext } from "../../config/loading";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  const { isLoading, setLoading } = useContext(LoadingContext);
  return (
    <div className="loading">
      <Modal
        centered
        open={isLoading}
        onOk={() => setLoading(false)}
        onCancel={() => setLoading(false)}
        className="modal-loading"
      >
        <Spin size="large" />
      </Modal>
    </div>
  );
};

export default Loading;
