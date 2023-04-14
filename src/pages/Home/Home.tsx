import React, { useContext, useEffect, useState } from "react";
import api from "../../api/api";
import Loading from "../../components/Loading/Loading";
import { LoadingContext } from "../../config/loading";
import { User } from "../../models";
import Post from "./components/Post";
import Reels from "./components/Reels";

interface IHomeProps {}

interface TPinCode {
  [x: string]: string;
}

interface TPinInputs {
  pin1?: TPinCode;
  pin2?: TPinCode;
}

const initInputs: TPinInputs = {
  pin1: {
    pin0: "",
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
  },
  pin2: {
    pin0: "",
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
  },
};

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [posts, setPosts] = useState<User[]>();
  const { setLoading } = useContext(LoadingContext);
  const [state, setState] = useState(initInputs);
  console.log(state);
  useEffect(() => {
    getPosts();
    setState({
      ...state,
      pin1: {
        ...state.pin1,
        pin0: "1",
      },
    });
  }, []);

  const getPosts = async () => {
    setLoading(true);
    const { body } = await api.getPosts();
    if (body) {
      setPosts(body);
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <Reels />
      <div className="list-post">
        {posts?.map((item, index) => (
          <Post post={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
