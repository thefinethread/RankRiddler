// Server Testt
const root = process.env.REACT_APP_SOCKET_URL

// Development
  // const root = 'http://localhost:3001';

const API = {
  BugSubmit: `${root}/form/bug`,
  ReportSubmit: `${root}/form/report`,
  GetAllUsers: `${root}/allusers`,
  SaveUser: `${root}/saveuser`,
  GetUserByUuid: `${root}/user`,
  UpdatePoints: `${root}/updatepoints`,
  GameSubmit: `${root}/form`,

  GetApexData: `${root}/form/apexdata`,
  GetFortniteData: `${root}/form/fortnitedata`,
  GetOverwatchData: `${root}/form/overwatchdata`,
  GetRainbowData: `${root}/form/rainbowdata`,
  GetValorantData: `${root}/form/valdata`,
  GetLeagueData: `${root}/form/leaguedata`,
  GetCsgoData: `${root}/form/csgodata`,
  GetRocketData: `${root}/form/rocketdata`,

  GetValVideos: `${root}/videos`,
  VoteVideo: `${root}/videos/vote`,
  CreateVideoRecord: `${root}/videos/create`,
  GetVotesByID: `${root}/videos/votes`,

  GetCsgoVideo: `${root}/videos/csgo`,
  CreateCsgoVoteRecord: `${root}/videos/csgo/create`,
  RecordCsgoVotes: `${root}/videos/csgo/record`,
  GetAllCsgoVotes: `${root}/videos/csgo/getvotes`,

  GetLeagueVideo: `${root}/videos/league`,
  CreateLeagueVoteRecord: `${root}/videos/league/create`,
  RecordLeagueVotes: `${root}/videos/league/record`,
  GetAllLeagueVotes: `${root}/videos/league/getvotes`,

  GetOverwatchVideo: `${root}/videos/overwatch`,
  CreateOverwatchVoteRecord: `${root}/videos/overwatch/create`,
  RecordOverwatchVotes: `${root}/videos/overwatch/record`,
  GetAllOverwatchVotes: `${root}/videos/overwatch/getvotes`,

  MultiplayerWon: `${root}/multiplayerwon`, // Needs username in body
  MultiplayerLost: `${root}/multiplayerlost`, // Needs username in body

  CreateStats: `${root}/createStats`,
  GetStats:  `${root}/stats`,

  UserMatchHistory: `${root}/history`,
  UserWins: `${root}/wins`,
};

export default API;
