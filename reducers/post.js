export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '숑이',
      },
      content: '첫 번째 게시글 #산책 #간식',
      Images: [
        {
          src:
            'https://i.pinimg.com/originals/70/98/dd/7098dd7e46ee7b223ce933aa2557ebca.jpg',
        },
        {
          src:
            'https://t1.daumcdn.net/liveboard/dispatch/7e1be989984a477ea5105a47f6db1ea4.jpg',
        },
        {
          src:
            'https://t1.daumcdn.net/liveboard/dispatch/4229a694440d48d48252be239bcf2887.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: '방구',
          },
          content: '같이 산책가자',
        },
        {
          User: {
            nickname: '둥근',
          },
          content: '간식 정보좀 주세여',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  content: '더미데이터 입니다',
  User: {
    id: 1,
    nickname: '숑이',
  },
  Images: [],
  Comments: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], // 새게시물이 위로 올라가기 위해 앞에다가 추가한다
        addPostLoading: false,
        addPostDone: true,
        addPostError: null,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
        addCommentError: null,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
