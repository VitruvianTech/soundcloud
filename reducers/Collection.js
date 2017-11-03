const DOWNLOAD = '@vitruvian-tech/app-studio-soundcloud-downloader/Collection/DOWNLOAD';
const DOWNLOAD_SUCCESS = '@vitruvian-tech/app-studio-soundcloud-downloader/Collection/DOWNLOAD_SUCCESS';
const DOWNLOAD_FAIL = '@vitruvian-tech/app-studio-soundcloud-downloader/Collection/DOWNLOAD_FAIL';

const initialState = {
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DOWNLOAD:
      return state; // 'saving' flag handled by redux-form
    case DOWNLOAD_SUCCESS:
      return {
        ...state,
        ...action.result,
        error: null,
      };
    case DOWNLOAD_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        error: action.error
      } : state;
    default:
      return state;
  }
}

export function download(data) {
  return {
    types: [DOWNLOAD, DOWNLOAD_SUCCESS, DOWNLOAD_FAIL],
    promise: (client) => client.post('/@vitruvian-tech/app-studio-soundcloud-downloader/Collection/download', { data })
  };
}
