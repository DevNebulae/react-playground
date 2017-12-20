export const TRACKS_REQUEST = "TRACKS_REQUEST"
export const TRACKS_FINISHED = "TRACKS_FINISHED"
export const TRACKS_FAILED = "TRACKS_FAILED"

export const fetchTracks = () => ({
  type: TRACKS_REQUEST,
  data: null,
  isFetching: true,
  isInvalidated: null
})

export const fetchTracksFinished = data => ({
  type: TRACKS_FINISHED,
  data,
  isFetching: false,
  isInvalidated: null
})

export const fetchTracksFailed = isInvalidated => ({
  type: TRACKS_FAILED,
  data: null,
  isFetching: false,
  isInvalidated
})
