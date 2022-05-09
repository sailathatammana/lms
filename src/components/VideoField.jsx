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
          type="text"
          value={videoName}
          onChange={(event) => setVideoName(event.target.value)}
        />
      </label>
      <label>
        <b>Video Link</b>
        <input
          type="text"
          value={videoLink}
          onChange={(event) => setVideoLink(event.target.value)}
        />
        <button onClick={(event) => onSubmit(event)}>Add Link</button>
      </label>
      {video}
    </fieldset>
  );
}
