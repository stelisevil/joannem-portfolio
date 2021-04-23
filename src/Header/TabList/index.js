const TabList = ({ setContent }) => (
  <ul className="cursor-default">
    <li
      className="m-2 cursor-pointer"
      onClick={() => {
        setContent("ux-and-ui");
      }}
    >
      UX and UI
    </li>
    <li
      className="m-2 cursor-pointer"
      onClick={() => {
        setContent("campaigns");
      }}
    >
      Campaigns
    </li>
    <li
      className="m-2 cursor-pointer"
      onClick={() => {
        setContent("graphic-design");
      }}
    >
      Graphic design
    </li>
    <li
      className="m-2 cursor-pointer"
      onClick={() => {
        setContent("social-and-video");
      }}
    >
      Social and Video
    </li>
    <li
      className="m-2 cursor-pointer"
      onClick={() => {
        setContent("art-direction");
      }}
    >
      Art Direction
    </li>
  </ul>
);

export default TabList;
