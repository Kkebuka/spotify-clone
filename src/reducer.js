export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finsish developings
  token:
    "BQAmKHdBM4Wawa6ZWUWM-dR_WZo1ZvUXEjVuUYtFumCeDzb-80Yr5277p9GSRtdeggLQANRsnvZ8Zu9T0WWDr1IpyzkBBhGOfMmC0exu4h7_dIcwudFKt18UVv4wKDPt_vq67QHYkjf3aocTaUVzA-eIDWJcv9jlsXCUdVYhOl9Ir2ZvzXOZOQbD7X0XCVDjkjytj7NVh25wCinLr6WR",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
