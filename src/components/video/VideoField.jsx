import { ImPlus } from "react-icons/im";
import VideosTable from "./VideosTable";

export default function VideoField({ state }) {
  const [
    videoLink,
    setVideoLink,
    videoName,
    setVideoName,
    videosList,
    setVideosList,
  ] = state;

  function onSubmit(event) {
    event.preventDefault();
    const video = {
      name: videoName,
      link: videoLink,
    };
    setVideosList([...videosList, video]);
    setVideoLink("");
    setVideoName("");
  }

  const video = videosList.map((video, index) => (
    <VideosTable key={index} setVideosList={setVideosList} data={video} />
  ));
  return (
    <fieldset>
      <label>
        <b>Video Name</b>
        <input
          placeholder="React hooks"
          type="text"
          value={videoName}
          onChange={(event) => setVideoName(event.target.value)}
        />
      </label>
      <label>
        <b>Video Link</b>
        <input
          placeholder="https://www.youtube.com/"
          type="text"
          value={videoLink}
          onChange={(event) => setVideoLink(event.target.value)}
        />
        <button className="round-btn" onClick={(event) => onSubmit(event)}>
          <ImPlus />
        </button>
      </label>
      {video}
    </fieldset>
  );
}
