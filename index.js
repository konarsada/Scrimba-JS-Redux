import store from "./redux"
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"

store.dispatch(changeCount(42))
store.dispatch(addFavoriteThing("Door bells"))
store.dispatch(addFavoriteThing("Sleigh bells"))
store.dispatch(removeFavoriteThing("door bells"))
store.dispatch(setYouTubeTitle("Learning Redux is Fun!"))
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())

/*
{count: 42, favoriteThings: [], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Door bells"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Door bells", "Sleigh bells"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 1, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 1, votes: {up: 1, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 2, votes: {up: 1, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 2, votes: {up: 2, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 3, votes: {up: 2, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 3, votes: {up: 3, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 3, votes: {up: 3, down: 1}}}
*/