export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "숑이",
      },
      content: "첫 번째 게시글 #산책 #간식",
      Images: [
        {
          src:
            "https://i.pinimg.com/originals/70/98/dd/7098dd7e46ee7b223ce933aa2557ebca.jpg",
        },
        {
          src:
            "https://t1.daumcdn.net/liveboard/dispatch/7e1be989984a477ea5105a47f6db1ea4.jpg",
        },
        {
          src:
            "https://t1.daumcdn.net/liveboard/dispatch/4229a694440d48d48252be239bcf2887.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "방구",
          },
          content: "같이 산책가자",
        },
        {
          User: {
            nickname: "둥근",
          },
          content: "간식 정보좀 주세여",
        }],
    }],
    imagePaths:[],
    postAdded: false
};

const ADD_POST = 'ADD_POST'
export const addPost = {
    type: ADD_POST
}
const dummyPost = {
    id:2,
    content:'더미데이터 입니다',
    User:{
        id:1,
        nickname:'숑이'
    },
    Images:[],
    Comments:[]

}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return{
          ...state,
          mainPosts: [dummyPost, ...state.mainPosts], //새게시물이 위로 올라가기 위해 앞에다가 추가한다
        postAdded: true
        }

    default:
      return state;
  }
};

export default reducer;
