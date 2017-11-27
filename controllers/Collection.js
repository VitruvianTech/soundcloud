const DOWNLOAD = '@soundcloud-downloader/machete-bundle/Collection/DOWNLOAD';
const DOWNLOAD_SUCCESS = '@soundcloud-downloader/machete-bundle/Collection/DOWNLOAD_SUCCESS';
const DOWNLOAD_FAIL = '@soundcloud-downloader/machete-bundle/Collection/DOWNLOAD_FAIL';

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
    promise: (client) => client.post('/@soundcloud-downloader/machete-bundle/Collection/download', { data })
  };
}
